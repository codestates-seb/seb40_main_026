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
        guestBook.updateWriter(memberService.getLoginMember().getNickname()); // 현재 로그인한 멤버가 작성자
        return mapper.guestBookToGuestBookResponseDto(guestBookRepository.save(guestBook));
    }

    // 방명록 수정
    public GuestBookDto.Response updateGuestBook(GuestBookDto.Patch guestBookPatchDto, long guestBookId) {
        GuestBook findGuestBook = findVerifiedGuestBook(guestBookId);
        GuestBook guestBook = mapper.guestBookPatchDtoToGuestBook(guestBookPatchDto);
        findGuestBook.updateContent(guestBook.getContent());
        return mapper.guestBookToGuestBookResponseDto(findGuestBook);
    }

    // 방명록 조회
    public List<GuestBookDto.Response> findGuestBooks(long memberId) {
        Member member = memberService.findVerifiedMember(memberId);
        List<GuestBook> guestBooks = guestBookRepository.findByMember(member);
        return mapper.guestBooksToGuestBookResponseDtos(guestBooks);
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
                () -> new BusinessException(ExceptionCode.GUESTBOOKT_NOT_FOUND));
        return findGuestBook;
    }
}
