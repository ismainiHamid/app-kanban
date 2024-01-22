package ma.auth.auth;

import lombok.AllArgsConstructor;
import ma.auth.role.RoleModel;
import ma.auth.user.UserModel;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/auths")
@AllArgsConstructor
public class AuthController {
    private AuthService authService;

    @GetMapping(path = "/username/{username}")
    public UserModel findByUsername(@PathVariable String username) {
        return this.authService.findByUsername(username);
    }

    @GetMapping(path = "/name/{name}")
    public RoleModel findRoleByName(@PathVariable String name) {
        return this.authService.findRoleByName(name);
    }

    @GetMapping(path = "/addRoleToUser/username/{username}/roleName/{roleName}")
    public UserModel addRoleToUser(@PathVariable String username, @PathVariable String roleName) {
        return this.authService.addRoleToUser(username, roleName);
    }

    @GetMapping(path = "/removeRoleToUser/username/{username}/roleName/{roleName}")
    public UserModel removeRoleToUser(@PathVariable String username, @PathVariable String roleName) {
        return this.authService.removeRoleToUser(username, roleName);
    }
}
