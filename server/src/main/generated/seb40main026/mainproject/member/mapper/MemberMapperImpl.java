package seb40main026.mainproject.member.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import seb40main026.mainproject.member.dto.MemberDto;
import seb40main026.mainproject.member.entity.Member;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-29T10:49:00+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 11.0.15 (Oracle Corporation)"
)
@Component
public class MemberMapperImpl implements MemberMapper {

    @Override
    public Member memberPostToMember(MemberDto.Post dto) {
        if ( dto == null ) {
            return null;
        }

        Member member = new Member();

        member.setEmail( dto.getEmail() );
        member.setPassword( dto.getPassword() );
        member.setNickname( dto.getNickname() );
        member.setTeacher( dto.isTeacher() );

        return member;
    }

    @Override
    public Member memberPatchToMember(MemberDto.Patch dto) {
        if ( dto == null ) {
            return null;
        }

        Member member = new Member();

        member.setMemberId( dto.getMemberId() );
        member.setPassword( dto.getPassword() );
        member.setNickname( dto.getNickname() );
        member.setMemberGrade( dto.getMemberGrade() );

        return member;
    }

    @Override
    public MemberDto.Response memberToResponse(Member member) {
        if ( member == null ) {
            return null;
        }

        List<String> haveBadgeList = null;
        long memberId = 0L;
        String email = null;
        String nickname = null;
        boolean teacher = false;
        String createdAt = null;
        String modifiedAt = null;
        Integer sticker = null;
        String currentBadge = null;
        Member.MemberStatus memberStatus = null;
        Member.MemberGrade memberGrade = null;
        Long questionCount = null;
        Long answerCount = null;

        List<String> list = member.getHaveBadgeList();
        if ( list != null ) {
            haveBadgeList = new ArrayList<String>( list );
        }
        if ( member.getMemberId() != null ) {
            memberId = member.getMemberId();
        }
        email = member.getEmail();
        nickname = member.getNickname();
        if ( member.getTeacher() != null ) {
            teacher = member.getTeacher();
        }
        createdAt = member.getCreatedAt();
        modifiedAt = member.getModifiedAt();
        sticker = member.getSticker();
        currentBadge = member.getCurrentBadge();
        memberStatus = member.getMemberStatus();
        memberGrade = member.getMemberGrade();
        questionCount = member.getQuestionCount();
        answerCount = member.getAnswerCount();

        MemberDto.Response response = new MemberDto.Response( memberId, email, nickname, teacher, createdAt, modifiedAt, sticker, haveBadgeList, currentBadge, memberStatus, memberGrade, questionCount, answerCount );

        return response;
    }

    @Override
    public List<MemberDto.Response> membersToResponses(List<Member> members) {
        if ( members == null ) {
            return null;
        }

        List<MemberDto.Response> list = new ArrayList<MemberDto.Response>( members.size() );
        for ( Member member : members ) {
            list.add( memberToResponse( member ) );
        }

        return list;
    }
}
