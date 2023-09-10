package sg.commcat.server.controllers;

import java.util.List;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import jakarta.json.Json;
import jakarta.json.JsonObject;
import sg.commcat.server.services.CatService;

@RestController
@RequestMapping(path = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class CatController {

    @Autowired
    private CatService service;

    @GetMapping(path = "/locations")
    public ResponseEntity<List<Document>> getCatLocations() {
        return ResponseEntity.ok(service.getCatLocations());
    }

    @GetMapping(path = "/cat")
    public ResponseEntity<String> getCatInfoForWindow(@RequestParam double lat, @RequestParam double lng) {
        return ResponseEntity.ok(service.getCatInfoForWindow(lat, lng).toString());
    }

    @PostMapping(path = "/submit", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> submitNewCat(@RequestPart String name, @RequestPart String gender, @RequestPart String community,
            MultipartFile picture, @RequestPart(required = false) String likes,
            @RequestPart(required = false) String dislikes, @RequestPart(required = false) String personality,
            @RequestPart(required = false) String other) {

                JsonObject response = Json.createObjectBuilder()
                .add("success", service.processCatSubmission(name, gender, community, picture, likes, dislikes, personality, other))
                .build();

        return ResponseEntity.ok(response.toString());
    }

}
