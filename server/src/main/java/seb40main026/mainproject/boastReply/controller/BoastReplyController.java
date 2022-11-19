package seb40main026.mainproject.boastReply.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import seb40main026.mainproject.boastReply.dto.BoastReplyDto;
import seb40main026.mainproject.boastReply.entity.BoastReply;
import seb40main026.mainproject.boastReply.mapper.BoastReplyMapper;
import seb40main026.mainproject.boastReply.service.BoastReplyService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/boastReplies")
@RequiredArgsConstructor
public class BoastReplyController {
    private final BoastReplyService boastReplyService;
    private final BoastReplyMapper mapper;

    @PostMapping()
    public ResponseEntity postReply(@Valid @RequestBody BoastReplyDto.post post, Long boastId){
        BoastReply boastReply = boastReplyService.createReply(mapper.boastReplyPostDtoToBoastReply(post),boastId);
        return new ResponseEntity(mapper.boastReplyToBoastReplyResponseDto(boastReply),HttpStatus.CREATED);
    }

    @PatchMapping("/{reply-id}")
    public ResponseEntity patchReply(@Valid @RequestBody BoastReplyDto.patch patch,
                                     @PathVariable("reply-id") @Positive Long boastReplyId){
        BoastReply boastReply = mapper.boastReplyPatchDtoToBoastReply(patch);
        boastReply.setBoastReplyId(boastReplyId);
        return new ResponseEntity(mapper.boastReplyToBoastReplyResponseDto(boastReplyService.updateReply(boastReply)),
                HttpStatus.OK);
    }

    @GetMapping("/{boast-id}")
    public ResponseEntity getReply(@PathVariable("boast-id") @Positive long boastId,
                                   @Positive @RequestParam int page,
                                   @Positive @RequestParam int size){
        Page<BoastReply> pageBoastReply = boastReplyService.getBoastReplies(boastId, PageRequest.of(page-1,size));
        return new ResponseEntity(pageBoastReply,HttpStatus.OK);
    }

    @DeleteMapping("{reply-id}")
    public ResponseEntity deleteReply(@PathVariable("reply-id") @Positive long boastReplyId){
        boastReplyService.deleteBoastReply(boastReplyId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

}
