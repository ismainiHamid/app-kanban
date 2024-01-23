package ma.task.user;

import lombok.*;
import ma.task.generic.GenericModel;

@NoArgsConstructor
@AllArgsConstructor
@Getter(AccessLevel.PUBLIC)
@Setter(AccessLevel.PUBLIC)
@Builder(toBuilder = true)
public class UserResponse extends GenericModel {
    private String username;

    private String password;
}
