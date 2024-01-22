package ma.auth.controllers.implementations;

import ma.auth.controllers.GenericController;
import ma.auth.models.implemenations.User;
import ma.auth.services.implementations.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Objects;

@RestController
@RequestMapping(path = "/users")
public class UserController extends GenericController<User> {
    public UserController(UserService userService) {
        super(userService);
    }
}
