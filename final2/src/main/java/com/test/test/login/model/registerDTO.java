package com.test.test.login.model;

import java.util.Objects;

public class registerDTO {
	private String MB_ID;
	private String MB_PN;
	private String MB_EMAIL;
	private String MB_NAME;
	private String DOB_DATE;
	private String MB_PW;
	
	public registerDTO() {}

	public registerDTO(String mB_ID, String mB_PN, String mB_EMAIL, String mB_NAME, String dOB_DATE, String mB_PW) {
		super();
		this.MB_ID = mB_ID;
		this.MB_PN = mB_PN;
		this.MB_EMAIL = mB_EMAIL;
		this.MB_NAME = mB_NAME;
		this.DOB_DATE = dOB_DATE;
		this.MB_PW = mB_PW;
	}

	public String getMB_ID() {
		return MB_ID;
	}

	public void setMB_ID(String mB_ID) {
		this.MB_ID = mB_ID;
	}

	public String getMB_PN() {
		return MB_PN;
	}

	public void setMB_PN(String mB_PN) {
		this.MB_PN = mB_PN;
	}

	public String getMB_EMAIL() {
		return MB_EMAIL;
	}

	public void setMB_EMAIL(String mB_EMAIL) {
		this.MB_EMAIL = mB_EMAIL;
	}

	public String getMB_NAME() {
		return MB_NAME;
	}

	public void setMB_NAME(String mB_NAME) {
		this.MB_NAME = mB_NAME;
	}

	public String getDOB_DATE() {
		return DOB_DATE;
	}

	public void setDOB_DATE(String dOB_DATE) {
		this.DOB_DATE = dOB_DATE;
	}

	public String getMB_PW() {
		return MB_PW;
	}

	public void setMB_PW(String mB_PW) {
		this.MB_PW = mB_PW;
	}

	@Override
	public int hashCode() {
		return Objects.hash(DOB_DATE, MB_EMAIL, MB_ID, MB_NAME, MB_PN, MB_PW);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		registerDTO other = (registerDTO) obj;
		return Objects.equals(DOB_DATE, other.DOB_DATE) && Objects.equals(MB_EMAIL, other.MB_EMAIL)
				&& Objects.equals(MB_ID, other.MB_ID) && Objects.equals(MB_NAME, other.MB_NAME)
				&& Objects.equals(MB_PN, other.MB_PN) && Objects.equals(MB_PW, other.MB_PW);
	}

	@Override
	public String toString() {
		return "registerDTO [MB_ID=" + MB_ID + ", MB_PN=" + MB_PN + ", MB_EMAIL=" + MB_EMAIL + ", MB_NAME=" + MB_NAME
				+ ", DOB_DATE=" + DOB_DATE + ", MB_PW=" + MB_PW + "]";
	}
	
	
	
}
