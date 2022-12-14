package seb40main026.mainproject.guestBook.entity;

import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import seb40main026.mainproject.member.entity.Member;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Entity
@EntityListeners(AuditingEntityListener.class)
public class GuestBook {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long guestBookId;

    @Column(nullable = false)
    private String content;

    @Column(nullable = false)
    private Long writerId; // 작성자

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @Column(name = "created_at", updatable = false)
    @CreatedDate
    private String createdAt;

    @Column(name = "last_modified_at")
    @LastModifiedDate
    private String modifiedAt;

    @PrePersist
    public void onPrePersist(){
        this.createdAt = LocalDate.now().format(DateTimeFormatter.ofPattern("yy-MM-dd"));
        this.modifiedAt = LocalDate.now().format(DateTimeFormatter.ofPattern("yy-MM-dd"));
    }

    @PreUpdate
    public void onPreUpdate(){
        this.modifiedAt = LocalDate.now().format(DateTimeFormatter.ofPattern("yy-MM-dd"));
    }

    public void updateWriter(Long writerId) {
        if(member != null) this.writerId = writerId;
    }

    public void updateMember(Member member) {
        if(member != null) this.member = member;
    }

    public void updateContent(String content) {
        this.content = content;
    }
}
