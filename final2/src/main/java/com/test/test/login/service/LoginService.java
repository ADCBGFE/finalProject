package com.test.test.login.service;

import com.test.test.login.model.LoginRequest;
import com.test.test.login.model.MemberDAO;
import com.test.test.login.model.MemberDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


@Service
public class LoginService {
	@Autowired
	private MemberDAO memberDao;

	public ResponseEntity<MemberDTO> login(LoginRequest loginRequest) {
		System.out.println("id : " + loginRequest.getMbId());
		System.out.println("pwd : " + loginRequest.getMbPw());
		// 1. id, pwd 확인
		MemberDTO memberDto = memberDao.selectUser(loginRequest.getMbId());
		
		if (memberDto == null) {
			MemberDTO m = new MemberDTO(null, null);
			return ResponseEntity.ok(m);
		}
		else if (memberDto.getMbId().equals("khAdmin") && memberDto.getMbPw().equals("12345678")) {
			MemberDTO m = new MemberDTO("messi", memberDto.getMbId());
			return ResponseEntity.ok(m);
		}
		else {
			MemberDTO m = new MemberDTO(memberDto.getIdToken(), memberDto.getMbId());
			return ResponseEntity.ok(m);
		}
		

		
	}

}
