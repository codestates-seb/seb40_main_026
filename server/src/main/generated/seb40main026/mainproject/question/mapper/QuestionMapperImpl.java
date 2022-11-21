package seb40main026.mainproject.question.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import seb40main026.mainproject.question.dto.QuestionDto;
import seb40main026.mainproject.question.entity.Question;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-21T18:11:38+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 11.0.13 (Oracle Corporation)"
)
@Component
public class QuestionMapperImpl implements QuestionMapper {

    @Override
    public Question questionPostDtoToQuestion(QuestionDto.Post questionPostDto) {
        if ( questionPostDto == null ) {
            return null;
        }

        Question.QuestionBuilder question = Question.builder();

        question.title( questionPostDto.getTitle() );
        question.content( questionPostDto.getContent() );

        return question.build();
    }

    @Override
    public Question questionPatchDtoToQuestion(QuestionDto.Patch questionPatchDto) {
        if ( questionPatchDto == null ) {
            return null;
        }

        Question.QuestionBuilder question = Question.builder();

        question.questionId( questionPatchDto.getQuestionId() );
        question.title( questionPatchDto.getTitle() );
        question.content( questionPatchDto.getContent() );

        return question.build();
    }

    @Override
    public List<QuestionDto.Response> questionsToQuestionResponses(List<Question> questions) {
        if ( questions == null ) {
            return null;
        }

        List<QuestionDto.Response> list = new ArrayList<QuestionDto.Response>( questions.size() );
        for ( Question question : questions ) {
            list.add( questionToQuestionResponse( question ) );
        }

        return list;
    }
}
