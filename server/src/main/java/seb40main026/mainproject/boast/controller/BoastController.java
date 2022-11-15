package seb40main026.mainproject.boast.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import seb40main026.mainproject.boast.dto.BoastDto;
import seb40main026.mainproject.boast.entity.Boast;
import seb40main026.mainproject.boast.mapper.BoastMapper;
import seb40main026.mainproject.boast.service.BoastService;
import seb40main026.mainproject.boastLike.service.BoastLikeService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/boasts")
@RequiredArgsConstructor
public class BoastController {
    private final BoastMapper mapper;
    private final BoastService boastService;
    private final BoastLikeService boastLikeService;

    @PostMapping
    public ResponseEntity postBoast(@Valid @RequestBody BoastDto.Post post){
        Boast boast = boastService.createBoast(mapper.boastPostDtoToBoast(post));
        return new ResponseEntity(mapper.boastToBoastResponseDto(boast), HttpStatus.CREATED);
    }

    @PatchMapping("/{boast-id}")
    public ResponseEntity patchBoast(@Valid @RequestBody BoastDto.Patch patch,
                                     @PathVariable("boast-id")Long boastId){
        patch.setBoardId(boastId);
        Boast boast = boastService.updateBoast(mapper.boastPatchDtoToBoast(patch));
        return new ResponseEntity(mapper.boastToBoastResponseDto(boast), HttpStatus.OK);
    }

    //특정 게시글만 조회하기
    @GetMapping("/{boast-id}")
    public ResponseEntity getBoast(@PathVariable("boast-id")Long boastId){
        Boast boast = boastService.findBoast(boastId);
        return new ResponseEntity(mapper.boastToBoastResponseDto(boast),HttpStatus.OK);
    }
    //모든 자랑 게시글 조회하기
    @GetMapping
    public ResponseEntity getBoasts(@Positive @RequestParam int page,
                                    @Positive @RequestParam int size){
        Page<Boast> pageBoast = boastService.findBoasts(page,size-1);
        List<Boast> listBoast = pageBoast.getContent();
        return new ResponseEntity(mapper.boastToBoastResponseDtos(listBoast), HttpStatus.OK);
    }

    @DeleteMapping("/{boast-id}")
    public ResponseEntity deleteBoast(@PathVariable("boast-id")Long boastId){
        boastService.deleteBoast(boastId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

//    //search 컨트롤러 ex) localhost:8080/boast/search?keyword=keyword&page=0&size=10
//    @GetMapping("/search")
//    public ResponseEntity searchBoasts(@RequestParam("keyword") String keyword,
//                                       @Positive @RequestParam int page,
//                                       @Positive @RequestParam int size){
//        Page<Boast> searchResult = boastService.searchBoast(keyword, PageRequest.of(page,size));
//        List<Boast> listSearchResult = searchResult.getContent();
//        return new ResponseEntity(mapper.boastToBoastResponseDtos(listSearchResult),HttpStatus.OK);
//    }

    //boast 좋아요/ 좋아요 취소 기능 컨트롤러 구현
    @PostMapping("/{boast-id}/like")
    public @ResponseBody long like(@PathVariable("boast-id")Long boastId){
        return boastLikeService.modifiedLike(boastId);
    }
}
