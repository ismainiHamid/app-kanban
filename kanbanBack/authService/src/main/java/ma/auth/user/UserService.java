package ma.auth.services.implementations;

import jakarta.transaction.Transactional;
import ma.auth.models.implemenations.User;
import ma.auth.repositories.implementaions.UserRepository;
import ma.auth.services.GenericService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
@Transactional
public class UserService extends GenericService<User> {
    private PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        super(userRepository);
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public User save(User entity) {
        if (Objects.nonNull(entity))
            entity.setPassword(passwordEncoder.encode(entity.getPassword()));
        return super.save(entity);
    }
}
