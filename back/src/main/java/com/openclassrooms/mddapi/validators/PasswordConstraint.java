package com.openclassrooms.mddapi.validators;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.*;

@Documented
@Constraint(validatedBy = PasswordValidator.class)
@Target( { ElementType.METHOD, ElementType.FIELD })
@Retention(RetentionPolicy.RUNTIME)
public @interface PasswordConstraint {
    String message() default "Password should be 8 characters long at least, no longer than 120 and have one number, one uppercase, one lowercase and one special character in it.";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}
