package sg.commcat.server.dtos;

import lombok.Data;
import sg.commcat.server.enums.UserRole;

@Data
public class AuthenticationResponse {
    
    private String jwt;
    private String name;
    private UserRole role;
    private Long userId;
    
}
