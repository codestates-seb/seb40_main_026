package seb40main026.mainproject.study.mapper;

import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import seb40main026.mainproject.study.dto.StudyDto;
import seb40main026.mainproject.study.entity.Study;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-12-02T23:31:15+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 11.0.15 (Oracle Corporation)"
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
        study.setContent( studyPostDto.getContent() );
        study.setPrice( studyPostDto.getPrice() );
        study.setRecommendation( studyPostDto.getRecommendation() );
        study.setContact( studyPostDto.getContact() );
        study.setPlace( studyPostDto.getPlace() );
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
        study.setContent( studyPatchDto.getContent() );
        study.setPrice( studyPatchDto.getPrice() );
        study.setRecommendation( studyPatchDto.getRecommendation() );
        study.setContact( studyPatchDto.getContact() );
        study.setPlace( studyPatchDto.getPlace() );
        study.setRecruitment( studyPatchDto.getRecruitment() );
        study.setCount( studyPatchDto.getCount() );
        study.setPeriod( studyPatchDto.getPeriod() );
        study.setTime( studyPatchDto.getTime() );
        study.setOnline( studyPatchDto.getOnline() );

        return study;
    }
}
