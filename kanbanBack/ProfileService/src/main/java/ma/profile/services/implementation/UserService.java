package ma.profile.services.implementation;

import ma.profile.Repositories.implementation.UserRepository;
import ma.profile.metier.IUser;
import ma.profile.models.implementation.User;
import ma.profile.services.GenericService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Objects;


@Service
@Transactional
public class UserService extends GenericService<User> implements IUser {
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        super(userRepository);
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public User save(User user) {
        if (Objects.nonNull(user)) {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            return this.getGenericRepository().save(user);
        }
        return null;
    }

    @Override
    public User findByUsername(String username) {
        return this.getGenericRepository().findAll().stream().filter(u -> u.getUsername().equals(username)).findFirst().orElse(null);
    }
}
