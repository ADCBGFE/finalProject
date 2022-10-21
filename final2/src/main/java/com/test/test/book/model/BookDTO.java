package com.test.test.book.model;

import java.util.Objects;

public class BookDTO {
	private String bookId;
	private String bookName;
	private String bookAt;
	private String bookCatg;
	private String bookImgUrl;
	private String bookPubl;
	private String bookCt;
	private String bookRvNb;
		
public BookDTO() {}
	
	
	public BookDTO(String bookId, String bookName, String bookAt,
			String bookCatg, String bookImgUrl, String bookPubl, String bookCt
			, String bookRvNb) {
		this.bookId = bookId;
		this.bookName = bookName;
		this.bookAt = bookAt;
		this.bookCatg = bookCatg;
		this.bookImgUrl = bookImgUrl;
		this.bookPubl = bookPubl;
		this.bookCt = bookCt;
		this.bookRvNb = bookRvNb;
	}

	public String getBookId() {
		return bookId;
	}
	
	public void setBookId(String bookId) {
		this.bookId = bookId;
	}
	
	public String getBookName() {
		return bookName;
	}
	
	public void setBookName(String bookName) {
		this.bookName = bookName;
	}
	
	public String getBookAt() {
		return bookAt;
	}
	
	public void setBookAt(String bookAt) {
		this.bookAt = bookAt;
	}
	
	public String getBookCatg() {
		return bookCatg;
	}
	
	public void setBookCatg(String bookCatg) {
		this.bookCatg = bookCatg;
	}
	
	public String getBookImgUrl() {
		return bookImgUrl;
	}
	
	public void setBookImgUrl(String bookImgUrl) {
		this.bookImgUrl = bookImgUrl;
	}
	
	public String getBookPubl() {
		return bookPubl;
	}
	
	public void setBookPubl(String bookPubl) {
		this.bookPubl = bookPubl;
	}
	
	public String getBookCt() {
		return bookCt;
	}
	
	public void setBookCt(String bookCt) {
		this.bookCt = bookCt;
	}
	
	public String getBookRvNb() {
		return bookRvNb;
	}
	
	public void setBookRvNb(String bookRvNb) {
		this.bookRvNb = bookRvNb;
	}

	
	@Override
	public int hashCode() {
		return Objects.hash(bookAt, bookCatg, bookCt, bookId, bookImgUrl, bookName, bookPubl);
	}

	
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		BookDTO other = (BookDTO) obj;
		return Objects.equals(bookAt, other.bookAt) && Objects.equals(bookCatg, other.bookCatg)
				&& Objects.equals(bookCt, other.bookCt) && Objects.equals(bookId, other.bookId)
				&& Objects.equals(bookImgUrl, other.bookImgUrl) && Objects.equals(bookName, other.bookName)
				&& Objects.equals(bookPubl, other.bookPubl);
	}

	
	@Override
	public String toString() {
		return "BookDTO [bookId=" + bookId + ", bookName=" + bookName + ", bookAt=" + bookAt + ", bookCatg=" + bookCatg
				+ ", bookImgUrl=" + bookImgUrl + ", bookPubl=" + bookPubl + ", bookCt=" + bookCt + "]";
	}
	
	
}
