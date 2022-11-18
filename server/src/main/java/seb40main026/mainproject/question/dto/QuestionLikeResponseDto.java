package seb40main026.mainproject.question.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class QuestionLikeResponseDto {
    private long questionId;
    private long like; // 0 또는 1
    private long totalLikes;
}
