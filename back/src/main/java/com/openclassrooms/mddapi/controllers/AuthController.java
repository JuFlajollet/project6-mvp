package com.openclassrooms.mddapi.controllers;

import com.openclassrooms.mddapi.payload.request.LoginRequest;
import com.openclassrooms.mddapi.payload.request.RegisterRequest;
import com.openclassrooms.mddapi.payload.response.JwtResponse;
import com.openclassrooms.mddapi.payload.response.MessageResponse;
import com.openclassrooms.mddapi.security.services.JWTService;
import com.openclassrooms.mddapi.security.services.UserDetailsImpl;
import com.openclassrooms.mddapi.services.UserService;
import jakarta.persistence.EntityExistsException;
import jakarta.validation.ConstraintViolationException;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final static Logger logger = LoggerFactory.getLogger(AuthController.class);

    private AuthenticationManager authenticationManager;

    @Autowired
    private UserService userService;
    @Autowired
    private JWTService jwtService;

    public AuthController(JWTService jwtService, AuthenticationManager authenticationManager) {
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
    }

    @PostMapping(value = "/register", produces = "application/json")
    public ResponseEntity<MessageResponse> register(@Valid @RequestBody RegisterRequest registerRequest) {
        try {
            userService.createUser(registerRequest);
        } catch(EntityExistsException exception) {
            return ResponseEntity
                    .status(409)
                    .body(new MessageResponse(exception.getMessage()));
        }

        logger.info("User {} has been successfully created.", registerRequest.getUsername());

        return ResponseEntity.ok().body(new MessageResponse("User registered successfully!"));
    }

    @PostMapping(value = "/login", produces = "application/json")
    public ResponseEntity<JwtResponse> login(@Valid @RequestBody LoginRequest loginRequest) throws BadCredentialsException {
        logger.info("Trying to log User {}", loginRequest.getLogin());

        UsernamePasswordAuthenticationToken authReq = new UsernamePasswordAuthenticationToken(loginRequest.getLogin(), loginRequest.getPassword());
        Authentication auth = authenticationManager.authenticate(authReq);
        UserDetailsImpl userDetails = (UserDetailsImpl) auth.getPrincipal();

        logger.info("User {} logged", loginRequest.getLogin());
        String jwtToken = jwtService.generateToken(auth);
        logger.info("JWT Token generated for User {}", loginRequest.getLogin());

        JwtResponse jwtResponse = JwtResponse.builder()
                .token(jwtToken)
                .id(userDetails.getId())
                .email(userDetails.getEmail())
                .username(userDetails.getUsername())
                .password(userDetails.getPassword())
                .type("Bearer")
                .build();

        return ResponseEntity.ok().body(jwtResponse);
    }
}
