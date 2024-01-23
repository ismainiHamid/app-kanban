package ma.project.staff;

import jakarta.transaction.Transactional;
import ma.project.generic.GenericService;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class StaffService extends GenericService<StaffModel> {
    public StaffService(StaffRepository staffRepository) {
        super(staffRepository);
    }
}
