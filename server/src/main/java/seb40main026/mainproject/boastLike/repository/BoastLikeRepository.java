package seb40main026.mainproject.boastLike.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import seb40main026.mainproject.boastLike.entity.BoastLike;
import seb40main026.mainproject.member.entity.Member;

import java.util.Optional;

public interface BoastLikeRepository extends JpaRepository<BoastLike, Long> {
    BoastLike findByBoastIdAndMemberId(Long boastId , Long memberId);
    //BoastLike findByBoastIdAndMember(Long boastId, Member member);
}
