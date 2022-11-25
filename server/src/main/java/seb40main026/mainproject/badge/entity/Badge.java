package seb40main026.mainproject.badge.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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

    public Badge(Long badgeId , String badgeName){
        this.badgeId = badgeId;
        this.badgeName = badgeName;
    }

}
