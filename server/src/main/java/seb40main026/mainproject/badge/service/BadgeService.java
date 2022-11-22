package seb40main026.mainproject.badge.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import seb40main026.mainproject.badge.entity.Badge;
import seb40main026.mainproject.badge.repository.BadgeRepository;
import seb40main026.mainproject.exception.BusinessException;
import seb40main026.mainproject.exception.ExceptionCode;
import seb40main026.mainproject.question.entity.Question;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BadgeService {
    private final BadgeRepository badgeRepository;

    // 현재 착용중인 뱃지 변경하는 로직
  /*  public void setCurrentBadge(Long memberId , String badgeName){
        Member findMember = memberRepository.findById(memberId);
        List<String> userBadge = findMember.getBadgeList();
        if(userBadge.contains(findVerifiedBadge(badgeName)){
            findMember.setCurrentBadge(badgeName);
            memberRepository.save(findMember);
        }
        else{
            new BusinessException(NO_BADGE);
    }

    public void addBadge(Long memberId , String badgeName){
        switch(badgeName){
            case "question" :
                Member findMember= memberRepository.findById(memberId);
                List<String> userBadge = findMember.getBadgeList()
                if(userBadge.contains(findVerifiedBadge(badgeName)){
                    break;
                else{
                    findMember.addBadgeList("question");
                    break;
                }
            case "answer" :
                Member findMember= memberRepository.findById(memberId);
                List<String> userBadge = findMember.getBadgeList()
                if(userBadge.contains(findVerifiedBadge(badgeName)){
                    break;
                else{
                    findMember.addBadgeList("answer");
                    break;
                }
            case "like" :
                Member findMember= memberRepository.findById(memberId);
                List<String> userBadge = findMember.getBadgeList()
                if(userBadge.contains(findVerifiedBadge(badgeName)){
                    break;
                else{
                    findMember.addBadgeList("like");
                    break;
                }
        }
    }
   */
    public String findVerifiedBadge(String badgeName) {
        Optional<Badge> optionalBadge = badgeRepository.findByBadgeName(badgeName);
        Badge findBadge = optionalBadge.orElseThrow(
                () -> new BusinessException(ExceptionCode.BADGE_NOT_FOUND));
        return findBadge.getBadgeName();
    }
}
