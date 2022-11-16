package seb40main026.mainproject.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import seb40main026.mainproject.member.entity.Member;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

public class MemberDto {

    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Post {
        @NotBlank(message = "이메일은 필수 입력 사항입니다.")
        @Email
        private String email;
        @NotBlank(message = "비밀번호는 필수 입력 사항입니다.")
        private String password;
        private String nickname;
    }

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Patch {
        private long memberId;

        private String nickname;
        private String password;
        //private File profile_photo;
        private Member.MemberStatus memberStatus;

        public void setMemberId(long memberId) {
            this.memberId = memberId;}
    }

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Response {
        private long memberId;
        private String email;
        private String name;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
        private Long sticker;
        private Member.MemberStatus memberStatus;
    }
}
