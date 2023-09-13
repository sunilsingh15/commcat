package sg.commcat.server.services.auth;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;
import sg.commcat.server.dtos.RegisterRequest;
import sg.commcat.server.dtos.UserDto;
import sg.commcat.server.enums.UserRole;
import sg.commcat.server.models.User;
import sg.commcat.server.repositories.UserRepository;

@Service
public class AuthServiceImplementation implements AuthService {

    private final UserRepository userRepository;

    public AuthServiceImplementation(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostConstruct
    public void createAdminAccount() {
        User adminAccount = userRepository.findByRole(UserRole.ADMIN);

        if (adminAccount == null) {
            User user = new User();
            user.setUsername("admin");
            user.setEmail("admin@commcat.sg");
            user.setPassword(new BCryptPasswordEncoder().encode("admin"));
            user.setRole(UserRole.ADMIN);
            userRepository.save(user);
        }
    }

    @Override
    public UserDto createUser(RegisterRequest registerRequest) {

        User user = new User();
        user.setUsername(registerRequest.getUsername());
        user.setEmail(registerRequest.getEmail());
        user.setPassword(new BCryptPasswordEncoder().encode(registerRequest.getPassword()));
        user.setRole(UserRole.USER);

        User createdUser = userRepository.save(user);

        UserDto createdUserDto = new UserDto();
        createdUserDto.setId(createdUser.getId());
        createdUserDto.setUsername(createdUser.getUsername());
        createdUserDto.setEmail(createdUser.getEmail());
        createdUserDto.setRole(createdUser.getRole());

        return createdUserDto;
    }

}
