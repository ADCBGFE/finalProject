package com.test.test.rental.model;

import java.util.Date;
import java.util.List;
import java.util.Objects;

public class BookRentalDTO {
	private String bookId;
	private String bookName;
	private String mbId;
	private String rtWh;
	private String rtDdlEts;
	private String regTime;
	private Date rtStartTime;
	private Date rtEndTime;
	
	public BookRentalDTO() {}
	
	public BookRentalDTO(String bookId, String bookName, String mbId, String rtWh, String rtDdlEts, String regTime, Date rtStartTime, Date rtEndTime) {
		this.bookId = bookId;
		this.bookName = bookName;
		this.mbId = mbId;
		this.rtWh = rtWh;
		this.rtDdlEts = rtDdlEts;
		this.regTime = regTime;
		this.rtStartTime = rtStartTime;
		this.rtEndTime = rtEndTime;
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
	
	public String getMbId() {
		return mbId;
	}
	
	public void setMbId(String mbId) {
		this.mbId = mbId;
	}
	
	public String getRtWh() {
		return rtWh;
	}
	
	public void setRtWh(String rtWh) {
		this.rtWh = rtWh;
	}
	
	public String getRtDdlEts() {
		return rtDdlEts;
	}
	
	public void setRtDdlEts(String rtDdlEts) {
		this.rtDdlEts = rtDdlEts;
	}

	public String getRegTime() {
		return regTime;
	}

	public void setRegTime(String regTime) {
		this.regTime = regTime;
	}
	
	public Date getRtStartTime() {
		return rtStartTime;
	}
	
	public void setRtStartTime(Date rtStartTime) {
		this.rtStartTime = rtStartTime;
	}
	
	public Date getRtEndTime() {
		return rtEndTime;
	}
	
	public void setRtEndTime(Date rtEndTime) {
		this.rtEndTime = rtEndTime;
	}

	
	@Override
	public int hashCode() {
		return Objects.hash(bookId, mbId, rtDdlEts, rtEndTime, rtStartTime, rtWh);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		BookRentalDTO other = (BookRentalDTO) obj;
		return Objects.equals(bookId, other.bookId) && Objects.equals(mbId, other.mbId)
				&& Objects.equals(rtDdlEts, other.rtDdlEts) && Objects.equals(rtEndTime, other.rtEndTime)
				&& Objects.equals(rtStartTime, other.rtStartTime) && Objects.equals(rtWh, other.rtWh);
	}

	
	@Override
	public String toString() {
		return "BookRentalDTO [bookId=" + bookId + ", mbId=" + mbId + ", rtWh=" + rtWh + ", rtDdlEts=" + rtDdlEts
				+ ", rtStartTime=" + rtStartTime + ", rtEndTime=" + rtEndTime + "]";
	}

}
