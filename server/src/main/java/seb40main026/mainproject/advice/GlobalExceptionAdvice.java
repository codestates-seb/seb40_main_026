package seb40main026.mainproject.advice;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import seb40main026.mainproject.exception.BusinessException;
import seb40main026.mainproject.response.ErrorResponse;

@RestControllerAdvice
public class GlobalExceptionAdvice {

    @ExceptionHandler
    public ResponseEntity handleException(BusinessException e){
        final ErrorResponse response = ErrorResponse.of(e.getExceptionCode());
        return ResponseEntity.status(e.getExceptionCode().getStatus()).body(response);
    }
}
