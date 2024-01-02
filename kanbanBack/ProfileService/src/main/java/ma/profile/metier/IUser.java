package ma.profile.metier;

import ma.profile.models.implementation.User;

public interface IUser {
    User findByUsername(String username);
}
