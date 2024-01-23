package ma.project.client;

import jakarta.persistence.*;
import lombok.*;
import ma.project.generic.GenericModel;
import ma.project.project.ProjectModel;

import java.util.List;

@Entity
@Table(name = "clients")
@NoArgsConstructor
@AllArgsConstructor
@Getter(AccessLevel.PUBLIC)
@Setter(AccessLevel.PUBLIC)
@Builder(toBuilder = true)
public class ClientModel extends GenericModel {
    @Column(nullable = false, length = 50)
    private String name;

    @Column(nullable = false, length = 50)
    private String country;

    @Column(nullable = false, length = 50)
    private String sector;

    @OneToMany(mappedBy = "client", fetch = FetchType.EAGER)
    private List<ProjectModel> projects;
}
