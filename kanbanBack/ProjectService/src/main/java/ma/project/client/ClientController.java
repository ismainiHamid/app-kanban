package ma.project.client;

import ma.project.generic.GenericController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/clients")
public class ClientController extends GenericController<ClientModel> {
    public ClientController(ClientsService clientsService) {
        super(clientsService);
    }
}
