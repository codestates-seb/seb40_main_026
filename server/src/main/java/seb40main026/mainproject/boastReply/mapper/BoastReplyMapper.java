package seb40main026.mainproject.boastReply.mapper;

import org.mapstruct.Mapper;
import seb40main026.mainproject.boastReply.dto.BoastReplyDto;
import seb40main026.mainproject.boastReply.entity.BoastReply;

@Mapper(componentModel = "spring")
public interface BoastReplyMapper {

    BoastReply boastReplyPostDtoToBoastReply(BoastReplyDto.post post);
    BoastReply boastReplyPatchDtoToBoastReply(BoastReplyDto.patch patch);
    BoastReplyDto.response boastReplyToBoastReplyResponseDto(BoastReply boastReply);

    //    Page<BoastReplyDto.response> boastReplyToBoastReplyResponseDtos(Page<BoastReplyDto.response> response);

}
