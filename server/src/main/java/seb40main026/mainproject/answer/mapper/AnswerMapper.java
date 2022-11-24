package seb40main026.mainproject.answer.mapper;

import org.mapstruct.Mapper;
import seb40main026.mainproject.answer.dto.AnswerDto;
import seb40main026.mainproject.answer.dto.AnswerLikeResponseDto;
import seb40main026.mainproject.answer.dto.AnswerReportResponseDto;
import seb40main026.mainproject.answer.entity.Answer;
import seb40main026.mainproject.answer.entity.AnswerLike;
import seb40main026.mainproject.answer.entity.AnswerReport;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    Answer answerPostDtoToAnswer(AnswerDto.Post answerPostDto);

    Answer answerPatchDtoToAnswer(AnswerDto.Patch answerPatchDto);

    default AnswerDto.Response answerToAnswerResponse(Answer answer) {
        if(answer == null) return null;
        AnswerDto.Response response = new AnswerDto.Response();
        response.setQuestionId(answer.getQuestion().getQuestionId());
        response.setAnswerId(answer.getAnswerId());
        response.setContent(answer.getContent());
        response.setBest(answer.getBest());
        response.setNickname(answer.getMember().getNickname());
        response.setGrade(answer.getMember().getMemberGrade().getGrade());
        response.setLevel(answer.getMember().getSticker());
        // 뱃지
        response.setTeacher(answer.getMember().getTeacher());
        // 파일
        response.setLikeCount(answer.getLikeCount());
        response.setReportCount(answer.getReportCount());
        response.setCreatedAt(answer.getCreatedAt());
        response.setModifiedAt(answer.getModifiedAt());
        response.setCheckLike(answer.getCheckLike());
        return response;
    }

    List<AnswerDto.Response> answersToAnswerResponses(List<Answer> answers);

    default AnswerLikeResponseDto answerLikeToAnswerLikeResponse(AnswerLike answerLike) {
        if(answerLike == null) return null;
        AnswerLikeResponseDto response = new AnswerLikeResponseDto();
        response.setAnswerId(answerLike.getAnswer().getAnswerId());
        response.setLike(answerLike.getAnswerLike());
        response.setTotalLikes(answerLike.getAnswer().getLikeCount());
        return response;
    }

    default AnswerReportResponseDto answerReportToAnswerReportResponse(AnswerReport answerReport) {
        if(answerReport == null) return null;
        AnswerReportResponseDto response = new AnswerReportResponseDto();
        response.setAnswerId(answerReport.getAnswer().getAnswerId());
        response.setReport(answerReport.getAnswerReport());
        response.setTotalReports(answerReport.getAnswer().getReportCount());
        return response;
    }
}
