package seb40main026.mainproject.boast.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor
@Getter @Setter
@Entity
public class Boast {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long boastId;

    @Column(nullable = false, length = 30)
    private String title;

    @Column(nullable = false, length = 500)
    private String content;

    @Column
    @CreatedDate
    private LocalDateTime boardCreatedAt;

    @Column
    @LastModifiedDate
    private LocalDateTime boardModifiedAt;

    @Column(nullable = false)
    private long view_count = 0;

    @Column(nullable = false)
    private long like_count;

//    @Column(nullable = false)
//    private Long report_count;

}
