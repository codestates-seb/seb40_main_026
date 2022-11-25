package seb40main026.mainproject.boast.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import seb40main026.mainproject.member.entity.Member;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

public class BoastDto {
    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Post{

        @NotBlank(message = "제목을 적어주세요")
        private String title;

        @NotBlank(message = "내용을 적어주세요")
        private String content;
    }

    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Patch{
        private Long boastId;

        private String title;

        private String content;

        public void setBoardId(Long boastId){
            this.boastId = boastId;
        }

    }
    @Getter @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Response{

        private Long boastId;

        private String title;

        private String content;

        private String badge;

        private String nickName;

        private Member.MemberGrade grade;

        private String boardCreatedAt;

        private String boardModifiedAt;

        private Long viewCount;

        private Long likeCount;

        private Boolean checkLike;

    }
}
