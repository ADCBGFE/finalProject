package com.test.test.book.service;

import java.util.List;

import com.test.test.book.model.BookDAO;
import com.test.test.book.model.BookDTO;
import com.test.test.book.model.RentalRes;
import com.test.test.rental.model.BookRentalDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


@Service
public class BookService {
	@Autowired
	private BookDAO bookDao;
	
	// 전체 책 목록
	public List<BookDTO> getBookList() {
		return bookDao.selectBookList();
	}
	
	// 책 상세정보
	public List<BookDTO> getBook(BookDTO bookDto) {
		return bookDao.selectBook(bookDto);
	}
	
	// 대여
	public ResponseEntity<RentalRes> rentalBook(BookRentalDTO bookRentalDto) {

		bookDao.insertRentalBook(bookRentalDto);
		
		RentalRes r = new RentalRes("대여 완료");
		return ResponseEntity.ok(r);
	}
	
	// 대여한 책 목록
	public List<BookRentalDTO> getBookRentalList() {
		return bookDao.selectRentalBookList();
	}
	
	// 반납
	public ResponseEntity<RentalRes> deleteRentalBook(BookRentalDTO bookRentalDto) {

		bookDao.deleteRentalBook(bookRentalDto);

		RentalRes r = new RentalRes("반납 완료");
		return ResponseEntity.ok(r);
	}
}
