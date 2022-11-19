package seb40main026.mainproject.exception;

import lombok.Getter;
public enum ExceptionCode {

    //주어진 상황에 맞게 enum 을 추가해  BusinessException을 사용하면 됩니다.
    BOAST_NOT_FOUND(404,"Boast Not Found"),
    BOAST_REPLY_NOT_FOUND(404, "Boast Reply Not Found"),
    EMPTY_IMAGE_FILE(404,"Image file does not exist"),
    BADGE_NOT_FOUND(404,"Badge not Found");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int status , String message){
        this.status = status;
        this.message = message;
    }
}
