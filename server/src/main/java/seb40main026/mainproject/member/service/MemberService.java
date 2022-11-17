package seb40main026.mainproject.member.unit;

import seb40main026.mainproject.member.entity.Member;

import java.util.List;

public interface MemberService {
    Member createMember(Member member);

    Member updatedMember(Member member);

    Member findMember(long memberId);

    List<Member> findMembers();

    Member deleteMember(long memberId);

    Member findVerifiedMember(long memberId);

    void verifiedExistsEmail(String email);
}
