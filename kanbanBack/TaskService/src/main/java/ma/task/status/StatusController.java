package ma.task.status;

import ma.task.generic.GenericController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "statues")
public class StatusController extends GenericController<StatusModel> {
    public StatusController(StatusService statusService) {
        super(statusService);
    }
}
