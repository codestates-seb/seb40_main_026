package seb40main026.mainproject.badge.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import seb40main026.mainproject.badge.service.BadgeService;

import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/badges")
@RequiredArgsConstructor
public class BadgeController {
    private final BadgeService badgeService;

    @PatchMapping("/change")
    public ResponseEntity changeBadge(@RequestParam @Positive Long memberId,
                                      @RequestParam String badgeName){
        badgeService.setCurrentBadge(memberId , badgeName);
        return new ResponseEntity<>(HttpStatus.OK) ;
    }

}
