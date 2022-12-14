package seb40main026.mainproject.study.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import seb40main026.mainproject.member.entity.Member;

import javax.persistence.*;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
public class MemberStudy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberStudyId;

    @Column
    private Boolean registered = false;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "STUDY_ID")
    private Study study;
}
