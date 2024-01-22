package ma.auth.models.implemenations;

import jakarta.persistence.*;
import lombok.*;
import ma.auth.models.GenericModel;

import java.util.List;

@Entity
@Table(name = "roles")
@NoArgsConstructor
@AllArgsConstructor
@Getter(AccessLevel.PUBLIC)
@Setter(AccessLevel.PUBLIC)
@Builder(toBuilder = true)
public class Role extends GenericModel {
    @Column(nullable = false, unique = true, length = 25)
    private String name;

    @ManyToMany(mappedBy = "roles", cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
    private List<User> users;
}
