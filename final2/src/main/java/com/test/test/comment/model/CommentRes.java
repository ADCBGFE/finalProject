package com.test.test.comment.model;

public class CommentRes {
	String message;

    public CommentRes (String message) {
        this.message = message;
    }
    
    public void setMessage(String message) {
		this.message = message;
	}
	public String getMessage() {
		return message;
	}
}
