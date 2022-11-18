package seb40main026.mainproject.image.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import seb40main026.mainproject.image.service.ImageService;

import java.io.IOException;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/images")
public class imageController {
    private final ImageService imageService;

    @PostMapping("/upload")
    public String uploadFile(@RequestParam("image")List<MultipartFile> images) throws IOException {
//      imageService.saveImage(image);

        for (MultipartFile multipartFile : images) {
            imageService.saveImage(multipartFile);
        }
        return "The file has been uploaded." ;
    }
}
