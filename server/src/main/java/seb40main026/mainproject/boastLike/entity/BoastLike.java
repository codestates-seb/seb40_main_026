package seb40main026.mainproject.boastLike.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class BoastLike {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long boastLikeId;

    @Column(nullable = false)
    private Long boastId;

    @Column(nullable = false)
    private Long memberId;

    @Column
    private Boolean checkLike = false;

    @Column
    private long likeCount;

    public static BoastLike of(Long boastId ,Long memberId){
        BoastLike boastLike = new BoastLike();
        boastLike.setBoastId(boastId);
        boastLike.setMemberId(memberId);
        return boastLike;
    }
}
