package com.test.test.comment.service;

import java.util.List;

import com.test.test.comment.model.CommentDAO;
import com.test.test.comment.model.CommentDTO;
import com.test.test.comment.model.CommentRes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


@Service
public class CommentService {
	
	@Autowired
	private CommentDAO commentDao;
	
	// 댓글 목록
    public List<CommentDTO> getList() {
    	return commentDao.getCommentList();
    }
    // 댓글 입력
    public ResponseEntity<CommentRes> create(CommentDTO vo) {
    	commentDao.insertComment(vo);
    	System.out.println("프론트에서 작성된 댓글: " + vo.getContent());
		System.out.println("index: " + vo.getRgTime() + ", bookId: " + vo.getBookId());
    	
    	CommentRes r = new CommentRes("댓글이 작성되었습니다.");
    	return ResponseEntity.ok(r);
    }
//    // 댓글 수정
//    public void update(CommentDTO vo);
//    // 댓글 삭제
//    public void delete(Integer rno);
}
