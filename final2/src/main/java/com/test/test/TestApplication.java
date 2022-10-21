package com.test.test;

import com.test.test.book.controller.BookController;
import com.test.test.comment.controller.CommentController;
import com.test.test.login.controller.LoginController;
import com.test.test.login.controller.RegisterController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@SpringBootApplication
public class TestApplication {

	public static void main(String[] args) {
		SpringApplication.run(TestApplication.class, args);
	}
//		BookController b = new BookController();
//		CommentController c = new CommentController();
//		LoginController l = new LoginController();
//		RegisterController r = new RegisterController();
}
