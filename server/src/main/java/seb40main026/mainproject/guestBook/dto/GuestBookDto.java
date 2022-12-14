package seb40main026.mainproject.guestBook.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class GuestBookDto {
    @Getter
    public static class Post {
        @NotNull
        private Long memberId;
        @NotBlank(message = "내용을 적어주세요")
        private String content;
    }

    @Getter
    public static class Patch {
        @NotBlank
        private String content;
    }

    @Getter
    @Setter
    public static class Response {
        private Long guestBookId;
        private Long memberId;
        private String content;
        private String writer;
        private String createdAt;
        private String modifiedAt;
        private String memberGrade;
    }
}
