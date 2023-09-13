package sg.commcat.server.controllers;

import java.util.List;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.json.Json;
import jakarta.json.JsonObject;
import sg.commcat.server.models.Comment;
import sg.commcat.server.models.Thread;
import sg.commcat.server.services.ForumsService;

@RestController
@RequestMapping(path = "/api/forums", produces = MediaType.APPLICATION_JSON_VALUE)
public class ForumsController {

    @Autowired
    private ForumsService service;

    @GetMapping(path = "/threads")
    public ResponseEntity<List<Document>> getThreads() {
        return ResponseEntity.ok(service.getThreads());
    }

    @PostMapping(path = "/thread")
    public ResponseEntity<String> postNewThread(@RequestBody Thread thread) {

        JsonObject response = Json.createObjectBuilder()
                .add("success", "New thread created with ID $s".formatted(service.postNewThread(thread)))
                .build();

        return ResponseEntity.ok(response.toString());
    }

    @GetMapping(path = "/thread")
    public ResponseEntity<Document> getThreadById(@RequestParam String id) {
        return ResponseEntity.ok(service.getThreadById(id));
    }

    @PostMapping(path = "/thread/{threadId}")
    public ResponseEntity<String> postComment(@PathVariable String threadId, @RequestBody Comment comment) {

        JsonObject response = Json.createObjectBuilder()
                .add("success", "New comment posted with ID $s".formatted(service.postNewComment(comment)))
                .build();

        return ResponseEntity.ok(response.toString());
    }

}
