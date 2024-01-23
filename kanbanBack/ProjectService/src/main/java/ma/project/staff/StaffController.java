package ma.project.staff;

import ma.project.generic.GenericController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/staffs")
public class StaffController extends GenericController<StaffModel> {
    public StaffController(StaffService staffService) {
        super(staffService);
    }
}
