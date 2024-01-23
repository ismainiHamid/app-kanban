package ma.task.task;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.*;
import ma.task.generic.GenericModel;
import ma.task.status.StatusModel;
import ma.task.user.UserResponse;

@Entity
@Table(name = "tasks")
@NoArgsConstructor
@AllArgsConstructor
@Getter(AccessLevel.PUBLIC)
@Setter(AccessLevel.PUBLIC)
@Builder(toBuilder = true)
public class TaskModel extends GenericModel {
    @Column(nullable = false)
    private String name;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String description;

    @Column(nullable = false, length = 50)
    private String state;

    @ManyToOne
    private StatusModel status;

    @Column(name = "users")
    private UserResponse user;
}
