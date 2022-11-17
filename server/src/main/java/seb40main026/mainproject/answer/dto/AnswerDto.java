package seb40main026.mainproject.answer.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

public class AnswerDto {
    @Getter
    public static class Post {
        @NotBlank
        private String content;
    }

    @Getter
    @Setter
    public static class Patch {
        private Long answerId;
        private String content;
    }

    @Getter
    @Setter
    public static class Response {
        private Long questionId;
        private Long answerId;
        private String content;
        private Boolean best;
        // 파일
        private Integer likeCount;
        private Integer reportCount;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
        private Boolean checkLike;
    }
}
