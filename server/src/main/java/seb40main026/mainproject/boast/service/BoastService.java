package seb40main026.mainproject.boast.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import seb40main026.mainproject.File.File;
import seb40main026.mainproject.File.FileService;
import seb40main026.mainproject.boast.entity.Boast;
import seb40main026.mainproject.boast.repository.BoastRepository;
import seb40main026.mainproject.boastLike.entity.BoastLike;
import seb40main026.mainproject.boastLike.repository.BoastLikeRepository;
import seb40main026.mainproject.exception.BusinessException;
import seb40main026.mainproject.exception.ExceptionCode;
import seb40main026.mainproject.member.entity.Member;
import seb40main026.mainproject.member.service.MemberServiceImpl;
import seb40main026.mainproject.s3.S3Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class BoastService {
    private final BoastRepository boastRepository;
    private final MemberServiceImpl memberService;
    private final BoastLikeRepository boastLikeRepository;
    private final FileService fileService;
    private final S3Service s3Service;

    public Boast createBoast(Boast boast, MultipartFile image) throws IOException {
        Member authMember = memberService.getLoginMember();

        authMember.setBoasts(boast);
        boast.setMember(authMember);

        boast.setNickName(authMember.getNickname());
        boast.setGrade(authMember.getMemberGrade().getGrade());
        boast.setBadge(authMember.getCurrentBadge());

        memberService.addStickerAndLevelUp(authMember);

        if(image != null) {
            saveBoastFile(image, boast);
        }
        return boastRepository.save(boast);
    }

    public Boast updateBoast(Boast boast, MultipartFile image) throws IOException {
        Boast findBoast = findVerifiedBoast(boast.getBoastId());

        if(image != null) {
            File findFile = findBoast.getFile();
            if(findFile != null) { // ????????? ???????????? ?????? ????????? ??????
                fileService.delete(findFile); // repository ??????
                s3Service.fileDelete(image.getOriginalFilename()); // s3 ?????? ??????
            }
            saveBoastFile(image, findBoast);
        }
        Optional.ofNullable(boast.getTitle())
                .ifPresent(title -> findBoast.setTitle(title));

        Optional.ofNullable(boast.getContent())
                .ifPresent(content -> findBoast.setContent(content));
        return boastRepository.save(findBoast);
    }

    public void saveBoastFile(MultipartFile image, Boast boast) throws IOException {
        String url = s3Service.uploadFile(image); // ????????? s3??? ?????????
        File file = new File(image.getOriginalFilename(), url);
        fileService.save(file); // file repository ??????
        boast.modifyFileUrl(url);
        boast.setFile(file);
    }

    public Boast findBoast(long boastId){
        Optional<Member> findMember = memberService.isLoginMember();
        Boast findBoast = findVerifiedBoast(boastId);

        findBoast.setViewCount(findBoast.getViewCount()+1);
        findBoast.setNickName(findBoast.getMember().getNickname());
        findBoast.setGrade(findBoast.getMember().getMemberGrade().getGrade());
        findBoast.setBadge(findBoast.getMember().getCurrentBadge());

        if(findMember.isPresent()){
            Member authMember = memberService.getLoginMember();
            Optional<BoastLike> findBoastLike = boastLikeRepository.findByBoastIdAndMemberId(boastId,authMember.getMemberId());
            if(findBoastLike.isEmpty()) {
                findBoast.setCheckLike(false);
            }
            else{
                findBoast.setCheckLike(true);
            }
        }
        else {
            findBoast.setCheckLike(false);
        }
        return findBoast;
    }

    //?????? ????????? -> boastId??? ?????? ????????? descending()
    public Page<Boast> findBoasts(Pageable pageable){
        return boastRepository.findAll(pageable);
    }

    public void deleteBoast(long boastId){
        Boast findBoast = findVerifiedBoast(boastId);
        boastRepository.delete(findBoast);
        File findFile = findBoast.getFile();
        if(findFile != null) { // ????????? ??????????????? s3 ?????? ??????
            s3Service.fileDelete(findFile.getTitle());
        }
    }

    //????????? ????????? 1???, 2???, 3?????? ???????????? ????????? index = 3??? List ??? ?????? ????????? ?????????
    public List<Boast> findPopularBoast(){
        List<Boast> popularBoasts = new ArrayList<>(2);
        List<Boast> findBoasts = boastRepository.findAll(Sort.by("likeCount").descending());
        for(int i=0;i<3;i++){
            popularBoasts.add(i,findBoasts.get(i));
        }
        return popularBoasts;
    }

    //????????? Boast ???????????? ????????? ???????????? ????????? (Business custom exception use)
    @Transactional(readOnly = true)
    public Boast findVerifiedBoast(long boastId){
        Optional<Boast> optionalBoast =
                boastRepository.findById(boastId);
        Boast findBoast =
                optionalBoast.orElseThrow(() -> new BusinessException(ExceptionCode.BOAST_NOT_FOUND));
        return findBoast;
    }
    //keyword ??? ???????????? ????????? ?????? ???????????? ???????????? boast ???????????? ???????????? ?????????
    public Page<Boast> searchBoast(String keyword, Pageable pageable){
        Page<Boast> searchResult = boastRepository.findByTitleContaining(keyword,pageable);
        return searchResult;
    }

}
