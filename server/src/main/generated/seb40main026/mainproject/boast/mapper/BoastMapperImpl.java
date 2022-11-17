package seb40main026.mainproject.boast.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import seb40main026.mainproject.boast.dto.BoastDto;
import seb40main026.mainproject.boast.entity.Boast;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-17T04:25:22+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 15.0.1 (Oracle Corporation)"
)
@Component
public class BoastMapperImpl implements BoastMapper {

    @Override
    public Boast boastPostDtoToBoast(BoastDto.Post post) {
        if ( post == null ) {
            return null;
        }

        Boast boast = new Boast();

        boast.setTitle( post.getTitle() );
        boast.setContent( post.getContent() );

        return boast;
    }

    @Override
    public Boast boastPatchDtoToBoast(BoastDto.Patch patch) {
        if ( patch == null ) {
            return null;
        }

        Boast boast = new Boast();

        if ( patch.getBoastId() != null ) {
            boast.setBoastId( patch.getBoastId() );
        }
        boast.setTitle( patch.getTitle() );
        boast.setContent( patch.getContent() );

        return boast;
    }

    @Override
    public BoastDto.Response boastToBoastResponseDto(Boast boast) {
        if ( boast == null ) {
            return null;
        }

        BoastDto.Response response = new BoastDto.Response();

        response.setBoastId( boast.getBoastId() );
        response.setTitle( boast.getTitle() );
        response.setContent( boast.getContent() );
        response.setBoardCreatedAt( boast.getBoardCreatedAt() );
        response.setBoardModifiedAt( boast.getBoardModifiedAt() );
        response.setView_count( boast.getView_count() );
        response.setLike_count( boast.getLike_count() );

        return response;
    }

    @Override
    public List<BoastDto.Response> boastToBoastResponseDtos(List<Boast> boast) {
        if ( boast == null ) {
            return null;
        }

        List<BoastDto.Response> list = new ArrayList<BoastDto.Response>( boast.size() );
        for ( Boast boast1 : boast ) {
            list.add( boastToBoastResponseDto( boast1 ) );
        }

        return list;
    }
}
