package seb40main026.mainproject.guestBook.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import seb40main026.mainproject.guestBook.dto.GuestBookDto;
import seb40main026.mainproject.guestBook.service.GuestBookService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@Validated
@RequestMapping("/guestBooks")
@RequiredArgsConstructor
public class GuestBookController {
    private final GuestBookService guestBookService;

    // 방명록 작성
    @PostMapping
    public ResponseEntity postGuestBook(@Valid @RequestBody GuestBookDto.Post guestBookPostDto) {
        GuestBookDto.Response response = guestBookService.createGuestBook(guestBookPostDto);
        return new ResponseEntity(response, HttpStatus.CREATED);
    }

    // 방명록 수정
    @PatchMapping("/{guestBook-id}")
    public ResponseEntity patchGuestBook(@PathVariable("guestBook-id") @Positive long guestBookId,
                                        @Valid @RequestBody GuestBookDto.Patch guestBookPatchDto) {
        GuestBookDto.Response response = guestBookService.updateGuestBook(guestBookPatchDto, guestBookId);
        return new ResponseEntity(response, HttpStatus.OK);
    }

    // 특정 멤버에 대한 방명록 조회
    @GetMapping
    public ResponseEntity getGuestBooks(@RequestParam("memberId") @Positive long memberId) {
        List<GuestBookDto.Response> response = guestBookService.findGuestBooks(memberId);
        return new ResponseEntity(response, HttpStatus.OK);
    }

    // 특정 방명록 삭제
    @DeleteMapping("/{guestBook-id}")
    public ResponseEntity deleteGuestBook(@PathVariable("guestBook-id") @Positive long guestBookId) {
        guestBookService.deleteGuestBook(guestBookId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

}
