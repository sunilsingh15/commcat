package sg.commcat.server.repositories;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class MongoRepo {

    @Autowired
    private MongoTemplate template;

    public void insertIntoSubmissions(Document newCat) {
        template.insert(newCat, "submissions");
    }

}
