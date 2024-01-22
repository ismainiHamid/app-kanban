package ma.auth.services;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import ma.auth.metier.IMetier;
import ma.auth.repositories.GenericRepository;
import ma.auth.utils.T;

import java.util.Date;
import java.util.List;
import java.util.Objects;

@Transactional
@AllArgsConstructor
public class GenericService<S extends T> implements IMetier<S> {
    private GenericRepository<S> genericRepository;

    @Override
    public S save(S entity) {
        S result = null;

        if (Objects.nonNull(entity))
            result = this.genericRepository.save(entity);

        if (Objects.isNull(result)) throw new RuntimeException("The entity can't saved because is null !");
        return result;
    }

    @Override
    public S update(S entity) {
        S result = this.save(entity);
        if (Objects.nonNull(result)) result.setUpdatedAt(new Date());
        return result;
    }

    @Override
    public S delete(Long id) {
        S result = this.findById(id);
        result.setDeletedAt(new Date());
        return result;
    }

    @Override
    public List<S> findAll() {
        return this.genericRepository.findAll().stream().filter(s ->
                Objects.isNull(s.getDeletedAt())
        ).toList();
    }

    @Override
    public S findById(Long id) {
        S result = this.genericRepository.findById(id).stream().filter(s ->
                Objects.isNull(s.getDeletedAt())
        ).findFirst().orElse(null);

        if (Objects.isNull(result)) throw new RuntimeException("We can't find the user by id !");
        return result;
    }
}
