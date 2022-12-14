package seb40main026.mainproject.config;

import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import seb40main026.mainproject.auth.filter.JwtAuthenticationFilter;
import seb40main026.mainproject.auth.JwtTokenizer;
import seb40main026.mainproject.auth.filter.JwtVerificationFilter;
import seb40main026.mainproject.auth.handler.MemberAccessDeniedHandler;
import seb40main026.mainproject.auth.handler.MemberAuthenticationEntryPoint;
import seb40main026.mainproject.auth.handler.MemberAuthenticationFailureHandler;
import seb40main026.mainproject.auth.handler.MemberAuthenticationSuccessHandler;
import seb40main026.mainproject.auth.utils.CustomAuthorityUtils;

import java.util.Arrays;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@AllArgsConstructor
public class SecurityConfig {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        http
                .headers().frameOptions().sameOrigin()
                .and()
                .csrf().disable()
                .cors(withDefaults())
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .formLogin().disable()
                .httpBasic().disable()
                .exceptionHandling()
                .authenticationEntryPoint(new MemberAuthenticationEntryPoint())
                .accessDeniedHandler(new MemberAccessDeniedHandler())
                .and()
                .apply(new CustomFilterConfigurer())
                .and()
                .logout()
                .logoutUrl("/members/logout")
                .and()
//                .exceptionHandling().accessDeniedPage() -> 403 페이지
                .authorizeHttpRequests(authorize -> authorize
                        .antMatchers(HttpMethod.POST, "/members").permitAll()
                        .antMatchers(HttpMethod.PATCH, "/members/**").hasAnyRole("USER", "TEACHER", "ADMIN")
                        .antMatchers(HttpMethod.GET, "/members").permitAll()
                        .antMatchers(HttpMethod.GET,"/members/ranking/**").permitAll()
                        .antMatchers(HttpMethod.GET, "/members/**").hasAnyRole("USER", "TEACHER", "ADMIN")
                        .antMatchers(HttpMethod.DELETE, "/members/**").hasAnyRole("USER")
                        .antMatchers(HttpMethod.POST, "/questions").hasAnyRole("USER", "TEACHER", "ADMIN")
                        .antMatchers(HttpMethod.POST, "/questions/*/answers").hasAnyRole("USER", "TEACHER")
                        .antMatchers(HttpMethod.POST, "/questions/*/**").permitAll()
                        .antMatchers(HttpMethod.DELETE, "/questions/*/**").permitAll()
                        .antMatchers(HttpMethod.PATCH, "/questions/*").hasAnyRole("USER")
                        .antMatchers(HttpMethod.GET, "/questions").permitAll()
                        .antMatchers(HttpMethod.GET, "/questions/**").permitAll()
                        .antMatchers(HttpMethod.DELETE, "/questions/**").hasAnyRole("USER")
                        .antMatchers(HttpMethod.POST, "/boasts").hasRole("USER")
                        .antMatchers(HttpMethod.PATCH, "/boasts/**").hasRole("USER")
                        .antMatchers(HttpMethod.GET, "/boasts").permitAll()
                        .antMatchers(HttpMethod.GET, "/boasts/**").permitAll()
                        .antMatchers(HttpMethod.DELETE, "/boasts/**").hasAnyRole("USER", "TEACHER", "ADMIN")
                        .antMatchers(HttpMethod.POST, "/boastReplies/**").hasAnyRole("USER", "TEACHER", "ADMIN")
                        .antMatchers(HttpMethod.PATCH, "/boastReplies/**").hasRole("USER")
                        .antMatchers(HttpMethod.GET, "/boastReplies/**").permitAll()
                        .antMatchers(HttpMethod.DELETE, "/boastReplies/**").hasRole("USER")
                        .anyRequest().permitAll());

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PATCH", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(Arrays.asList("Authorization", "content-type", "x-auth-token", "Refresh"));
        configuration.setExposedHeaders(Arrays.asList("x-auth-token"));
        configuration.addExposedHeader("Authorization");
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);

            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer);
            jwtAuthenticationFilter.setFilterProcessesUrl("/members/login");
            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new MemberAuthenticationSuccessHandler());
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new MemberAuthenticationFailureHandler());

            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils);
            builder
                    .addFilter(jwtAuthenticationFilter)
                    .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);
        }
    }
}
