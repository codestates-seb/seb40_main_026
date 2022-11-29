package seb40main026.mainproject.member.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import seb40main026.mainproject.member.dto.MemberDto;
import seb40main026.mainproject.member.entity.Member;
import seb40main026.mainproject.member.mapper.MemberMapper;
import seb40main026.mainproject.member.service.MemberService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/members")
@Validated
@AllArgsConstructor
public class MemberController {

    private final MemberService memberService;
    private final MemberMapper mapper;

    @PostMapping
    public ResponseEntity<?> postMember(@Valid @RequestBody MemberDto.Post request) {
        Member createdMember = memberService.createMember(mapper.memberPostToMember(request));
        return new ResponseEntity<>(mapper.memberToResponse(createdMember), HttpStatus.CREATED);
    }

    @PatchMapping("/{member-id}")
    public ResponseEntity<?> patchMember(@PathVariable("member-id") @Positive long memberId,
                                         @Valid @RequestBody MemberDto.Patch request) {
        request.setMemberId(memberId);
        Member updatedMember = memberService.updatedMember(mapper.memberPatchToMember(request));
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

}
