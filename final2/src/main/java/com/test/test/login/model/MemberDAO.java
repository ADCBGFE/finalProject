package com.test.test.login.model;

import java.sql.Connection; 
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class MemberDAO {
	
	@Autowired
	DataSource ds;
	
	final int FAIL = 0;
	
	Integer rand = (int)(Math.random() * 10000);
	
	// 사용자 정보를 TM_MB_BASE테이블에 저장하는 메서드
    public int insertUser(MemberDTO memberDto) {
        int rowCnt = FAIL;

        Connection conn = null;
        PreparedStatement pstmt = null;

        String sql = "insert into RANTALPJ.TM_MB_BASE (MB_ID, MB_PN, MB_EMAIL, MB_NAME, DOB_DATE, MB_PW, IDTOKEN) values (?, ?, ?, ?, ?, ?, ?) ";

        try {
            conn = ds.getConnection();
            pstmt = conn.prepareStatement(sql);
            pstmt.setString(1, memberDto.getMbId());
            pstmt.setString(2, memberDto.getMbPn());
            pstmt.setString(3, memberDto.getMbEmail());
            pstmt.setString(4, memberDto.getMbName());
            pstmt.setString(5, memberDto.getDobDate());
//            pstmt.setDate(5, new java.sql.Date(registerDto.getDobDate().getTime()));
            pstmt.setString(6, memberDto.getMbPw());
            pstmt.setString(7, rand.toString());

            return pstmt.executeUpdate(); //  insert, delete, update;
        } catch (SQLException e) {
            e.printStackTrace();
            return FAIL;
        } finally {
            close(pstmt, conn);  //     private void close(AutoCloseable... acs) {
        }
    }

    // db에 있는 사용자 정보를 가직고 로그인
    public MemberDTO selectUser(String mbId) {
    	MemberDTO memberDto = null;

        Connection conn = null;
        PreparedStatement pstmt = null;
        ResultSet rs = null;

        String sql = "select * from RANTALPJ.TM_MB_BASE where MB_ID = ? ";

        try {
            conn = ds.getConnection();
            pstmt = conn.prepareStatement(sql);
            pstmt.setString(1, mbId);

            rs = pstmt.executeQuery(); //  select

            if (rs.next()) {
            	memberDto = new MemberDTO();
            	memberDto.setMbId(rs.getString("MB_ID"));
            	memberDto.setMbPn(rs.getString("MB_PN"));
            	memberDto.setMbEmail(rs.getString("MB_EMAIL"));
            	memberDto.setMbName(rs.getString("MB_NAME"));
            	memberDto.setDobDate(rs.getString("DOB_DATE"));
            	memberDto.setMbPw(rs.getString("MB_PW"));
            	memberDto.setIdToken(rs.getString("IDTOKEN"));
       
            }
            System.out.println("1: " + memberDto);
        } catch (SQLException e) {
        	e.printStackTrace();
            System.out.println("2: " + memberDto);
            return null;
        } finally {
            close(rs, pstmt, conn);  //     private void close(AutoCloseable... acs) {
        }
        System.out.println("3: " + memberDto);
        return memberDto;
    }   
    
    private void close(AutoCloseable... acs) {	// 이걸 사용함으로써 매번 close try catch 안해도 됨.
        for(AutoCloseable ac :acs)
            try { if(ac!=null) ac.close(); } catch(Exception e) { e.printStackTrace(); }
    }
}
