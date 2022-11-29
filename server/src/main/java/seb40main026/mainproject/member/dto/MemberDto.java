package seb40main026.mainproject.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;
import seb40main026.mainproject.member.entity.Member;
import javax.validation.constraints.Email;
import javax.validation.constraints.Max;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.*;
import java.util.List;

public class MemberDto {

    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Post {
        @NotBlank(message = "이메일은 필수 입력 사항입니다.")
        @Email
        private String email;
        @NotBlank(message = "비밀번호는 필수 입력 사항입니다.")
        @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,12}$",
                message = "비밀번호는 영문자, 숫자, 특수문자가 반드시 하나 이상 포함되어야 하고 8자에서 20자 사이 입니다.")
        private String password;
        @NotBlank(message = "닉네임은 필수 입력 사항입니다.")
        @Pattern(regexp = "^(?=.*[A-Za-z0-9가-힣])[A-Za-z0-9가-힣]{2,12}$", message = "닉네임은 2자 이상 12자 이하 영어 숫자 또는 한글만 가능합니다.")
        private String nickname;
        private boolean teacher;
    }

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Patch {
        private long memberId;
        @Pattern(regexp = "^(?=.*[A-Za-z0-9가-힣])[A-Za-z0-9가-힣]{2,12}$", message = "닉네임은 2자 이상 12자 이하 영어 숫자 또는 한글만 가능합니다.")
        private String nickname;
        @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,12}$",
                message = "비밀번호는 영문자, 숫자, 특수문자가 반드시 하나 이상 포함되어야 하고 8자에서 20자 사이 입니다.")
        private String password;
        private String introduce;
        //private File profile_photo;
        private Member.MemberGrade memberGrade;
        private String badgeName;

        public void setMemberId(long memberId) {
            this.memberId = memberId;}
    }

    @Getter
    @AllArgsConstructor
    public static class Response {
        private long memberId;
        private String email;
        private String nickname;
        private boolean teacher;
        private String createdAt;
        private String modifiedAt;
        private Integer sticker;
        private String introduce;
        private List<String> haveBadgeList;
        private String currentBadge;
        private Member.MemberStatus memberStatus;
        private Member.MemberGrade memberGrade;
        private Long questionCount;
        private Long answerCount;
    }
}
