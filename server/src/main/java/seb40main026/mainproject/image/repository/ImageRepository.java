package seb40main026.mainproject.image.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import seb40main026.mainproject.image.entity.Image;

public interface ImageRepository extends JpaRepository<Image , Long> {
}
