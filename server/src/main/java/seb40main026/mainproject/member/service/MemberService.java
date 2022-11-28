package seb40main026.mainproject.member.service;

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

    Member getLoginMember();
    void addStickerAndLevelUp(Member member);

    void setCurrentBadge(String badgeName);

    void addBadge(String badge);
    }
