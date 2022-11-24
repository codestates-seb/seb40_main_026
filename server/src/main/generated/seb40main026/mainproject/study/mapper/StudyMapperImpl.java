package seb40main026.mainproject.study.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import seb40main026.mainproject.study.dto.StudyDto;
import seb40main026.mainproject.study.entity.Study;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-24T19:33:21+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 11.0.13 (Oracle Corporation)"
)
@Component
public class StudyMapperImpl implements StudyMapper {

    @Override
    public Study studyPostDtoToStudy(StudyDto.Post studyPostDto) {
        if ( studyPostDto == null ) {
            return null;
        }

        Study study = new Study();

        study.setStudyName( studyPostDto.getStudyName() );
        study.setExplain( studyPostDto.getExplain() );
        study.setPrice( studyPostDto.getPrice() );
        study.setRecruitment( studyPostDto.getRecruitment() );
        study.setCount( studyPostDto.getCount() );
        study.setPeriod( studyPostDto.getPeriod() );
        study.setTime( studyPostDto.getTime() );
        study.setOnline( studyPostDto.getOnline() );

        return study;
    }

    @Override
    public Study studyPatchDtoToStudy(StudyDto.Patch studyPatchDto) {
        if ( studyPatchDto == null ) {
            return null;
        }

        Study study = new Study();

        study.setStudyId( studyPatchDto.getStudyId() );
        study.setStudyName( studyPatchDto.getStudyName() );
        study.setExplain( studyPatchDto.getExplain() );
        study.setPrice( studyPatchDto.getPrice() );
        study.setRecruitment( studyPatchDto.getRecruitment() );
        study.setCount( studyPatchDto.getCount() );
        study.setPeriod( studyPatchDto.getPeriod() );
        study.setTime( studyPatchDto.getTime() );
        study.setOnline( studyPatchDto.getOnline() );

        return study;
    }

    @Override
    public StudyDto.Response studyToStudyResponse(Study study) {
        if ( study == null ) {
            return null;
        }

        StudyDto.Response response = new StudyDto.Response();

        response.setStudyId( study.getStudyId() );
        response.setStudyName( study.getStudyName() );
        response.setExplain( study.getExplain() );
        response.setPrice( study.getPrice() );
        response.setRecruitment( study.getRecruitment() );
        response.setCount( study.getCount() );
        response.setPeriod( study.getPeriod() );
        response.setTime( study.getTime() );
        response.setOnline( study.getOnline() );

        return response;
    }

    @Override
    public List<StudyDto.Response> studiesToStudyResponses(List<Study> studies) {
        if ( studies == null ) {
            return null;
        }

        List<StudyDto.Response> list = new ArrayList<StudyDto.Response>( studies.size() );
        for ( Study study : studies ) {
            list.add( studyToStudyResponse( study ) );
        }

        return list;
    }
}
