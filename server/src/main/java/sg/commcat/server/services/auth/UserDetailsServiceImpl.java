package sg.commcat.server.services.auth;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import sg.commcat.server.models.User;
import sg.commcat.server.repositories.UserRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;

    public UserDetailsServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> optionalUser = userRepository.findFirstByUsername(username);

        if (optionalUser.isEmpty()) {
            throw new UsernameNotFoundException("User not found!", null);
        }

        return new org.springframework.security.core.userdetails.User(optionalUser.get().getUsername(),
                optionalUser.get().getPassword(), new ArrayList<>());
    }

}
