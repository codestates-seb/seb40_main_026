package seb40main026.mainproject.boastReply.mapper;

import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import seb40main026.mainproject.boastReply.dto.BoastReplyDto;
import seb40main026.mainproject.boastReply.entity.BoastReply;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-28T13:53:44+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 11.0.15 (Oracle Corporation)"
)
@Component
public class BoastReplyMapperImpl implements BoastReplyMapper {

    @Override
    public BoastReply boastReplyPostDtoToBoastReply(BoastReplyDto.post post) {
        if ( post == null ) {
            return null;
        }

        BoastReply boastReply = new BoastReply();

        boastReply.setContent( post.getContent() );

        return boastReply;
    }

    @Override
    public BoastReply boastReplyPatchDtoToBoastReply(BoastReplyDto.patch patch) {
        if ( patch == null ) {
            return null;
        }

        BoastReply boastReply = new BoastReply();

        boastReply.setBoastReplyId( patch.getBoastReplyId() );
        boastReply.setContent( patch.getContent() );

        return boastReply;
    }

    @Override
    public BoastReplyDto.response boastReplyToBoastReplyResponseDto(BoastReply boastReply) {
        if ( boastReply == null ) {
            return null;
        }

        BoastReplyDto.response response = new BoastReplyDto.response();

        response.setBoastReplyId( boastReply.getBoastReplyId() );
        response.setContent( boastReply.getContent() );
        response.setBadge( boastReply.getBadge() );
        response.setNickName( boastReply.getNickName() );
        response.setGrade( boastReply.getGrade() );
        response.setReplyCreatedAt( boastReply.getReplyCreatedAt() );
        response.setReplyModifiedAt( boastReply.getReplyModifiedAt() );

        return response;
    }
}
