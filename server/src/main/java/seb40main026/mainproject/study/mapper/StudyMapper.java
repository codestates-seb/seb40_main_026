package seb40main026.mainproject.study.mapper;

import org.mapstruct.Mapper;
import seb40main026.mainproject.study.dto.StudyDto;
import seb40main026.mainproject.study.entity.MemberStudy;
import seb40main026.mainproject.study.entity.Study;

import java.util.ArrayList;
import java.util.List;

@Mapper(componentModel = "spring")
public interface StudyMapper {
    Study studyPostDtoToStudy(StudyDto.Post studyPostDto);

    Study studyPatchDtoToStudy(StudyDto.Patch studyPatchDto);

//    StudyDto.Response studyToStudyResponse(Study study);

    default StudyDto.Response studyToStudyResponse(Study study, MemberStudy memberStudy) {
        if ( study == null ) {
            return null;
        }

        StudyDto.Response response = new StudyDto.Response();

        response.setStudyId( study.getStudyId() );
        response.setStudyName( study.getStudyName() );
        response.setPrice( study.getPrice() );
        response.setRecommendation( study.getRecommendation() );
        response.setContact( study.getContact() );
        response.setPlace( study.getPlace() );
        response.setRecruitment( study.getRecruitment() );
        response.setCount( study.getCount() );
        response.setPeriod( study.getPeriod() );
        response.setTime( study.getTime() );
        response.setOnline( study.getOnline() );
        response.setFileUrl( study.getFileUrl() );
        if(memberStudy == null) response.setRegistered(false);
        else response.setRegistered( memberStudy.getRegistered() );

        return response;
    }

//    List<StudyDto.Response> studiesToStudyResponses(List<Study> studies);
    default List<StudyDto.Response> studiesToStudyResponses(List<Study> studies) {
        if ( studies == null ) {
            return null;
        }

        List<StudyDto.Response> list = new ArrayList<StudyDto.Response>( studies.size() );
        for ( Study study : studies ) {
            list.add( studyToStudyResponse( study, null ) );
        }

        return list;
    }
}