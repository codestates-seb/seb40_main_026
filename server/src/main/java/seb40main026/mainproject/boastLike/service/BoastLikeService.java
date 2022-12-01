package seb40main026.mainproject.boastLike.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seb40main026.mainproject.boast.entity.Boast;
import seb40main026.mainproject.boast.repository.BoastRepository;
import seb40main026.mainproject.boast.service.BoastService;
import seb40main026.mainproject.boastLike.entity.BoastLike;
import seb40main026.mainproject.boastLike.repository.BoastLikeRepository;
import seb40main026.mainproject.member.entity.Member;
import seb40main026.mainproject.member.service.MemberServiceImpl;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class BoastLikeService {
    private final BoastLikeRepository boastLikeRepository;
    private final BoastService boastService;
    private final BoastRepository boastRepository;
    private final MemberServiceImpl memberService;

    @Transactional
    public Long modifiedLike(long boastId){
        Boast findBoast = boastService.findVerifiedBoast(boastId);

        Member authMember = memberService.getLoginMember();
        Long memberId = authMember.getMemberId();

        Optional<BoastLike> findLike = boastLikeRepository.findByBoastIdAndMemberId(findBoast.getBoastId(), memberId);
        if(findLike.isEmpty()){
            BoastLike boastLike = BoastLike.of(findBoast.getBoastId(),memberId);
            boastLike.setCheckLike(true);
            boastLikeRepository.save(boastLike);
            findBoast.setLikeCount(findBoast.getLikeCount()+1);
        }
        else{
            boastLikeRepository.deleteById(findLike.get().getBoastLikeId());
            findBoast.setLikeCount(findBoast.getLikeCount()-1);

        }
        boastRepository.save(findBoast);
        return findBoast.getLikeCount();
    }
}
