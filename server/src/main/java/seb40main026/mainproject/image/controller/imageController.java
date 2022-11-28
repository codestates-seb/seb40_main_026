package seb40main026.mainproject.image.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import seb40main026.mainproject.image.service.ImageService;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RequiredArgsConstructor
@RestController
@RequestMapping("/images")
public class imageController {
    private final ImageService imageService;

    @PostMapping("/upload")
    public Long uploadFile(@RequestParam("image") MultipartFile image) throws IOException {
        return imageService.saveImage(image);
    }

//    @GetMapping("/display")
//    public ResponseEntity getFile(@RequestParam("fileNum") Long fileId) throws IOException {
//        String savedPath = imageService.getImage(fileId);
//        Resource resource = new FileSystemResource(savedPath);
//
//        if(!resource.exists()) return new ResponseEntity(HttpStatus.NOT_FOUND);
//
//        HttpHeaders headers = new HttpHeaders();
//        Path filePath = Paths.get(savedPath);
//        headers.add("Content-Type", Files.probeContentType(filePath));
//        return new ResponseEntity(resource, headers, HttpStatus.OK);
//    }
}
