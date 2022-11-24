package seb40main026.mainproject.study.mapper;

import org.mapstruct.Mapper;
import seb40main026.mainproject.study.dto.StudyDto;
import seb40main026.mainproject.study.entity.Study;

import java.util.List;

@Mapper(componentModel = "spring")
public interface StudyMapper {
    Study studyPostDtoToStudy(StudyDto.Post studyPostDto);

    Study studyPatchDtoToStudy(StudyDto.Patch studyPatchDto);

    StudyDto.Response studyToStudyResponse(Study study);
//    default StudyDto.Response studyToStudyResponse(Study study) {
//        if(study == null) return null;
//        StudyDto.Response response = new StudyDto.Response();
//        response.setStudyId(study.getStudyId());
//        response.setStudyName(study.getStudyName());
//        response.setExplain(study.getExplain());
//        response.setPrice(study.getPrice());
//        response.setRecruitment(study.getRecruitment());
//        response.setCount(study.getCount());
//        response.setPeriod(study.getPeriod());
//        response.setTime(study.getTime());
//        response.setOnline(study.getOnline());
//        return response;
//    }

    List<StudyDto.Response> studiesToStudyResponses(List<Study> studies);
}
