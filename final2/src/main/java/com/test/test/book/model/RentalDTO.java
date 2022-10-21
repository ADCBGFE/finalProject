package com.test.test.book.model;

import java.util.Date;

public class RentalDTO {
	private String bookId;
	private String mbId;
	private String rtWh;
	private Date rtStartTime;
	private Date rtEndTime;
	
	public String getBookId() {
		return bookId;
	}
	public void setBookId(String bookId) {
		this.bookId = bookId;
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
	
	
}
