package seb40main026.mainproject.image.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import seb40main026.mainproject.exception.BusinessException;
import seb40main026.mainproject.exception.ExceptionCode;
import seb40main026.mainproject.image.entity.Image;
import seb40main026.mainproject.image.repository.ImageRepository;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ImageService {

    //yml -> location
    @Value("${spring.servlet.multipart.location}")
    private String imageDir;

    private final ImageRepository imageRepository;

    //front-end 에서 들어온 이미지가 없다면 -> 예외 처리
    public Long saveImage(MultipartFile images) throws IOException {
        if (images.isEmpty()) {
            new BusinessException(ExceptionCode.EMPTY_IMAGE_FILE);
        }
        //original name 저장하기
        String origName = images.getOriginalFilename();
        //uuid(universally unique identifier) -> 고유성 보장 식별자 만들기
        String uuid = UUID.randomUUID().toString();
        //extension -> image file 확장자 부분만 가져옴
        String extension = origName.substring(origName.lastIndexOf("."));
        //uuid + extension -> 실제 로컬이나, nginx 서버에 저장되는 파일의 이름이 됨
        String savedName = uuid + extension;
        //imageDir 경로의 savedName 으로 파일이 저장됨 (/로 구별)
        String savedPath = imageDir + savedName;
        // image Entity 만들기  (builder 사용)
        Image file = Image.builder()
                .orgNm(origName)
                .savedNm(savedName)
                .savedPath(savedPath)
                .build();
        //transferTo -> imageDir 에 저장된 경로에 image file 저장

        images.transferTo(new File(savedPath));
        //DB -> image entity 정보 저장
        Image savedFile = imageRepository.save(file);

        return savedFile.getImageId();
    }
}


