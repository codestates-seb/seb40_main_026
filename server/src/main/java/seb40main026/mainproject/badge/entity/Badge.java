package seb40main026.mainproject.badge.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import seb40main026.mainproject.member.entity.Member;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Entity
public class Badge {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long badgeId;

    @Column
    private String badgeName;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MEMBER_ID")
    @JsonBackReference
    private Member member;

    public Badge(Long badgeId , String badgeName){
        this.badgeId = badgeId;
        this.badgeName = badgeName;
    }

}
