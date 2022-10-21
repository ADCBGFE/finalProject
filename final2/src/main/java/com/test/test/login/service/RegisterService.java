package com.test.test.login.service;


import com.test.test.login.model.MemberDAO;
import com.test.test.login.model.MemberDTO;
import com.test.test.login.model.RegiRes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;


@Service
public class RegisterService {
	@Autowired
	private MemberDAO memberDao;

	public ResponseEntity<RegiRes> save(@RequestBody MemberDTO memberDto){
		System.out.println("memberDto=" + memberDto);

		memberDao.insertUser(memberDto);

		RegiRes r = new RegiRes("회원가입에 성공하셨습니다.");
		return ResponseEntity.ok(r);
	}

}
