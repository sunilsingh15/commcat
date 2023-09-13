package sg.commcat.server.controllers;

import java.util.List;

import org.bson.Document;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    
}
