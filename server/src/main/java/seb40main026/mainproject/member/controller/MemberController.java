package seb40main026.mainproject.member.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import seb40main026.mainproject.member.dto.MemberDto;
import seb40main026.mainproject.member.entity.Member;
import seb40main026.mainproject.member.mapper.MemberMapper;
import seb40main026.mainproject.member.service.MemberService;

import javax.validation.constraints.Positive;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/members")
@Validated
@AllArgsConstructor
public class MemberController {

    private final MemberService memberService;
    private final MemberMapper mapper;

    @PostMapping
    public ResponseEntity<?> postMember(@RequestBody MemberDto.Post request) {
        Member createdMember = memberService.createMember(mapper.memberPostToMember(request));
        return new ResponseEntity<>(mapper.memberToResponse(createdMember), HttpStatus.CREATED);
    }

    @PatchMapping("/{member-id}")
    public ResponseEntity<?> patchMember(@PathVariable("member-id") @Positive long memberId,
                                         @RequestPart("nickname") String nickname,
                                         @RequestPart("introduce") String introduce,
                                         @RequestPart(value = "image", required = false) MultipartFile image) throws IOException {
        MemberDto.Patch request = new MemberDto.Patch(memberId, nickname, introduce);
        Member updatedMember = memberService.updatedMember(mapper.memberPatchToMember(request), image);
        return new ResponseEntity<>(mapper.memberToResponse(updatedMember), HttpStatus.OK);
    }

    @GetMapping("/{member-id}")
    public ResponseEntity<?> getMember(@PathVariable("member-id") @Positive long memberId) {
        Member foundMember = memberService.findMember(memberId);
        return new ResponseEntity<>(mapper.memberToResponse(foundMember), HttpStatus.OK);
    }

    @GetMapping()
    public ResponseEntity<?> getMembers() {
        List<Member> foundMembers = memberService.findMembers();
        return new ResponseEntity<>(mapper.membersToResponses(foundMembers), HttpStatus.OK);
    }

    @DeleteMapping("/{member-id}")
    public ResponseEntity<?> deleteMember(@PathVariable("member-id") @Positive long memberId) {
        Member deletedMember = memberService.deleteMember(memberId);
        return new ResponseEntity<>(mapper.memberToResponse(deletedMember), HttpStatus.NO_CONTENT);
    }

    @PatchMapping("/changeBadge/{badge-name}")
    public ResponseEntity changeBadge(@PathVariable("badge-name") String badgeName){
        memberService.setCurrentBadge(badgeName);
        return new ResponseEntity<>(HttpStatus.OK) ;
    }

    @GetMapping("/ranking/answer")
    public ResponseEntity getMembersByAnswer(){
        List<Member> sortMembers = memberService.findMembersByAnswer();
        return new ResponseEntity(mapper.membersToResponses(sortMembers),HttpStatus.OK);
    }
    @GetMapping("/ranking/question")
    public ResponseEntity getMembersByQuestion(){
        List<Member> sortMembers = memberService.findMembersByQuestion();
        return new ResponseEntity(mapper.membersToResponses(sortMembers),HttpStatus.OK);
    }

    @GetMapping("/ranking/level")
    public ResponseEntity getMembersByLevel(){
        List<Member> sortMembers = memberService.findMembersByLevel();
        return new ResponseEntity(mapper.membersToResponses(sortMembers),HttpStatus.OK);
    }


}
