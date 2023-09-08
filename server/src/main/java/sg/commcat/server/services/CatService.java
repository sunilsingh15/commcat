package sg.commcat.server.services;

import java.util.Random;
import java.util.UUID;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import sg.commcat.server.models.Location;
import sg.commcat.server.repositories.MongoRepo;
import sg.commcat.server.repositories.S3Repo;

@Service
public class CatService {

    @Autowired
    private S3Repo s3Repo;

    @Autowired
    private MongoRepo mongoRepo;

    public String processCatSubmission(String name, String gender, String community, MultipartFile picture, String likes,
            String dislikes, String personality, String other) {

        Document newCat = new Document();
        String catId = UUID.randomUUID().toString().substring(0, 8);

        Location loc = getCoordinates(community);
        Document location = new Document();
        location.append("lat", loc.getLat());
        location.append("lng", loc.getLng());

        newCat.append("_id", catId);
        newCat.append("name", name);
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

            default:
                break;
        }

        double randomLat = minLat + (maxLat - minLat) * random.nextDouble();
        double randomLng = minLng + (maxLng - minLng) * random.nextDouble();

        location.setLat(randomLat);
        location.setLng(randomLng);

        return location;
    }

}
