package seb40main026.mainproject.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

public class QuestionDto {
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Post {
        @NotBlank(message = "제목을 적어주세요")
        private String title;

        @NotBlank(message = "내용을 적어주세요")
        private String content;
    }

    @Setter
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Patch {
        private Long questionId;
        private String title;
        private String content;
    }

    @Setter
    @Getter
    public static class Response {
        private Long questionId;
        private String title;
        private String content;
        // 파일
        private Integer viewCount;
        private Integer likeCount;
        private Integer reportCount;
        private Integer answerCount;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
    }
}
