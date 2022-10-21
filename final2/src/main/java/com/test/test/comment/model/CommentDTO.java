package com.test.test.comment.model;

import java.util.Date;
import java.util.Objects;

public class CommentDTO {
	
	private String content;
	private String bookId;
	private String rgTime;

	public CommentDTO() {}
	
	
	public CommentDTO(String content, String bookId, String rgTime) {
		this.content = content;
		this.bookId = bookId;
		this.rgTime = rgTime;
	}

	public String getContent() {
		return content;
	}
	
	public void setContent(String content) {
		this.content = content;
	}
	
	public String getBookId() {
		return bookId;
	}
	
	public void setBookId(String bookId) {
		this.bookId = bookId;
	}

	public String getRgTime() {
		return rgTime;
	}

	public void setRgTime(String rgTime) {
		this.rgTime = rgTime;
	}

	
	@Override
	public int hashCode() {
		return Objects.hash(content,bookId);
	}

	
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		CommentDTO other = (CommentDTO) obj;
		return 	Objects.equals(content, other.content) && Objects.equals(bookId, other.bookId);
	}

	
	@Override
	public String toString() {
		return "CommentDTO [content=" + content + ", bookId=" + bookId + "]";
	}
	
}
