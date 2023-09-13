package sg.commcat.server.controllers;

import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletResponse;
import sg.commcat.server.dtos.AuthenticationRequest;
import sg.commcat.server.dtos.AuthenticationResponse;
import sg.commcat.server.dtos.RegisterRequest;
import sg.commcat.server.dtos.UserDto;
import sg.commcat.server.models.User;
import sg.commcat.server.repositories.UserRepository;
import sg.commcat.server.services.auth.AuthService;
import sg.commcat.server.services.auth.UserDetailsServiceImpl;
import sg.commcat.server.utils.JwtUtils;

@RestController
@RequestMapping(path = "/api/auth")
public class AuthController {

    private final AuthService authService;
    private final AuthenticationManager authenticationManager;
    private final UserDetailsServiceImpl userDetailsService;
    private final JwtUtils jwtUtils;
    private final UserRepository userRepository;

    public AuthController(AuthService authService, AuthenticationManager authenticationManager,
            UserDetailsServiceImpl userDetailsService, JwtUtils jwtUtils, UserRepository userRepository) {
        this.authService = authService;
        this.authenticationManager = authenticationManager;
        this.userDetailsService = userDetailsService;
        this.jwtUtils = jwtUtils;
        this.userRepository = userRepository;
    }

    @PostMapping(path = "/register")
    public ResponseEntity<?> registerUser(@RequestBody RegisterRequest registerRequest) {
        UserDto createdUserDto = authService.createUser(registerRequest);

        if (createdUserDto == null) {
            return new ResponseEntity<>("User not created. Try again later.", HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(createdUserDto, HttpStatus.CREATED);
    }

    @PostMapping(path = "/login")
    public AuthenticationResponse createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest,
            HttpServletResponse response) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    authenticationRequest.getUsername(), authenticationRequest.getPassword()));
        } catch (BadCredentialsException e) {
            throw new BadCredentialsException("Incorrect username or password!");
        } catch (DisabledException e) {
            response.sendError(HttpServletResponse.SC_NOT_FOUND, "User is not active.");
            return null;
        }

        final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
        final String jwt = jwtUtils.generateToken(userDetails.getUsername());

        Optional<User> optionalUser = userRepository.findFirstByUsername(userDetails.getUsername());
        AuthenticationResponse authenticationResponse = new AuthenticationResponse();

        if (optionalUser.isPresent()) {
            authenticationResponse.setJwt(jwt);
            authenticationResponse.setRole(optionalUser.get().getRole());
            authenticationResponse.setUserId(optionalUser.get().getId());
            authenticationResponse.setName(optionalUser.get().getUsername());
        }

        return authenticationResponse;
    }

}
