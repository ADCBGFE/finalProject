package com.test.test.login.controller;

import java.net.URLEncoder;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.test.test.login.model.LoginRequest;
import com.test.test.login.model.MemberDTO;
import com.test.test.login.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/login")
public class LoginController {

	@Autowired
	private LoginService loginService;

	@PostMapping(value = "/login", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody // postman에서 post로 보낼때 body로 담아보낼때 씀
	public ResponseEntity<MemberDTO> Login(@RequestBody LoginRequest loginRequest) {// 바디가 {} 로 하나로 받으니까 객체별로 보낼수 없으니 하나로 묶어논 클래스 {
//		if (loginRequest.getMbId().equals("test01") && loginRequest.getMbPw().equals("12345678")) {
//			LoginRes res = new LoginRes("messi");
//			return ResponseEntity.ok(res);
//		}
//		else {
//			LoginRes res = new LoginRes("1234");
//			return ResponseEntity.ok(res);
//		}
		return loginService.login(loginRequest);
	}

}
