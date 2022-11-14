package seb40main026.mainproject.boast.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import seb40main026.mainproject.boast.entity.Boast;
import seb40main026.mainproject.boast.repository.BoastRepository;
import seb40main026.mainproject.exception.BusinessException;
import seb40main026.mainproject.exception.ExceptionCode;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BoastService {
    private final BoastRepository boastRepository;

    public Boast createBoast(Boast boast){
        //이후 연관관계 매핑 및 access Token 활용한 writer set 필요
        boast.setBoardCreatedAt(LocalDateTime.now());
        return boastRepository.save(boast);
    }

    public Boast updateBoast(Boast boast){
        Boast findBoast = findVerifiedBoast(boast.getBoastId());

        Optional.ofNullable(boast.getTitle())
                .ifPresent(title -> findBoast.setTitle(title));

        Optional.ofNullable(boast.getContent())
                .ifPresent(content -> findBoast.setContent(content));

        findBoast.setBoardModifiedAt(LocalDateTime.now());
        return boastRepository.save(findBoast);
    }

    public Boast findBoast(long boastId){
        Boast findBoast = findVerifiedBoast(boastId);
        findBoast.setView_count(findBoast.getView_count()+1);
        return findBoast;
    }

    //가장 최신글 -> boastId가 가장 크므로 descending()
    public Page<Boast> findBoasts(int page , int size){
        return boastRepository.findAll(PageRequest.of(page,size, Sort.by("boastId").descending()));
    }

    public void deleteBoast(long boastId){
        Boast findBoast = findVerifiedBoast(boastId);
        boastRepository.delete(findBoast);
    }

    //유효한 Boast 게시글이 있는지 확인하는 메서드 (Business custom exception use)
    public Boast findVerifiedBoast(long boastId){
        Optional<Boast> optionalBoast =
                boastRepository.findById(boastId);
        Boast findBoast =
                optionalBoast.orElseThrow(() -> new BusinessException(ExceptionCode.BOAST_NOT_FOUND));
        return findBoast;
    }
//    keyword 를 입력받아 제목에 해당 키워드가 포함되는 boast 게시글만 가져오는 서비스
//    public Page<Boast> searchBoast(String keyword, Pageable pageable){
//        Page<Boast> searchResult = boastRepository.findByTitleContaining(keyword,pageable);
//        return searchResult;
//    }

}
