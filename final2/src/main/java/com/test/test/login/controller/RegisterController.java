package com.test.test.login.controller;

import java.net.URLEncoder;
import java.text.SimpleDateFormat;
import java.util.Date;


import com.test.test.login.model.MemberDTO;
import com.test.test.login.model.RegiRes;
import com.test.test.login.service.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.beans.propertyeditors.StringArrayPropertyEditor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@RestController								// 프로그램 등록
@RequestMapping("/register")			// 이러면 get post mapping 에서 register빼도 됨. 여기서 빠져도 된다는거지 브라우저는 아님!!
public class RegisterController {	
	
	@Autowired
	RegisterService registerService;

	@PostMapping(value = "/save", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<RegiRes> save(@RequestBody MemberDTO memberDto) {
		return registerService.save(memberDto);
 	}
		
}
