package seb40main026.mainproject.File;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import seb40main026.mainproject.File.File;
import seb40main026.mainproject.File.FileRepository;

@Service
@RequiredArgsConstructor
public class FileService {
    private final FileRepository fileRepository;

    public void save(File file) {
        fileRepository.save(file);
    }

    public void delete(File file) {
        fileRepository.delete(file);
    }
}
