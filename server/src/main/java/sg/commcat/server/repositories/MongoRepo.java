package sg.commcat.server.repositories;

import java.util.List;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.GroupOperation;
import org.springframework.data.mongodb.core.aggregation.ProjectionOperation;
import org.springframework.data.mongodb.core.aggregation.ReplaceRootOperation;
import org.springframework.data.mongodb.core.aggregation.UnwindOperation;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

@Repository
public class MongoRepo {

    @Autowired
    private MongoTemplate template;

    public void insertIntoSubmissions(Document newCat) {
        template.insert(newCat, "cats");
    }

    public List<Document> getCatLocations() {
        ProjectionOperation project = Aggregation.project("_id")
                .and("location.lat").as("lat")
                .and("location.lng").as("lng");

        GroupOperation group = Aggregation.group()
                .addToSet(new Document("_id", "$_id")
                        .append("lat", "$lat")
                        .append("lng", "$lng"))
                .as("locations");

        UnwindOperation unwind = Aggregation.unwind("locations");

        ReplaceRootOperation replaceRoot = Aggregation.replaceRoot("$locations");

        Aggregation pipeline = Aggregation.newAggregation(project, group, unwind, replaceRoot);

        return template.aggregate(pipeline, "cats", Document.class).getMappedResults();
    }

    public Document getCatInfoByCoords(double lat, double lng) {
        Query query = new Query(Criteria.where("location.lat").is(lat).and("location.lng").is(lng));
        return template.findOne(query, Document.class, "cats");
    }    

}
