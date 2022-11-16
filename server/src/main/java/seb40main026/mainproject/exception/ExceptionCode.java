package seb40main026.mainproject.exception;

import lombok.Getter;
public enum ExceptionCode {

    //주어진 상황에 맞게 enum 을 추가해  BusinessException을 사용하면 됩니다.
    BOAST_NOT_FOUND(404,"Boast Not Found"),
    MEMBER_NOT_FOUND(404, "Member Not Found"),
    MEMBER_EXISTS(409, "Member exists");
    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int status , String message){
        this.status = status;
        this.message = message;
    }
}
