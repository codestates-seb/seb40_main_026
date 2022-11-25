package seb40main026.mainproject.badge.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import seb40main026.mainproject.badge.entity.Badge;
import seb40main026.mainproject.badge.repository.BadgeRepository;
import seb40main026.mainproject.exception.BusinessException;
import seb40main026.mainproject.exception.ExceptionCode;
import seb40main026.mainproject.member.entity.Member;
import seb40main026.mainproject.member.repository.MemberRepository;
import seb40main026.mainproject.member.service.MemberServiceImpl;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BadgeService {
    private final BadgeRepository badgeRepository;
    private final MemberServiceImpl memberService;
    private final MemberRepository memberRepository;

    Badge question = new Badge(0L,"question");
    Badge answer = new Badge(1L,"answer");
    Badge like = new Badge(2L,"like");

    private String findVerifiedBadge(String badgeName) {
        Optional<Badge> optionalBadge = badgeRepository.findByBadgeName(badgeName);
        Badge findBadge = optionalBadge.orElseThrow(
                () -> new BusinessException(ExceptionCode.BADGE_NOT_FOUND));
        return findBadge.getBadgeName();
    }

    // 현재 착용중인 뱃지 변경하는 로직
    public void setCurrentBadge(Long memberId , String badgeName){
        Member findMember = memberService.findVerifiedMember(memberId);
        List<String> userBadge = findMember.getBadgeList();

        if(userBadge.contains(findVerifiedBadge(badgeName))){
            findMember.setCurrentBadge(badgeName);
            memberRepository.save(findMember);
        }
        else{
            new BusinessException(ExceptionCode.BADGE_NOT_FOUND);
        }
    }

    public void addBadge(Long memberId , String badgeName){
        Member findMember = memberService.findVerifiedMember(memberId);
        List<String> userBadge = findMember.getBadgeList();

        switch(badgeName){
            case "question" :
                if (!userBadge.contains(findVerifiedBadge(badgeName))) {
                    findMember.addBadgeList("question");;
                }
                break;
            case "answer" :
                if (!userBadge.contains(findVerifiedBadge(badgeName))) {
                    findMember.addBadgeList("answer");
                }
                break;
            case "reply" :
                if (!userBadge.contains(findVerifiedBadge(badgeName))) {
                    findMember.addBadgeList("reply");
                }
                break;
        }
    }
}