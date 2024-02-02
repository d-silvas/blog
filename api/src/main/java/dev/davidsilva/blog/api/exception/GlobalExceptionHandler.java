package dev.davidsilva.blog.api.exception;

import dev.davidsilva.blog.api.dto.ApiErrorDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import java.util.Date;

@ControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ApiErrorDto> handleResourceNotFound(
            ResourceNotFoundException exception,
            WebRequest webRequest
    ) {
        ApiErrorDto apiErrorDto = new ApiErrorDto(new Date(), exception.getMessage(), webRequest.getDescription(false));
        return new ResponseEntity<>(apiErrorDto, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(PostContentNotFoundException.class)
    public ResponseEntity<ApiErrorDto> handlePostContentNotFound(
            PostContentNotFoundException exception,
            WebRequest webRequest
    ) {
        ApiErrorDto apiErrorDto = new ApiErrorDto(new Date(), exception.getMessage(), webRequest.getDescription(false));
        return new ResponseEntity<>(apiErrorDto, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ApiErrorDto> handleGenericException(
            Exception exception,
            WebRequest webRequest
    ) {
        ApiErrorDto apiErrorDto = new ApiErrorDto(new Date(), exception.getMessage(), webRequest.getDescription(false));
        return new ResponseEntity<>(apiErrorDto, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
