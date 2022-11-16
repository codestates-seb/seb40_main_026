package seb40main026.mainproject.member.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seb40main026.mainproject.exception.BusinessException;
import seb40main026.mainproject.exception.ExceptionCode;
import seb40main026.mainproject.member.entity.Member;
import seb40main026.mainproject.member.repository.MemberRepository;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
@AllArgsConstructor
public class MemberServiceImpl implements MemberService{

    private final MemberRepository memberRepository;

    @Transactional
    @Override
    public Member createMember(Member member) {
        verifiedExistsEmail(member.getEmail());
        member.setMemberStatus(Member.MemberStatus.MEMBER_ACTIVE);
        return memberRepository.save(member);
    }

    @Transactional
    @Override
    public Member updatedMember(Member member) {
        Member verifiedMember = findVerifiedMember(member.getMemberId());

        Optional.ofNullable(member.getPassword())
                .ifPresent(verifiedMember::setPassword); // 패스워드 raw 데이터 값 말고
        Optional.ofNullable(member.getNickname())
                .ifPresent(verifiedMember::setNickname);
        //프로필 사진 수정

        return memberRepository.save(verifiedMember);
    }

    @Override
    public Member findMember(long memberId) {
        return findVerifiedMember(memberId);
    }

    @Override
    public List<Member> findMembers() {
        return memberRepository.findAll();
    }

    @Override
    public Member deleteMember(long memberId) {
        Member verifiedMember = findVerifiedMember(memberId);
        verifiedMember.setMemberStatus(Member.MemberStatus.MEMBER_QUIT);
        return memberRepository.save(verifiedMember);
    }

    @Override
    public Member findVerifiedMember(long memberId) {
        Optional<Member> optionalMember = memberRepository.findById(memberId);
        return optionalMember.orElseThrow(() -> new BusinessException(ExceptionCode.MEMBER_NOT_FOUND));
    }

    @Override
    public void verifiedExistsEmail(String email) {
        Optional<Member> optionalMember = memberRepository.findByEmail(email);
        if(optionalMember.isPresent())
            throw new BusinessException(ExceptionCode.MEMBER_EXISTS);
    }
}
