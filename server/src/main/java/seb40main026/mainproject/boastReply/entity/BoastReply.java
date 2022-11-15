package seb40main026.mainproject.boastReply.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import seb40main026.mainproject.boast.entity.Boast;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class BoastReply {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long boastReplyId;

    @Column(nullable = false)
    private String content;

    @Column
    @CreatedDate
    private LocalDateTime replyCreatedAt;

    @Column
    @LastModifiedDate
    private LocalDateTime replyModifiedAt;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "boast_id")
    @JsonBackReference
    private Boast boast;
}
