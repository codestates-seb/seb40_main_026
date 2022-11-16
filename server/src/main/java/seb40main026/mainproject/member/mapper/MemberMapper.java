package seb40main026.mainproject.member.mapper;

import seb40main026.mainproject.member.dto.MemberDto;
import seb40main026.mainproject.member.entity.Member;

import java.util.List;

public interface MemberMapper {
    Member memberPostToMember(MemberDto.Post dto);

    Member memberPatchToMember(MemberDto.Patch dto);

    MemberDto.Response memberToResponse(Member member);

    List<MemberDto.Response> membersToResponses(List<Member> members);
}
