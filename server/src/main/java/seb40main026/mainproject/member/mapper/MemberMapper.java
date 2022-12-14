package seb40main026.mainproject.member.mapper;

import org.mapstruct.Mapper;
import seb40main026.mainproject.member.dto.MemberDto;
import seb40main026.mainproject.member.entity.Member;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member memberPostToMember(MemberDto.Post dto);

    Member memberPatchToMember(MemberDto.Patch dto);

//    MemberDto.Response memberToResponse(Member member);
    default MemberDto.Response memberToResponse(Member member) {
        if(member == null) return null;
        MemberDto.Response response = new MemberDto.Response();
        response.setMemberId(member.getMemberId());
        response.setEmail(member.getEmail());
        response.setNickname(member.getNickname());
        response.setTeacher(member.getTeacher());
        response.setCreatedAt(member.getCreatedAt());
        response.setModifiedAt(member.getModifiedAt());
        response.setSticker(member.getSticker());
        response.setIntroduce(member.getIntroduce());
        response.setHaveBadgeList(member.getHaveBadgeList());
        response.setCurrentBadge(member.getCurrentBadge());
        response.setMemberStatus(member.getMemberStatus());
        response.setMemberGrade(member.getMemberGrade().getGrade());
        response.setQuestionCount(member.getQuestionCount());
        response.setAnswerCount(member.getAnswerCount());
        response.setFileUrl(member.getFileUrl());
        return response;
    }

    List<MemberDto.Response> membersToResponses(List<Member> members);
}
