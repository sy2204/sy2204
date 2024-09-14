import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.gson.Gson;

// 定义 /query 处理请求
@WebServlet("/query1")

public class QueryServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    // 定义 QueryItem 作为内部类
    public class QueryItem {
        private String query_text;
        private int query_count;

        public QueryItem(String query_text, int query_count) {
            this.query_text = query_text;
            this.query_count = query_count;
        }

        public String getQuery_text() {
            return query_text;
        }

        public int getQuery_count() {
            return query_count;
        }
    }

    // 处理 GET 请求，返回查询历史
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("UTF-8");
        //System.out.println("GET request received at /query1");
        response.setContentType("application/json");
        ArrayList<QueryItem> queryHistory = new ArrayList<>();

        Connection conn = null;
        try {
            // 使用 JDBCUtils 获取连接
            conn = JDBCUtils.getConnection();
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT query_text, query_count FROM query_history");

            while (rs.next()) {
                String queryText = rs.getString("query_text");
                int queryCount = rs.getInt("query_count");
                queryHistory.add(new QueryItem(queryText, queryCount));
            }

            Gson gson = new Gson();
            String jsonResponse = gson.toJson(queryHistory);
            //System.out.println("JSON Response: " + jsonResponse);  // 打印 JSON 响应
            response.getWriter().write(jsonResponse);

        } catch (SQLException e) {
            e.printStackTrace();
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            response.getWriter().write("{\"error\":\"Database error occurred\"}");
        } finally {
            // 确保关闭数据库连接
            if (conn != null) {
                JDBCUtils.closeConnection(conn);
                //System.out.println("Database connection closed");
            }
        }
    }

    // 处理 POST 请求，保存查询内容
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        String queryText = request.getParameter("query");
        if (queryText == null || queryText.isEmpty()) {
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            return;
        }

        Connection conn = null;
        try {
            // 使用 JDBCUtils 获取连接
            conn = JDBCUtils.getConnection();

            // 检查查询是否已存在
            String checkQuery = "SELECT query_count FROM query_history WHERE query_text = ?";
            PreparedStatement checkStmt = conn.prepareStatement(checkQuery);
            checkStmt.setString(1, queryText);
            ResultSet rs = checkStmt.executeQuery();

            if (rs.next()) {
                // 如果查询存在，则增加查询次数
                int currentCount = rs.getInt("query_count");
                String updateQuery = "UPDATE query_history SET query_count = ? WHERE query_text = ?";
                PreparedStatement updateStmt = conn.prepareStatement(updateQuery);
                updateStmt.setInt(1, currentCount + 1);
                updateStmt.setString(2, queryText);
                updateStmt.executeUpdate();
            } else {
                // 如果查询不存在，则插入新记录
                String insertQuery = "INSERT INTO query_history (query_text) VALUES (?)";
                PreparedStatement insertStmt = conn.prepareStatement(insertQuery);
                insertStmt.setString(1, queryText);
                insertStmt.executeUpdate();
            }
            response.setStatus(HttpServletResponse.SC_OK);

        } catch (SQLException e) {
            e.printStackTrace();
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
        } finally {
            // 关闭数据库连接
            JDBCUtils.closeConnection(conn);
        }
    }
}
