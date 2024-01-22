package ma.auth.user;

import ma.auth.generic.GenericController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/users")
public class UserController extends GenericController<UserModel> {
    public UserController(UserService userService) {
        super(userService);
    }
}
