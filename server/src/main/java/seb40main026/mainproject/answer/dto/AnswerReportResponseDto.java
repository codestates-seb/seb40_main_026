package seb40main026.mainproject.answer.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class AnswerReportResponseDto {
    private long answerId;
    private boolean report;
    private long totalReports;
}
