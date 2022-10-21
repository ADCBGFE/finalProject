package com.test.test.login.model;

import java.util.Objects;


public class MemberDTO {
	private String mbId;
	private String mbPw;
	private String mbPn;
	private String mbEmail;
	private String mbName;
	private String dobDate;
	private String idToken;
	
	public MemberDTO() {}
	public MemberDTO(String idToken, String mbId) {
		this.idToken = idToken;
		this.mbId = mbId;
	}
	
	public String getMbId() {
		return mbId;
	}
	public void setMbId(String mbId) {
		this.mbId = mbId;
	}
	public String getMbPw() {
		return mbPw;
	}
	public void setMbPw(String mbPw) {
		this.mbPw = mbPw;
	}
	public String getMbPn() {
		return mbPn;
	}
	public void setMbPn(String mbPn) {
		this.mbPn = mbPn;
	}
	public String getMbEmail() {
		return mbEmail;
	}
	public void setMbEmail(String mbEmail) {
		this.mbEmail = mbEmail;
	}
	public String getMbName() {
		return mbName;
	}
	public void setMbName(String mbName) {
		this.mbName = mbName;
	}
	public String getDobDate() {
		return dobDate;
	}
	public void setDobDate(String dobDate) {
		this.dobDate = dobDate;
	}
	public String getIdToken() {
		return idToken;
	}
	public void setIdToken(String idToken) {
		this.idToken = idToken;
	}
	@Override
	public String toString() {
		return "MemberDTO [mbId=" + mbId + ", mbPw=" + mbPw + ", mbPn=" + mbPn + ", mbEmail=" + mbEmail + ", mbName="
				+ mbName + ", dobDate=" + dobDate + ", idToken=" + idToken + "]";
	}
	
}