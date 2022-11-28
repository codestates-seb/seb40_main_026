package seb40main026.mainproject.guestBook.mapper;

import org.mapstruct.Mapper;
import seb40main026.mainproject.guestBook.dto.GuestBookDto;
import seb40main026.mainproject.guestBook.entity.GuestBook;
import seb40main026.mainproject.member.entity.Member;

import java.util.ArrayList;
import java.util.List;

@Mapper(componentModel = "spring")
public interface GuestBookMapper {
    GuestBook guestBookPostDtoToGuestBook(GuestBookDto.Post guestBookPostDto);

    GuestBook guestBookPatchDtoToGuestBook(GuestBookDto.Patch guestBookPatchDto);

    default GuestBookDto.Response guestBookToGuestBookResponseDto(GuestBook guestBook,
                                                                  Member writer) {
        if(guestBook == null) return null;
        GuestBookDto.Response response = new GuestBookDto.Response();
        response.setGuestBookId(guestBook.getGuestBookId());
        response.setMemberId(guestBook.getMember().getMemberId());
        response.setContent(guestBook.getContent());
        response.setWriter(writer.getNickname()); // nickname
        response.setCreatedAt(guestBook.getCreatedAt());
        response.setModifiedAt(guestBook.getModifiedAt());
        return response;
    }

    default List<GuestBookDto.Response> guestBooksToGuestBookResponseDtos(List<GuestBook> guestBooks,
                                                                          List<Member> writers) {
        if ( guestBooks == null ) {
            return null;
        }

        List<GuestBookDto.Response> list = new ArrayList<GuestBookDto.Response>( guestBooks.size() );
        int i = 0;
        for ( GuestBook guestBook : guestBooks ) {
            list.add( guestBookToGuestBookResponseDto( guestBook, writers.get(i++) ) );
        }

        return list;
    }
}
