package com.test.test.comment.model;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.*;
import java.util.*;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class CommentDAO {
	@Autowired
	DataSource ds;
	
	final int FAIL = 0;
	
	public int insertComment(CommentDTO commentDto) {
        int rowCnt = FAIL;

        Connection conn = null;
        PreparedStatement pstmt = null;

        String sql = "insert into RANTALPJ.TB_BOOK_RV (REG_TIME, BOOK_ID, BOOK_RV_CTT) values (?, ?, ?) ";

        try {
            conn = ds.getConnection();
            pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, commentDto.getRgTime());
			pstmt.setString(2, commentDto.getBookId());
			pstmt.setString(3, commentDto.getContent());

            return pstmt.executeUpdate(); //  insert, delete, update;
        } catch (SQLException e) {
            e.printStackTrace();
            return FAIL;
        } finally {
            close(pstmt, conn);  //     private void close(AutoCloseable... acs) {
        }
    }
	
	public List<CommentDTO> getCommentList() {
		Connection conn = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;

		List<CommentDTO> commentDtoList = new ArrayList<CommentDTO>();

		String sql = "select * from RANTALPJ.TB_BOOK_RV "; // todo WHERE BOOK_CATG = ?

		try {
			conn = ds.getConnection();
			pstmt = conn.prepareStatement(sql);
			// todo pstmt.setString(1, book_catg); 카테고리를 추가한다고 했을떄
			rs = pstmt.executeQuery();

			while (rs.next()) {
				CommentDTO commentDto = new CommentDTO();
				commentDto.setBookId(rs.getString("BOOK_ID"));
				commentDto.setContent(rs.getString("BOOK_RV_CTT"));
				commentDto.setRgTime(rs.getString("REG_TIME"));

				commentDtoList.add(commentDto);
			}
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		} finally {
			close(rs, pstmt, conn); // private void close(AutoCloseable... acs) {
		}

		return commentDtoList;
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
