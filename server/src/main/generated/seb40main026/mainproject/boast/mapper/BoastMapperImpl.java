package seb40main026.mainproject.boast.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import seb40main026.mainproject.boast.dto.BoastDto;
import seb40main026.mainproject.boast.entity.Boast;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-28T19:45:26+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 11.0.15 (Oracle Corporation)"
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
        response.setBadge( boast.getBadge() );
        response.setNickName( boast.getNickName() );
        response.setGrade( boast.getGrade() );
        response.setBoardCreatedAt( boast.getBoardCreatedAt() );
        response.setBoardModifiedAt( boast.getBoardModifiedAt() );
        response.setViewCount( boast.getViewCount() );
        response.setLikeCount( boast.getLikeCount() );
        response.setCheckLike( boast.getCheckLike() );

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
