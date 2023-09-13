package sg.commcat.server.models;

import lombok.Data;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Thread {

    private String id;
    private String username;
    private String title;
    private String text;
    private String timestamp;
    private List<Comment> comments;
    
}
