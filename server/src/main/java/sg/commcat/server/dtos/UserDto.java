package sg.commcat.server.dtos;

import lombok.Data;
import sg.commcat.server.enums.UserRole;

@Data
public class UserDto {

    private Long id;
    private String username;
    private String email;
    private String password;
    private UserRole role;
    
}
