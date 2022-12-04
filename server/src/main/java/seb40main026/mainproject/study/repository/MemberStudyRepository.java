package seb40main026.mainproject.study.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import seb40main026.mainproject.member.entity.Member;
import seb40main026.mainproject.study.entity.MemberStudy;
import seb40main026.mainproject.study.entity.Study;

public interface MemberStudyRepository extends JpaRepository<MemberStudy, Long> {
    MemberStudy findByMemberAndStudy(Member member, Study study);
}
