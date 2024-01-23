package ma.project.project;

import ma.project.generic.GenericController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/projects")
public class ProjectController extends GenericController<ProjectModel> {
    public ProjectController(ProjectService projectService) {
        super(projectService);
    }
}
