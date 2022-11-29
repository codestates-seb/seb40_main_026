package seb40main026.mainproject.guestBook.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import seb40main026.mainproject.guestBook.dto.GuestBookDto;
import seb40main026.mainproject.guestBook.entity.GuestBook;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-28T13:17:59+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 11.0.13 (Oracle Corporation)"
)
@Component
public class GuestBookMapperImpl implements GuestBookMapper {

    @Override
    public GuestBook guestBookPostDtoToGuestBook(GuestBookDto.Post guestBookPostDto) {
        if ( guestBookPostDto == null ) {
            return null;
        }

        GuestBook.GuestBookBuilder guestBook = GuestBook.builder();

        guestBook.content( guestBookPostDto.getContent() );

        return guestBook.build();
    }

    @Override
    public GuestBook guestBookPatchDtoToGuestBook(GuestBookDto.Patch guestBookPatchDto) {
        if ( guestBookPatchDto == null ) {
            return null;
        }

        GuestBook.GuestBookBuilder guestBook = GuestBook.builder();

        guestBook.content( guestBookPatchDto.getContent() );

        return guestBook.build();
    }

    @Override
    public List<GuestBookDto.Response> guestBooksToGuestBookResponseDtos(List<GuestBook> guestBooks) {
        if ( guestBooks == null ) {
            return null;
        }

        List<GuestBookDto.Response> list = new ArrayList<GuestBookDto.Response>( guestBooks.size() );
        for ( GuestBook guestBook : guestBooks ) {
            list.add( guestBookToGuestBookResponseDto( guestBook ) );
        }

        return list;
    }
}
