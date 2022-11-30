package seb40main026.mainproject.image.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import seb40main026.mainproject.image.entity.Image;
import seb40main026.mainproject.image.service.ImageService;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/images")
public class imageController {
    private final ImageService imageService;

    @PostMapping("/upload")
    public String uploadFile(@RequestParam("image")MultipartFile image ,
                             String where,
                             Long id) throws IOException {
        imageService.saveImage(image,where,id);
        return "The file has been uploaded." ;
    }

    @GetMapping("/download")
    public ResponseEntity downloadFile(@RequestParam("image") Image image) throws IOException{
        HttpHeaders header = new HttpHeaders();
        Path imagePath = Path.of(image.getSavedPath());
        Resource resource = new FileSystemResource(imagePath);
        header.add("Content-type", Files.probeContentType(imagePath));
        return new ResponseEntity(resource,header, HttpStatus.OK);
    }
}
