package seb40main026.mainproject.response;

import org.springframework.http.HttpStatus;
import seb40main026.mainproject.exception.ExceptionCode;

import javax.servlet.http.HttpServletRequest;

public class ErrorResponse {

    private int status;
    private String message;

    private ErrorResponse(int status , String message){
        this.status = status;
        this.message = message;
    }

    public static ErrorResponse of(ExceptionCode exceptionCode) {
        return new ErrorResponse(exceptionCode.getStatus(), exceptionCode.getMessage());
    }

    public static ErrorResponse of(HttpStatus httpStatus){
        return new ErrorResponse(httpStatus.value(), httpStatus.getReasonPhrase());
    }
}
