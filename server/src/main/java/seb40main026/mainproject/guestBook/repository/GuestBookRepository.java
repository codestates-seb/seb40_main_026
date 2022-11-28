package seb40main026.mainproject.guestBook.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import seb40main026.mainproject.guestBook.entity.GuestBook;
import seb40main026.mainproject.member.entity.Member;

import java.util.List;

public interface GuestBookRepository extends JpaRepository<GuestBook, Long> {
    List<GuestBook> findByMember(Member member);
}
