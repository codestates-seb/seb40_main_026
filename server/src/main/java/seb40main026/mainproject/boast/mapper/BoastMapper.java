package seb40main026.mainproject.boast.mapper;

import org.mapstruct.Mapper;
import seb40main026.mainproject.boast.dto.BoastDto;
import seb40main026.mainproject.boast.entity.Boast;

import java.util.List;

@Mapper(componentModel = "spring")
public interface BoastMapper {
    Boast boastPostDtoToBoast(BoastDto.Post post);
    Boast boastPatchDtoToBoast(BoastDto.Patch patch);
    BoastDto.Response boastToBoastResponseDto(Boast boast);
    List<BoastDto.Response> boastToBoastResponseDtos(List<Boast> boast);
}
