package ma.task.generic;

import ma.task.mother.T;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface GenericRepository<S extends T> extends JpaRepository<S, Long> {
}
