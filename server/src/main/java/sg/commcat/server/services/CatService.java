package sg.commcat.server.services;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.UUID;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import jakarta.json.Json;
import jakarta.json.JsonObject;
import sg.commcat.server.models.Location;
import sg.commcat.server.repositories.MongoRepo;
import sg.commcat.server.repositories.S3Repo;

@Service
public class CatService {

    @Autowired
    private S3Repo s3Repo;

    @Autowired
    private MongoRepo mongoRepo;

    public List<Document> getCatLocations() {
        return mongoRepo.getCatLocations();
    }

    public boolean doesCatExist(String catId) {
        return mongoRepo.doesCatExist(catId);
    }

    public JsonObject getCatInfo(String catId) {
        Document retrievedCat = mongoRepo.getCatInfo(catId);

        JsonObject catToReturn = Json.createObjectBuilder()
                .add("name", retrievedCat.getString("name"))
                .add("gender", retrievedCat.getString("gender"))
                .add("picture", retrievedCat.getString("picture"))
                .add("likes", retrievedCat.getString("likes"))
                .add("dislikes", retrievedCat.getString("dislikes"))
                .add("personality", retrievedCat.getString("personality"))
                .add("other", retrievedCat.getString("other"))
                .build();

        return catToReturn;
    }

    public JsonObject getCatInfoForWindow(double lat, double lng) {
        Document retrievedCat = mongoRepo.getCatInfoByCoords(lat, lng);

        JsonObject catToReturn = Json.createObjectBuilder()
                .add("id", retrievedCat.getString("_id"))
                .add("name", retrievedCat.getString("name"))
                .add("url", retrievedCat.getString("picture"))
                .build();

        return catToReturn;
    }

    public String processCatSubmission(String name, String gender, String community, MultipartFile picture,
            String likes,
            String dislikes, String personality, String other) {

        Document newCat = new Document();
        String catId = UUID.randomUUID().toString().substring(0, 8);

        Location loc = getCoordinates(community);
        Document location = new Document();
        location.append("lat", loc.getLat());
        location.append("lng", loc.getLng());

        newCat.append("_id", catId);
        newCat.append("name", name);
        newCat.append("gender", gender);
        newCat.append("community", community);
        newCat.append("location", location);
        newCat.append("picture", s3Repo.uploadImage(picture, catId));
        newCat.append("likes", likes);
        newCat.append("dislikes", dislikes);
        newCat.append("personality", personality);
        newCat.append("other", other);
        newCat.append("timestamp", System.currentTimeMillis());

        mongoRepo.insertIntoSubmissions(newCat);

        return catId;
    }

    private Location getCoordinates(String community) {

        Location location = new Location();
        Random random = new Random();

        double minLat = 0;
        double maxLat = 0;
        double minLng = 0;
        double maxLng = 0;

        switch (community) {
            case "boon-lay":
                minLat = 1.3104290426803966;
                minLng = 103.68146779308476;
                maxLat = 1.3314979054899967;
                maxLng = 103.72103480638327;
                break;
            case "choa-chu-kang":
                minLat = 1.3694764873679894;
                minLng = 103.7406678494042;
                maxLat = 1.4049021996715547;
                maxLng = 103.7552102102335;
                break;
            case "clementi":
                minLat = 1.3202471897740584;
                minLng = 103.75972410645711;
                maxLat = 1.3214088666863821;
                maxLng = 103.75914311364353;
                break;
            case "tampines":
                minLat = 1.33480749779194;
                minLng = 103.92593013697028;
                maxLat = 1.3493089047968339;
                maxLng = 103.98223506609067;
                break;
            case "woodlands":
                minLat = 1.4222929112669354;
                minLng = 103.77143944101523;
                maxLat = 1.4564110719625358;
                maxLng = 103.80025903568585;
                break;
            default:
                break;
        }

        double randomLat = minLat + (maxLat - minLat) * random.nextDouble();
        double randomLng = minLng + (maxLng - minLng) * random.nextDouble();

        location.setLat(randomLat);
        location.setLng(randomLng);

        return location;
    }

    public List<Document> getCatSubmissions() {

        List<Document> submissions = mongoRepo.getSubmissions();
        List<Document> filteredSubmissions = new ArrayList<>();

        submissions.stream().forEach((s) -> {
            s.remove("location");

            long timestampMillis = s.getLong("timestamp");
            s.remove("timestamp");

            Instant instant = Instant.ofEpochMilli(timestampMillis);
            ZonedDateTime timestamp = instant.atZone(ZoneOffset.ofHours(8));

            ZonedDateTime now = ZonedDateTime.now(ZoneOffset.ofHours(8));

            LocalDate timestampDate = timestamp.toLocalDate();
            LocalDate nowDate = now.toLocalDate();

            if (timestampDate.isEqual(nowDate)) {
                DateTimeFormatter formatter = DateTimeFormatter.ofPattern("'Today at' h:mm a");
                String formattedTimestamp = timestamp.format(formatter);
                s.append("timestamp", formattedTimestamp);
            } else if (timestampDate.isEqual(nowDate.minusDays(1))) {
                DateTimeFormatter formatter = DateTimeFormatter.ofPattern("'Yesterday at' h:mm a");
                String formattedTimestamp = timestamp.format(formatter);
                s.append("timestamp", formattedTimestamp);
            } else {
                DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MMM dd 'at' h:mm a");
                String formattedTimestamp = timestamp.format(formatter);
                s.append("timestamp", formattedTimestamp);
            }
        });

        filteredSubmissions.addAll(submissions);
        return filteredSubmissions;
    }

    public void approveSubmission(String id) {
        mongoRepo.approveSubmission(id);
    }

    public void rejectSubmission(String id) {
        s3Repo.deleteSubmission(id);
        mongoRepo.rejectSubmission(id);
    }

}
