package ma.profile.security.config;


import org.springframework.security.crypto.password.PasswordEncoder;


//@Configuration
//@EnableWebSecurity
//@AllArgsConstructor
public class SecurityConfig {
    private PasswordEncoder passwordEncoder;

//    @Bean
//    public InMemoryUserDetailsManager inMemoryUserDetailsManager(){
//        return new InMemoryUserDetailsManager(
//                User.withUsername("admin").password(passwordEncoder.encode("123456")).build(),
//                User.withUsername("user").password(passwordEncoder.encode("123456")).build()
//        );
//    }
//
//    @Bean
//    public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception {
//        return httpSecurity.authorizeHttpRequests(a -> a.requestMatchers("/**").permitAll()).build();
//    }
}
