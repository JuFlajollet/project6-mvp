package com.openclassrooms.mddapi.security.services;

import com.openclassrooms.mddapi.models.User;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import com.openclassrooms.mddapi.repositories.UserRepository;
import org.springframework.stereotype.Service;

import static java.lang.String.format;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
        if(userRepository.existsByEmail(login)) {
            User existingUser = userRepository.findByEmail(login).get();

            return UserDetailsImpl
                    .builder()
                    .id(existingUser.getId())
                    .username(existingUser.getUsername())
                    .email(existingUser.getEmail())
                    .password(existingUser.getPassword())
                    .build();
        } else if(userRepository.existsByUsername(login)) {
            User existingUser = userRepository.findByUsername(login).get();

            return UserDetailsImpl
                    .builder()
                    .id(existingUser.getId())
                    .username(existingUser.getUsername())
                    .email(existingUser.getEmail())
                    .password(existingUser.getPassword())
                    .build();
        } else {
            throw new UsernameNotFoundException(format("User: %s not found in db", login));
        }
    }
}
