package seb40main026.mainproject.question.mapper;

import org.mapstruct.Mapper;
import seb40main026.mainproject.question.dto.QuestionDto;
import seb40main026.mainproject.question.dto.QuestionLikeResponseDto;
import seb40main026.mainproject.question.dto.QuestionReportResponseDto;
import seb40main026.mainproject.question.entity.Question;
import seb40main026.mainproject.question.entity.QuestionLike;
import seb40main026.mainproject.question.entity.QuestionReport;

import java.util.List;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    Question questionPostDtoToQuestion(QuestionDto.Post questionPostDto);
//    default Question questionPostDtoToQuestion(QuestionDto.Post questionPostDto) {
//        Question question = new Question();
//        question.setTitle(questionPostDto.getTitle());
//        question.setContent(questionPostDto.getContent());
//        return question;
//    }

    Question questionPatchDtoToQuestion(QuestionDto.Patch questionPatchDto);
//    default Question questionPatchDtoToQuestion(QuestionDto.Patch questionPatchDto) {
//        Question question = new Question();
//        question.setQuestionId(questionPatchDto.getQuestionId());
//        question.setTitle(questionPatchDto.getTitle());
//        question.setContent(questionPatchDto.getContent());
//        return question;
//    }

    default QuestionDto.Response questionToQuestionResponse(Question question) {
        if ( question == null ) {
            return null;
        }

        QuestionDto.Response response = new QuestionDto.Response();

        response.setQuestionId( question.getQuestionId() );
        response.setTitle( question.getTitle() );
        response.setContent( question.getContent() );
        response.setViewCount( question.getViewCount() );
        response.setLikeCount( question.getLikeCount() );
        response.setReportCount( question.getReportCount() );
        response.setAnswerCount( question.getAnswers().size() ); // 질문에 해당하는 답변 개수
        response.setCreatedAt( question.getCreatedAt() );
        response.setModifiedAt( question.getModifiedAt() );
        response.setCheckLike( question.getCheckLike() );

        return response;
    }
//    default QuestionDto.Response questionToQuestionResponse(Question question) {
//        if(question == null) return null;
//
//        QuestionDto.Response response = new QuestionDto.Response();
//        response.setQuestionId(question.getQuestionId());
//        response.setTitle(question.getTitle());
//        response.setContent(question.getContent());
//        // 파일
//        response.setViewCount(question.getViewCount());
//        response.setLikeCount(question.getLikeCount());
//        response.setReportCount(question.getReportCount());
//        response.setCreatedAt(question.getCreatedAt());
//        response.setModifiedAt(question.getModifiedAt());
//
//        return response;
//    }

    List<QuestionDto.Response> questionsToQuestionResponses(List<Question> questions);

//    QuestionLikeResponseDto questionLikeToQuestionLikeResponse(QuestionLike questionLike);
    default QuestionLikeResponseDto questionLikeToQuestionLikeResponse(QuestionLike questionLike) {
        if(questionLike == null) return null;
        QuestionLikeResponseDto response = new QuestionLikeResponseDto();
        response.setQuestionId(questionLike.getQuestion().getQuestionId());
        response.setLike(questionLike.getQuestionLike());
        response.setTotalLikes(questionLike.getQuestion().getLikeCount());
        return response;
    }

    default QuestionReportResponseDto questionReportToQuestionReportResponse(QuestionReport questionReport) {
        if(questionReport == null) return null;
        QuestionReportResponseDto response = new QuestionReportResponseDto();
        response.setQuestionId(questionReport.getQuestion().getQuestionId());
        response.setReport(questionReport.getQuestionReport());
        response.setTotalReports(questionReport.getQuestion().getReportCount());
        return response;
    }
}
