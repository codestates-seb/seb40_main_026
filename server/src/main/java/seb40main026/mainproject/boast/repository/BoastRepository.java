package seb40main026.mainproject.boast.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import seb40main026.mainproject.boast.entity.Boast;
import seb40main026.mainproject.member.entity.Member;

import java.util.List;

public interface BoastRepository extends JpaRepository<Boast,Long> {
    //By 이후 Containing을 붙여주면 Like 검색이 가능해짐 = [%keyword%]
    Page<Boast> findByTitleContaining(String keyword, Pageable pageable);
    Long countByMember(Member member);

}
