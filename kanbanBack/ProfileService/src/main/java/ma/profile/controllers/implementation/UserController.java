package ma.profile.controllers.implementation;

import ma.profile.controllers.GenericController;
import ma.profile.models.implementation.User;
import ma.profile.services.implementation.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/users")
@CrossOrigin(origins = "*")
public class UserController extends GenericController<User> {
    public UserController(UserService userService) {
        super(userService);
    }

    @GetMapping(path = "/username/{username}")
    public User findByUsername(@PathVariable String username) {
        return ((UserService) this.getGenericService()).findByUsername(username);
    }
}
