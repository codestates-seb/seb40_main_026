package seb40main026.mainproject.study.entity;

import lombok.Getter;
import lombok.Setter;
import seb40main026.mainproject.image.entity.Image;

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
    @OneToOne(cascade = CascadeType.REMOVE) @Setter
    @JoinColumn(name = "IMAGE_ID")
    private Image image;

    @Column
    private String imageUrl;

    // 가격
    @Column
    private Long price;

    @Column
    private String recommendation;

    @Column
    private String contact;

    @Column
    private String place;

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

    public void increaseCount() {
        if(this.count < this.recruitment) {
            this.count += 1;
        }
    }

    public void modifyImageUrl(String url) {
        this.imageUrl = url;
    }
}
