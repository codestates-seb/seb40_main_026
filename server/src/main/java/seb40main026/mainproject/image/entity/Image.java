package seb40main026.mainproject.image.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity @Getter
@NoArgsConstructor
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long imageId;

    //Image file , Original Name
    @Column
    private String orgNm;

    //Image file, UUID + .jpg
    @Column
    private String savedNm;

    //Image file , saved path (Nginx)
    @Column
    private String savedPath;

    @Builder
    public Image(Long imageId , String orgNm , String savedNm , String savedPath){
        this.imageId = imageId;
        this.orgNm = orgNm;
        this.savedNm = savedNm;
        this.savedPath = savedPath;
    }
}
