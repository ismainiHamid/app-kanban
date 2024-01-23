package ma.project.project;

import jakarta.persistence.*;
import lombok.*;
import ma.project.client.ClientModel;
import ma.project.generic.GenericModel;
import ma.project.staff.StaffModel;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "projects")
@NoArgsConstructor
@AllArgsConstructor
@Getter(AccessLevel.PUBLIC)
@Setter(AccessLevel.PUBLIC)
@Builder(toBuilder = true)
public class ProjectModel extends GenericModel {
    @Column(nullable = false, length = 100)
    private String name;

    @Column(nullable = false)
    private Double cost;

    @Temporal(TemporalType.DATE)
    @Column(nullable = false)
    private Date startDate;

    @ManyToOne
    private ClientModel client;

    @OneToMany(mappedBy = "project", fetch = FetchType.EAGER)
    private List<StaffModel> staffs;
}
