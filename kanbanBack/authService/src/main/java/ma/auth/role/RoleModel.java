package ma.auth.role;

import jakarta.persistence.*;
import lombok.*;
import ma.auth.generic.GenericModel;
import ma.auth.user.UserModel;

import java.util.List;

@Entity
@Table(name = "roles")
@NoArgsConstructor
@AllArgsConstructor
@Getter(AccessLevel.PUBLIC)
@Setter(AccessLevel.PUBLIC)
@Builder(toBuilder = true)
public class RoleModel extends GenericModel {
    @Column(nullable = false, unique = true, length = 25)
    private String name;

    @ManyToMany(mappedBy = "roles", cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
    private List<UserModel> users;
}
