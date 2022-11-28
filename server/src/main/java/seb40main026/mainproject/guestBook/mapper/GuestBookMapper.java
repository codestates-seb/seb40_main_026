package seb40main026.mainproject.guestBook.mapper;

import org.mapstruct.Mapper;
import seb40main026.mainproject.guestBook.dto.GuestBookDto;
import seb40main026.mainproject.guestBook.entity.GuestBook;

import java.util.List;

@Mapper(componentModel = "spring")
public interface GuestBookMapper {
    GuestBook guestBookPostDtoToGuestBook(GuestBookDto.Post guestBookPostDto);

    GuestBook guestBookPatchDtoToGuestBook(GuestBookDto.Patch guestBookPatchDto);

    default GuestBookDto.Response guestBookToGuestBookResponseDto(GuestBook guestBook) {
        if(guestBook == null) return null;
        GuestBookDto.Response response = new GuestBookDto.Response();
        response.setGuestBookId(guestBook.getGuestBookId());
        response.setMemberId(guestBook.getMember().getMemberId());
        response.setContent(guestBook.getContent());
        response.setWriter(guestBook.getWriter());
        response.setCreatedAt(guestBook.getCreatedAt());
        response.setModifiedAt(guestBook.getModifiedAt());
        return response;
    }

    List<GuestBookDto.Response> guestBooksToGuestBookResponseDtos(List<GuestBook> guestBooks);
}
