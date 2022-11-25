package seb40main026.mainproject.study.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import seb40main026.mainproject.study.entity.Study;

public interface StudyRepository extends JpaRepository<Study, Long> {
}
