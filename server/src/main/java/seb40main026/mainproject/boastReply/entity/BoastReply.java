package seb40main026.mainproject.boastReply.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.format.annotation.DateTimeFormat;
import seb40main026.mainproject.boast.entity.Boast;
import seb40main026.mainproject.member.entity.Member;
import seb40main026.mainproject.member.service.MemberServiceImpl;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Entity
@Getter @Setter
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class BoastReply {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long boastReplyId;

    @Column(nullable = false)
    private String content;

    @Column
    @CreatedDate
    @DateTimeFormat(pattern = "yy-MM-dd")
    private String replyCreatedAt;

    @Column
    @LastModifiedDate
    @DateTimeFormat(pattern = "yy-MM-dd")
    private String replyModifiedAt;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "boast_id")
    @JsonBackReference
    private Boast boast;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MEMBER_ID")
    @JsonBackReference
    private Member member;

    @Column
    private String nickName;

    @PrePersist
    public void onPrePersist(){
        this.replyCreatedAt = LocalDate.now().format(DateTimeFormatter.ofPattern("yy-MM-dd"));
        this.replyModifiedAt = LocalDate.now().format(DateTimeFormatter.ofPattern("yy-MM-dd"));
    }

    @PreUpdate
    public void onPreUpdate(){
        this.replyModifiedAt = LocalDate.now().format(DateTimeFormatter.ofPattern("yy-MM-dd"));
    }

}
