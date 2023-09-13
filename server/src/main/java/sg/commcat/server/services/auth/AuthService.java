package sg.commcat.server.services.auth;

import sg.commcat.server.dtos.RegisterRequest;
import sg.commcat.server.dtos.UserDto;

public interface AuthService {

    UserDto createUser(RegisterRequest registerRequest);
    
}
