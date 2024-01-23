package ma.task.status;

import jakarta.transaction.Transactional;
import ma.task.generic.GenericService;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class StatusService extends GenericService<StatusModel> {
    public StatusService(StatusRepository statusRepository) {
        super(statusRepository);
    }
}
