package seb40main026.mainproject.boast.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seb40main026.mainproject.boast.entity.Boast;
import seb40main026.mainproject.boast.repository.BoastRepository;
import seb40main026.mainproject.boastLike.entity.BoastLike;
import seb40main026.mainproject.boastLike.repository.BoastLikeRepository;
import seb40main026.mainproject.exception.BusinessException;
import seb40main026.mainproject.exception.ExceptionCode;
import seb40main026.mainproject.member.entity.Member;
import seb40main026.mainproject.member.repository.MemberRepository;
import seb40main026.mainproject.member.service.MemberServiceImpl;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class BoastService {
    private final BoastRepository boastRepository;
    private final MemberServiceImpl memberService;
    private final MemberRepository memberRepository;
    private final BoastLikeRepository boastLikeRepository;

    public Boast createBoast(Boast boast){
        Member authMember = memberService.getLoginMember();

        authMember.setBoasts(boast);
        boast.setMember(authMember);

        boast.setNickName(authMember.getNickname());
        boast.setGrade(authMember.getMemberGrade());
        boast.setBadge(authMember.getCurrentBadge());

        memberService.addStickerAndLevelUp(authMember);

        return boastRepository.save(boast);
    }

    public Boast updateBoast(Boast boast){
        Boast findBoast = findVerifiedBoast(boast.getBoastId());

        Optional.ofNullable(boast.getTitle())
                .ifPresent(title -> findBoast.setTitle(title));

        Optional.ofNullable(boast.getContent())
                .ifPresent(content -> findBoast.setContent(content));
        return boastRepository.save(findBoast);
    }

    public Boast findBoast(long boastId){
        Member authMember = memberService.getLoginMember();
        Boast findBoast = findVerifiedBoast(boastId);
        findBoast.setViewCount(findBoast.getViewCount()+1);
        findBoast.setGrade(authMember.getMemberGrade());
        findBoast.setBadge(authMember.getCurrentBadge());
        BoastLike findBoastLike = boastLikeRepository.findByBoastIdAndMemberId(boastId,authMember.getMemberId());
        if(findBoastLike == null) {
            findBoast.setCheckLike(false);
        }
        else{
            findBoast.setCheckLike(true);
        }
        return findBoast;
    }

    //가장 최신글 -> boastId가 가장 크므로 descending()
    public Page<Boast> findBoasts(Pageable pageable){
        return boastRepository.findAll(pageable);
    }

    public void deleteBoast(long boastId){
        Boast findBoast = findVerifiedBoast(boastId);
        boastRepository.delete(findBoast);
    }

    //좋아요 갯수가 1등, 2등, 3등인 게시글만 모아서 index = 3인 List 를 반환 해주는 메서드
    public List<Boast> findPopularBoast(){
        List<Boast> popularBoasts = new ArrayList<>(2);
        List<Boast> findBoasts = boastRepository.findAll(Sort.by("likeCount").descending());
        for(int i=0;i<3;i++){
            popularBoasts.add(i,findBoasts.get(i));
        }
        return popularBoasts;
    }

    //유효한 Boast 게시글이 있는지 확인하는 메서드 (Business custom exception use)
    @Transactional(readOnly = true)
    public Boast findVerifiedBoast(long boastId){
        Optional<Boast> optionalBoast =
                boastRepository.findById(boastId);
        Boast findBoast =
                optionalBoast.orElseThrow(() -> new BusinessException(ExceptionCode.BOAST_NOT_FOUND));
        return findBoast;
    }
    //keyword 를 입력받아 제목에 해당 키워드가 포함되는 boast 게시글만 가져오는 서비스
    public Page<Boast> searchBoast(String keyword, Pageable pageable){
        Page<Boast> searchResult = boastRepository.findByTitleContaining(keyword,pageable);
        return searchResult;
    }

}
