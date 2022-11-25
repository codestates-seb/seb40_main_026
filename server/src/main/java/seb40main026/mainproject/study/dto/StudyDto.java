package seb40main026.mainproject.study.dto;

import lombok.Getter;
import lombok.Setter;

public class StudyDto {
    @Getter
    public static class Post {
        private String studyName;
        private String content;
        private Long price;
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
        private String content;
        private Long price;
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
        private String content;
        private Long price;
        private Integer recruitment;
        private Integer count;
        private String period;
        private String time;
        private String online;
    }
}