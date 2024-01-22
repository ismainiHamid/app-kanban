package ma.auth.role;

import jakarta.transaction.Transactional;
import ma.auth.auth.AuthService;
import ma.auth.generic.GenericService;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
@Transactional
public class RoleService extends GenericService<RoleModel> {
    public RoleService(RoleRepository roleRepository) {
        super(roleRepository);
    }

    @Override
    public RoleModel save(RoleModel entity) {
        RoleModel result = super.findAll().stream().filter(r ->
                r.getName().equals(entity.getName())
        ).findFirst().orElse(null);

        if (Objects.nonNull(result) || Objects.isNull(entity))
            throw new RuntimeException("Ths role is already exist or The entity is null !");

        return super.save(entity);
    }
}
