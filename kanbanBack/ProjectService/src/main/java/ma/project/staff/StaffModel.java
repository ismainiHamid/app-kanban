package ma.project.staff;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.*;
import ma.project.generic.GenericModel;
import ma.project.project.ProjectModel;
import ma.project.user.UserResponse;

@Entity
@Table(name = "staffs")
@NoArgsConstructor
@AllArgsConstructor
@Getter(AccessLevel.PUBLIC)
@Setter(AccessLevel.PUBLIC)
@Builder(toBuilder = true)
public class StaffModel extends GenericModel {
    @Column(name = "users")
    private UserResponse user;

    @ManyToOne
    private ProjectModel project;
}
