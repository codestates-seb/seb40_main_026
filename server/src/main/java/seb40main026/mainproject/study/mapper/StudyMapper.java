package seb40main026.mainproject.study.mapper;

import org.mapstruct.Mapper;
import seb40main026.mainproject.study.dto.StudyDto;
import seb40main026.mainproject.study.entity.Study;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface StudyMapper {
    Study studyPostDtoToStudy(StudyDto.Post studyPostDto);

    Study studyPatchDtoToStudy(StudyDto.Patch studyPatchDto);

    StudyDto.Response studyToStudyResponse(Study study);

    List<StudyDto.Response> studiesToStudyResponses(List<Study> studies);
}