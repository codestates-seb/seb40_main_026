package seb40main026.mainproject.member.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import seb40main026.mainproject.member.entity.Member;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findByEmail(String email);
}
