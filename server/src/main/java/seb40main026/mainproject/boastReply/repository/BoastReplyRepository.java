package seb40main026.mainproject.boastReply.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import seb40main026.mainproject.boast.entity.Boast;
import seb40main026.mainproject.boastReply.entity.BoastReply;
import seb40main026.mainproject.member.entity.Member;

@Repository
public interface BoastReplyRepository extends JpaRepository<BoastReply,Long> {
    Page<BoastReply> findByBoast(Boast boast, Pageable pageable);
    Long countByMember(Member member);

}
