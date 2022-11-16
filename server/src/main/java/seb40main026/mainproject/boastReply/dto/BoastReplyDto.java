package seb40main026.mainproject.boastReply.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

public class BoastReplyDto {

    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class post{
        @NotBlank
        private String content;
    }

    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class patch{
        private Long boastReplyId;
        @NotBlank
        private String content;

        public void setBoastReplyId(Long boastReplyId){
            this.boastReplyId = boastReplyId;
        }
    }

    @Getter @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class response{

        private Long boastReplyId;

        private String content;

        private LocalDateTime replyCreatedAt;

        private LocalDateTime replyModifiedAt;
    }
}
