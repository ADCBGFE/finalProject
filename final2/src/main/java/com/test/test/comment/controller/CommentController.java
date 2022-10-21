package com.test.test.comment.controller;

import java.util.*;

import com.test.test.comment.model.CommentDTO;
import com.test.test.comment.model.CommentRes;
import com.test.test.comment.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/comment")
public class CommentController {
	@Autowired
	CommentService commentService;
	
	@GetMapping("/list")
	public List<CommentDTO> getCommentList() {
		return commentService.getList();
	}
	
	@PostMapping(value = "/comment", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody // postman에서 post로 보낼때 body로 담아보낼때 씀
	public ResponseEntity<CommentRes> saveComment(@RequestBody CommentDTO CommentDto) {
		return commentService.create(CommentDto);
	}	
}
