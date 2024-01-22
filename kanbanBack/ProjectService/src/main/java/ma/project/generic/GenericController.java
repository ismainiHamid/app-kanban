package ma.project.generic;

import lombok.AllArgsConstructor;
import ma.project.mother.T;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
public class GenericController<S extends T> {
    private GenericService<S> genericService;

    @PostMapping
    public S save(@RequestBody S entity) {
        return genericService.save(entity);
    }

    @PutMapping
    public S update(@RequestBody S entity) {
        return genericService.update(entity);
    }

    @DeleteMapping(path = "/{id}")
    public S delete(@PathVariable Long id) {
        return genericService.delete(id);
    }

    @GetMapping
    public List<S> findAll() {
        return genericService.findAll();
    }

    @GetMapping(path = "/{id}")
    public S findById(@PathVariable Long id) {
        return genericService.findById(id);
    }
}
