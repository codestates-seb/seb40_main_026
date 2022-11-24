package seb40main026.mainproject.badge.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import seb40main026.mainproject.badge.entity.Badge;

import java.util.Optional;

public interface BadgeRepository extends JpaRepository<Badge,Long> {
    Optional<Badge> findByBadgeName(String badgeName);
}
