package ma.auth.metier;

import ma.auth.mother.T;

public interface IAuth<R extends T, U extends T> {
    U findByUsername(String username);

    R findRoleByName(String name);

    U addRoleToUser(String username, String roleName);

    U removeRoleToUser(String username, String roleName);
}
