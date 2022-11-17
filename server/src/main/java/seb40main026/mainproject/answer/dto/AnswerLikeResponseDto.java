package seb40main026.mainproject.answer.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class AnswerLikeResponseDto {
    private long answerId;
    private boolean like;
    private long totalLikes;
}
