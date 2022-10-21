package com.test.test.login.service;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

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
		
//		if (isExistsUser(memberDto, loginRequest.getMbPw())) {
//			MemberDTO m = new MemberDTO(memberDto.getIdToken());
//			return ResponseEntity.ok(m);
//		}
//		else {
//			MemberDTO m = new MemberDTO(null);
//			return ResponseEntity.ok(m);
//		}
		// 오류나면 어떤 요청이있는데 오류가 났는지
//		throw new IllegalArgumentException("유저없음!" + loginRequest);
		
	}

	private boolean isExistsUser(MemberDTO memberDto, String mbPw) {
		if (memberDto == null) {
			return false; // 유저가 null이면 없는거니까
		}

		if (!memberDto.getMbPw().equals(mbPw)) {
			return false;
		}

		return true;
	}
}
