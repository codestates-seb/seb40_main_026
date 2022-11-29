package seb40main026.mainproject.study.dto;

import lombok.Getter;
import lombok.Setter;

public class StudyDto {
    @Getter
    public static class Post {
        private String studyName;
        private Long price;
        private String recommendation; // 추천 대상
        private String contact; // 수업 문의
        private String place; // 장소
        private int recruitment;
        private int count;
        private String period;
        private String time;
        private String online;
    }

    @Getter
    @Setter
    public static class Patch {
        private Long studyId;
        private String studyName;
        private Long price;
        private String recommendation; // 추천 대상
        private String contact; // 수업 문의
        private String place; // 장소
        private Integer recruitment;
        private Integer count;
        private String period;
        private String time;
        private String online;
    }

    @Getter
    @Setter
    public static class Response {
        private Long studyId;
        private String studyName;
        private Long price;
        private String recommendation; // 추천 대상
        private String contact; // 수업 문의
        private String place; // 장소
        private Integer recruitment;
        private Integer count;
        private String period;
        private String time;
        private String online;
        private String imageUrl;
    }
}