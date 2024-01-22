package ma.auth.user;

import jakarta.transaction.Transactional;
import ma.auth.generic.GenericService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
@Transactional
public class UserService extends GenericService<UserModel> {
    private PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        super(userRepository);
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public UserModel save(UserModel entity) {
        UserModel result = super.findAll().stream().filter(u ->
                u.getUsername().equals(entity.getUsername())
        ).findFirst().orElse(null);

        if (Objects.nonNull(result) || Objects.isNull(entity))
            throw new RuntimeException("Ths user is already exist or The entity is null !");

        entity.setPassword(passwordEncoder.encode(entity.getPassword()));
        return super.save(entity);
    }
}
