package seb40main026.mainproject.question.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class QuestionReportResponseDto {
    private long questionId;
    private long report; // 0 또는 1
    private long totalReports;
}
