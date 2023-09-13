package sg.commcat.server.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Comment {

    private String id;
    private String username;
    private String text;
    private String timestamp;
    
}
