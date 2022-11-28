package seb40main026.mainproject.study.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class Study {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long studyId;

    // 스터디 이름
    @Column(nullable = false)
    private String studyName;

    // 이미지 파일

    // 소개
    @Column(nullable = false)
    private String content;

    // 가격
    @Column
    private Long price;

    // 정원
    @Column(nullable = false)
    private Integer recruitment;

    // 신청한 인원 수
    @Column
    private Integer count = 0;

    // 기간
    @Column
    private String period;

    @Column // 시간
    private String time;

    @Column // 온라인 여부
    private String online;
}
