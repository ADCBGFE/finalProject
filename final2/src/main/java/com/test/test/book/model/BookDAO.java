package com.test.test.book.model;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.sql.DataSource;

import com.test.test.rental.model.BookRentalDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class BookDAO {

	@Autowired
	DataSource ds;

	final int FAIL = 0;

	// 전체 책 목록
	public List<BookDTO> selectBookList() {
		Connection conn = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;

		List<BookDTO> bookDtoList = new ArrayList<BookDTO>();

		String sql = "select * from RANTALPJ.TB_BOOK_BASE ";

		try {
			conn = ds.getConnection();
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();

			while (rs.next()) {
				BookDTO bookDto = new BookDTO();
				bookDto.setBookId(rs.getString("BOOK_ID"));
				bookDto.setBookName(rs.getString("BOOK_NAME"));
				bookDto.setBookAt(rs.getString("BOOK_AT"));
				bookDto.setBookCatg(rs.getString("BOOK_CATG"));
				bookDto.setBookImgUrl(rs.getString("BOOK_IMAGE_URL"));
				bookDto.setBookPubl(rs.getString("BOOK_PUBL"));
				bookDto.setBookCt(rs.getString("BOOK_CT"));

				bookDtoList.add(bookDto);
			}
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		} finally {
			close(rs, pstmt, conn);
		}

		return bookDtoList;
	}

	// 책 상세정보
	public List<BookDTO> selectBook(BookDTO bookDto) {
		
		Connection conn = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		
		List<BookDTO> bookDtoList = new ArrayList<BookDTO>();

		String sql = "select * from RANTALPJ.TB_BOOK_BASE WHERE BOOK_ID = ? "; 

		try {
			conn = ds.getConnection();
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, bookDto.getBookId());
			rs = pstmt.executeQuery();
			
			while (rs.next()) {
				bookDto.setBookId(rs.getString("BOOK_ID"));
				bookDto.setBookName(rs.getString("BOOK_NAME"));
				bookDto.setBookAt(rs.getString("BOOK_AT"));
				bookDto.setBookCatg(rs.getString("BOOK_CATG"));
				bookDto.setBookImgUrl(rs.getString("BOOK_IMAGE_URL"));
				bookDto.setBookPubl(rs.getString("BOOK_PUBL"));
				bookDto.setBookCt(rs.getString("BOOK_CT"));
				bookDto.setBookRvNb(rs.getString("BOOK_RV_NB"));

				bookDtoList.add(bookDto);
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
			return null;
		} finally {
			close(pstmt, conn);
		}
		return bookDtoList;
	}

	// 대여
	public int insertRentalBook(BookRentalDTO bookRentalDto) {

		Connection conn = null;
		PreparedStatement pstmt = null;

		String sql = "insert into RANTALPJ.TR_RT_BASE (BOOK_ID, BOOK_NAME, MB_ID, REG_TIME, RT_WH) values (?, ?, ?, ?, 'Y') ";

		try {
			conn = ds.getConnection();
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, bookRentalDto.getBookId());
			pstmt.setString(2, bookRentalDto.getBookName());
			pstmt.setString(3, bookRentalDto.getMbId());
			pstmt.setString(4, bookRentalDto.getRegTime());

			return pstmt.executeUpdate();

		} catch (SQLException e) {
			e.printStackTrace();
			return FAIL;
		} finally {
			close(pstmt, conn);
		}

	}

	// 대여한 책 목록
	public List<BookRentalDTO> selectRentalBookList() {
		Connection conn = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;

		List<BookRentalDTO> BookRentalDtoList = new ArrayList<BookRentalDTO>();

		String sql = "select BOOK_NAME, MB_ID, RT_WH, RT_START_TIME from RANTALPJ.TR_RT_BASE ";

		try {
			conn = ds.getConnection();
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();

			while (rs.next()) {
				BookRentalDTO bookrentalDto = new BookRentalDTO();
				bookrentalDto.setBookName(rs.getString("BOOK_NAME"));
				bookrentalDto.setMbId(rs.getString("MB_ID"));
				bookrentalDto.setRtWh(rs.getString("RT_WH"));

				BookRentalDtoList.add(bookrentalDto);
			}
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		} finally {
			close(rs, pstmt, conn);
		}

		return BookRentalDtoList;
	}

	// 반납
	public int deleteRentalBook(BookRentalDTO bookRentalDto) {

		Connection conn = null;
		PreparedStatement pstmt = null;

		String sql = "DELETE FROM RANTALPJ.TR_RT_BASE WHERE BOOK_ID = ? ";

		try {
			conn = ds.getConnection();
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, bookRentalDto.getBookId());

			return pstmt.executeUpdate();

		} catch (SQLException e) {
			e.printStackTrace();
			return FAIL;
		} finally {
			close(pstmt, conn);
		}

	}

	private void close(AutoCloseable... acs) { 
		for (AutoCloseable ac : acs)
			try {
				if (ac != null)
					ac.close();
			} catch (Exception e) {
				e.printStackTrace();
			}
	}

}
