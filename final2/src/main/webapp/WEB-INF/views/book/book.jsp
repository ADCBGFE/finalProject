<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.sql.DriverManager"%>
<%@ page import="java.sql.Connection"%>
<%@ page import="java.sql.Statement"%>
<%@ page import="java.sql.ResultSet"%>
<%!// 변수 선언
	Connection conn = null;
	Statement stmt = null;
	ResultSet rs = null;
	String uid = "system";
	String pwd = "crazymoon1!";
	String url = "jdbc:oracle:thin:@localhost:1521/XEPDB1";
	String sql = "select BOOK_ID, BOOK_NAME, BOOK_AT, BOOK_CATG, BOOK_IMAGE_URL, BOOK_PUBL, BOOK_CT from RANTALPJ.TB_BOOK_BASE ";%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>JDBC를 이용한 데이터베이스 테이블 만들기</title>
</head>
<body>
	<%
		try {
		// 데이터베이스를 접속하기 위한 드라이버 SW 로드
		Class.forName("oracle.jdbc.driver.OracleDriver");
		// 데이터베이스에 연결하는 작업 수행
		conn = DriverManager.getConnection(url, uid, pwd);
		// 쿼리를 생성gkf 객체 생성
		stmt = conn.createStatement();
		// 쿼리 생성
		rs = stmt.executeQuery(sql);
	%>
	<form action="<c:url value="book/Rental"/>" >
		<table border="1">
			<tr>
				<td>책번호</td>
				<td>책이름</td>
				<td>지은이</td>
				<td>카테고리</td>
				<td>이미지URL</td>
				<td>출판사</td>
				<td>도서정보</td>
				<td>대여</td>
				<td>반납</td>
			</tr>
			<%
				while (rs.next()) {
			%>
			<tr>
				<td><%=rs.getString("BOOK_ID")%></td>
				<td><%=rs.getString("BOOK_NAME")%></td>
				<td><%=rs.getString("BOOK_AT")%></td>
				<td><%=rs.getString("BOOK_CATG")%></td>
				<td><%=rs.getString("BOOK_IMAGE_URL") %></td>
				<td><%=rs.getString("BOOK_PUBL") %></td>
				<td><%=rs.getString("BOOK_CT") %></td>
				<td>
					<button>대여</button>
				</td>
			</tr>
		<%
			}
		} catch (Exception e) {
		e.printStackTrace();
		} finally {
		try {
		if (rs != null) {
			rs.close();
		}
		if (stmt != null) {
			stmt.close();
		}
		if (conn != null) {
			conn.close();
		}
		} catch (Exception e) {
		e.printStackTrace();
		}
		}
		%>
		</table>
	</form>
</body>
</html>