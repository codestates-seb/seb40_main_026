package seb40main026.mainproject.guestBook.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seb40main026.mainproject.exception.BusinessException;
import seb40main026.mainproject.exception.ExceptionCode;
import seb40main026.mainproject.guestBook.dto.GuestBookDto;
import seb40main026.mainproject.guestBook.entity.GuestBook;
import seb40main026.mainproject.guestBook.mapper.GuestBookMapper;
import seb40main026.mainproject.guestBook.repository.GuestBookRepository;
import seb40main026.mainproject.member.entity.Member;
import seb40main026.mainproject.member.service.MemberServiceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Transactional
@Service
@RequiredArgsConstructor
public class GuestBookService {
    private final GuestBookRepository guestBookRepository;
    private final GuestBookMapper mapper;
    private final MemberServiceImpl memberService;

    // 방명록 작성
    public GuestBookDto.Response createGuestBook(GuestBookDto.Post guestBookPostDto) {
        Member member = memberService.findVerifiedMember(guestBookPostDto.getMemberId());
        GuestBook guestBook = mapper.guestBookPostDtoToGuestBook(guestBookPostDto);
        guestBook.updateMember(member);
        guestBook.updateWriter(memberService.getLoginMember().getMemberId()); // 현재 로그인한 멤버가 작성자
        Member writer = memberService.findVerifiedMember(guestBook.getWriterId());
        return mapper.guestBookToGuestBookResponseDto(guestBookRepository.save(guestBook), writer);
    }

    // 방명록 수정
    public GuestBookDto.Response updateGuestBook(GuestBookDto.Patch guestBookPatchDto, long guestBookId) {
        GuestBook findGuestBook = findVerifiedGuestBook(guestBookId);
        GuestBook guestBook = mapper.guestBookPatchDtoToGuestBook(guestBookPatchDto);
        findGuestBook.updateContent(guestBook.getContent());
        Member writer = memberService.findVerifiedMember(guestBook.getWriterId());
        return mapper.guestBookToGuestBookResponseDto(findGuestBook, writer);
    }

    // 방명록 조회
    public List<GuestBookDto.Response> findGuestBooks(long memberId) {
        Member member = memberService.findVerifiedMember(memberId);
        List<GuestBook> guestBooks = guestBookRepository.findByMember(member);
        List<Member> writers = new ArrayList<>();
        for(int i = 0; i < guestBooks.size(); i++) {
            Member writer = memberService.findVerifiedMember(guestBooks.get(i).getWriterId());
            writers.add(writer);
        }
        return mapper.guestBooksToGuestBookResponseDtos(guestBooks, writers);
    }

    // 방명록 삭제
    public void deleteGuestBook(long guestBookId) {
        GuestBook guestBook = findVerifiedGuestBook(guestBookId);
        guestBookRepository.delete(guestBook);
    }

    // 유효한 방명록인지 확인
    public GuestBook findVerifiedGuestBook(long guestBookId) {
        Optional<GuestBook> optionalGuestBook = guestBookRepository.findById(guestBookId);
        GuestBook findGuestBook = optionalGuestBook.orElseThrow(
                () -> new BusinessException(ExceptionCode.GUESTBOOK_NOT_FOUND));
        return findGuestBook;
    }
}
