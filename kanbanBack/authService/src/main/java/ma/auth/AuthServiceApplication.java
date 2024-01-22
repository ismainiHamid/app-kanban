package ma.auth;

import ma.auth.auth.AuthService;
import ma.auth.role.Role;
import ma.auth.role.RoleService;
import ma.auth.user.User;
import ma.auth.user.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
@EnableDiscoveryClient
public class AuthServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(AuthServiceApplication.class, args);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

//    @Bean
//    public CommandLineRunner commandLineRunner(UserService userService,
//                                               RoleService roleService,
//                                               AuthService authService) {
//        return args -> {
//            roleService.save(Role.builder().name("ADMIN").build());
//            roleService.save(Role.builder().name("USER").build());
//
//            userService.save(User.builder().username("user1").password("12345").build());
//            userService.save(User.builder().username("user2").password("12345").build());
//            userService.save(User.builder().username("user3").password("12345").build());
//            userService.save(User.builder().username("user4").password("12345").build());
//
//            authService.addRoleToUser("user1", "ADMIN");
//            authService.addRoleToUser("user1", "USER");
//
//            authService.addRoleToUser("user2", "USER");
//            authService.addRoleToUser("user3", "USER");
//            authService.addRoleToUser("user4", "USER");
//
//            authService.removeRoleToUser("user4", "USER");
//        };
//    }

}
