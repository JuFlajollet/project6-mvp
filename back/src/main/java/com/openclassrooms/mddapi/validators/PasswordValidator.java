package com.openclassrooms.mddapi.validators;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class PasswordValidator implements ConstraintValidator<PasswordConstraint, String> {
    @Override
    public void initialize(PasswordConstraint password) {
    }

    @Override
    public boolean isValid(String passwordField,
                           ConstraintValidatorContext cxt) {
        return passwordField != null
                && passwordField.matches("[A-Z]+")
                && passwordField.matches("[a-z]+")
                && passwordField.matches("[0-9]+")
                && passwordField.matches("[!@#$%^&*()_+\\-=\\[\\]{};':\"\\\\|,.<>/?]+")
                && (passwordField.length() >= 8)
                && (passwordField.length() <= 40);
    }
}
