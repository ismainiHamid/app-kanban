package ma.task.generic;

import jakarta.persistence.*;
import lombok.*;
import ma.task.mother.T;

import java.io.Serializable;
import java.util.Date;

@MappedSuperclass
@NoArgsConstructor
@AllArgsConstructor
@Getter(AccessLevel.PUBLIC)
@Setter(AccessLevel.PUBLIC)
public class GenericModel implements Serializable, T {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false, updatable = false)
    private Date createdAt = new Date();

    @Temporal(TemporalType.TIMESTAMP)
    private Date updatedAt = null;

    @Temporal(TemporalType.TIMESTAMP)
    private Date deletedAt = null;
}
