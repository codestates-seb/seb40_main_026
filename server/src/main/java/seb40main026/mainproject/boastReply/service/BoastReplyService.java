package seb40main026.mainproject.boastReply.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seb40main026.mainproject.boast.entity.Boast;
import seb40main026.mainproject.boast.repository.BoastRepository;
import seb40main026.mainproject.boast.service.BoastService;
import seb40main026.mainproject.boastReply.entity.BoastReply;
import seb40main026.mainproject.boastReply.repository.BoastReplyRepository;
import seb40main026.mainproject.exception.BusinessException;
import seb40main026.mainproject.exception.ExceptionCode;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class BoastReplyService {

    private final BoastService boastService;
    private final BoastReplyRepository boastReplyRepository;
    private final BoastRepository  boastRepository;

    public BoastReply createReply(BoastReply boastReply,long boastId){
        Boast findBoast = boastService.findVerifiedBoast(boastId);
//        member 엔티티와 연관관계 설정이 된다면, member 엔티티에 boastReply 정보를 넣어준다.
//        Member member = memberServiceImpl.findAuthenticatedMember();
//        member.setReplies(boastReply);
//        memberRepository.save(member);
        findBoast.addReplies(boastReply);
        boastReply.setReplyCreatedAt(LocalDateTime.now());
        boastRepository.save(findBoast);
        return boastReplyRepository.save(boastReply);
    }

    public BoastReply updateReply(BoastReply boastReply){
        BoastReply findReply = findVerifiedReply(boastReply.getBoastReplyId());

        Optional.ofNullable(boastReply.getContent())
                .ifPresent(content -> findReply.setContent(content));

        findReply.setReplyModifiedAt(LocalDateTime.now());
        return boastReplyRepository.save(findReply);
    }

    public Page<BoastReply> getBoastReplies(long boastId , Pageable pageable){
        Boast findBoast = boastService.findVerifiedBoast(boastId);
        return boastReplyRepository.findByBoast(findBoast,pageable);
    }

    public void deleteBoastReply(long boastReplyId){
        BoastReply findBoastReply = findVerifiedReply(boastReplyId);
        boastReplyRepository.delete(findBoastReply);
    }

    @Transactional(readOnly = true)
    public BoastReply findVerifiedReply(long boastReplyId){
        Optional<BoastReply> optionalBoastReply = boastReplyRepository.findById(boastReplyId);
        BoastReply findBoastReply = optionalBoastReply.orElseThrow(() -> new BusinessException(ExceptionCode.BOAST_REPLY_NOT_FOUND));
        return findBoastReply;
    }
}
