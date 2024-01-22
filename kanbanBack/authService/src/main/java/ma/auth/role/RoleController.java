package ma.auth.role;

import ma.auth.generic.GenericController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/roles")
public class RoleController extends GenericController<RoleModel> {
    public RoleController(RoleService roleService) {
        super(roleService);
    }
}
