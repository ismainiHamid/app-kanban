package ma.task.task;

import jakarta.transaction.Transactional;
import ma.task.generic.GenericService;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class TaskService extends GenericService<TaskModel> {
    public TaskService(TaskRepository taskRepository) {
        super(taskRepository);
    }
}
