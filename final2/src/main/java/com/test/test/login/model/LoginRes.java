package com.test.test.login.model;

public class LoginRes {
	String idToken;

    public LoginRes (String idToken) {
        this.idToken = idToken;
    }
    
    public void setIdToken(String idToken) {
		this.idToken = idToken;
	}
	public String getIdToken() {
		return idToken;
	}
}
