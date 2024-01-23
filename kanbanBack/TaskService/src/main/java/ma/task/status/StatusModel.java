package ma.task.status;

import jakarta.persistence.*;
import lombok.*;
import ma.task.generic.GenericModel;
import ma.task.task.TaskModel;

import java.util.List;

@Entity
@Table(name = "statues")
@NoArgsConstructor
@AllArgsConstructor
@Getter(AccessLevel.PUBLIC)
@Setter(AccessLevel.PUBLIC)
@Builder(toBuilder = true)
public class StatusModel extends GenericModel {
    @Column(nullable = false, length = 50)
    private String name;

    @OneToMany(mappedBy = "status", fetch = FetchType.EAGER)
    private List<TaskModel> tasks;
}
