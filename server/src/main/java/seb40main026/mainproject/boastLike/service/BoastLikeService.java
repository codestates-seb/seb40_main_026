package seb40main026.mainproject.boastLike.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seb40main026.mainproject.boast.entity.Boast;
import seb40main026.mainproject.boast.repository.BoastRepository;
import seb40main026.mainproject.boast.service.BoastService;
import seb40main026.mainproject.boastLike.entity.BoastLike;
import seb40main026.mainproject.boastLike.repository.BoastLikeRepository;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class BoastLikeService {
    private final BoastLikeRepository boastLikeRepository;
    private final BoastService boastService;
    private final BoastRepository boastRepository;

    @Transactional
    public Long modifiedLike(long boastId){
        Boast findBoast = boastService.findVerifiedBoast(boastId);
        //이후 auth 부분이 구현 된다면 memberId를 저장하는 코드가 됨. 이후 코드에서도 0L로 저장된 memberId 수정 필.
        //Member authMember = memberServiceImpl.findAuthenticatedMember();
        //Long memberId = authMember.getMemberId();

        Optional<BoastLike> findLike = boastLikeRepository.findByBoastIdAndMemberId(findBoast.getBoastId(), 0L);
        if(findLike.isEmpty()){
            BoastLike boastLike = BoastLike.of(findBoast.getBoastId(),0L);
            boastLikeRepository.save(boastLike);
            findBoast.setLikeCount(findBoast.getLikeCount()+1);
            findBoast.setCheckLike(true);
        }
        else{
            boastLikeRepository.deleteById(findLike.get().getBoastLikeId());
            findBoast.setLikeCount(findBoast.getLikeCount()-1);
            findBoast.setCheckLike(false);
        }
        boastRepository.save(findBoast);
        return findBoast.getLikeCount();
    }
}
