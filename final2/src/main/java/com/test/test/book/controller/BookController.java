package com.test.test.book.controller;

import java.util.List;

import com.test.test.book.model.BookDTO;
import com.test.test.book.model.RentalRes;
import com.test.test.book.service.BookService;
import com.test.test.rental.model.BookRentalDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/book")
public class BookController {

	@Autowired
	BookService bookService;

	// 전체 책 목록	http://localhost:8080/web/book/list
	@GetMapping("/list")
	public List<BookDTO> getBookList() {
		return bookService.getBookList();
	}
	
	// 책 상세정보		http://localhost:8080/web/book/book or book/book?bookId=?
	@GetMapping("/book")
//	@PostMapping("/book")
	public List<BookDTO> getBook(BookDTO bookDto) {	// Post일경우 @RequestBody 를 BookDTO앞에 붙임
		return bookService.getBook(bookDto);
	}

	// 대여	http://localhost:8080/web/book/rental
	@PostMapping("/rental")
	public ResponseEntity<RentalRes> rentalBook(@RequestBody BookRentalDTO bookRentalDto) {
		System.out.println("bookId: " + bookRentalDto);
		return bookService.rentalBook(bookRentalDto);
	}	
		
	// 대여한 책 목록	http://localhost:8080/web/book/rentalList
	@GetMapping("/rentalList")
	public List<BookRentalDTO> getBookRentalList() {
		return bookService.getBookRentalList();
	}
	
	// 반납	http://localhost:8080/web/book/return
	@PostMapping("/return")
	public ResponseEntity<RentalRes> deleteRentalBook(@RequestBody BookRentalDTO bookRentalDto) {
		return bookService.deleteRentalBook(bookRentalDto);
	}	
}
