package seb40main026.mainproject.boastLike.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import seb40main026.mainproject.boastLike.entity.BoastLike;

import java.util.Optional;

public interface BoastLikeRepository extends JpaRepository<BoastLike, Long> {
    Optional<BoastLike> findByBoastIdAndMemberId(Long boastId , Long memberId);
}
