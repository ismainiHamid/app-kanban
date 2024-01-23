package ma.project.client;

import jakarta.transaction.Transactional;
import ma.project.generic.GenericService;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class ClientsService extends GenericService<ClientModel> {
    public ClientsService(ClientRepository clientRepository) {
        super(clientRepository);
    }
}
