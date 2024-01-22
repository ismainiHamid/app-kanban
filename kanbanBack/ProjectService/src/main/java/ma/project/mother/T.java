package ma.project.mother;

import java.util.Date;

public interface T {
    Long getId();

    void setId(Long id);

    void setUpdatedAt(Date updatedAt);

    Date getDeletedAt();

    void setDeletedAt(Date deletedAt);
}
