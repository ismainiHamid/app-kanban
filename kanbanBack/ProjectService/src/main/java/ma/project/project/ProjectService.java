package ma.project.project;

import jakarta.transaction.Transactional;
import ma.project.generic.GenericService;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class ProjectService extends GenericService<ProjectModel> {
    public ProjectService(ProjectRepository projectRepository) {
        super(projectRepository);
    }
}
