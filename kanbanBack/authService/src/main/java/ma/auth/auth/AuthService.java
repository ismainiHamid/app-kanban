package ma.auth.auth;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import ma.auth.metier.IAuth;
import ma.auth.role.RoleModel;
import ma.auth.role.RoleService;
import ma.auth.user.UserModel;
import ma.auth.user.UserService;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
@Transactional
@AllArgsConstructor
public class AuthService implements IAuth<RoleModel, UserModel> {
    private UserService userService;
    private RoleService roleService;

    @Override
    public UserModel findByUsername(String username) {
        UserModel result = this.userService.findAll().stream().filter(u ->
                u.getUsername().equals(username)
        ).findFirst().orElse(null);

        if (Objects.isNull(result))
            throw new RuntimeException("We can't find this user with username : " + username + " !");
        return result;
    }

    @Override
    public RoleModel findRoleByName(String name) {
        RoleModel result = this.roleService.findAll().stream().filter(r ->
                r.getName().equals(name)
        ).findFirst().orElse(null);

        if (Objects.isNull(result)) throw new RuntimeException("We can't find this role with name : " + name + " !");
        return result;
    }

    @Override
    public UserModel addRoleToUser(String username, String roleName) {
        UserModel user = this.findByUsername(username);
        RoleModel role = this.findRoleByName(roleName);

        user.getRoles().add(role);
        return user;
    }

    @Override
    public UserModel removeRoleToUser(String username, String roleName) {
        UserModel user = this.findByUsername(username);
        RoleModel role = this.findRoleByName(roleName);

        user.getRoles().remove(role);
        return user;
    }
}
