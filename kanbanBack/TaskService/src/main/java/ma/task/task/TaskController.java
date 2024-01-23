package ma.task.task;

import ma.task.generic.GenericController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/tasks")
public class TaskController extends GenericController<TaskModel> {
    public TaskController(TaskService taskService) {
        super(taskService);
    }
}
