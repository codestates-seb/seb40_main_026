package seb40main026.mainproject.auth.utils;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class CustomAuthorityUtils {

    @Value("${mail.address.admin}")
    private String adminMailAddress;

    List<GrantedAuthority> ADMIN_ROLES = AuthorityUtils.createAuthorityList("ROLE_ADMIN", "ROLE_TEACHER", "ROLE_USER");
    List<GrantedAuthority> TEACHER_ROLES = AuthorityUtils.createAuthorityList("ROLE_TEACHER", "ROLE_USER");
    List<GrantedAuthority> USER_ROLES = AuthorityUtils.createAuthorityList("ROLE_USER");

    private final List<String> ADMIN_ROLES_STRING = List.of("ADMIN", "TEACHER", "USER");
    private final List<String> TEACHER_ROLES_STRING = List.of("TEACHER", "USER");
    private final List<String> USER_ROLES_STRING = List.of("USER");

    public List<GrantedAuthority> createAuthorities(String email, boolean teacher) {
        if (email.equals(adminMailAddress)) {
            return ADMIN_ROLES;
        } else if (teacher) {
            return TEACHER_ROLES;
        }
        return USER_ROLES;
    }

    public List<GrantedAuthority> createAuthorities(List<String> roles) {
        return roles.stream()
                .map(role -> new SimpleGrantedAuthority("ROLE" + role))
                .collect(Collectors.toList());
    }

    public List<String> createRoles(String email, boolean teacher) {
        if (email.equals(adminMailAddress)) {
            return ADMIN_ROLES_STRING;
        } else if (teacher) {
            return TEACHER_ROLES_STRING;
        }
        return USER_ROLES_STRING;
    }
}
