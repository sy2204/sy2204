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

// 定义 /query2 处理请求
@WebServlet("/query2")

public class FLMCservlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    // 定义 QueryItem 作为内部类
    public class QueryItem {
        private String FLMC_text;
        private int FLMC_count;

        public QueryItem(String FLMC_text, int FLMC_count) {
            this.FLMC_text = FLMC_text;
            this.FLMC_count = FLMC_count;
        }

        public String getFLMC_text() {
            return FLMC_text;
        }

        public int getFLMC_count() {
            return FLMC_count;
        }
    }


    // 处理 GET 请求，返回查询历史
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("UTF-8");
        response.setContentType("application/json");
        ArrayList<QueryItem> queryHistory = new ArrayList<>();

        Connection conn = null;
        try {
            // 使用 JDBCUtils 获取连接
            conn = JDBCUtils.getConnection();
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT FLMC_text, FLMC_count FROM FLMC");

            while (rs.next()) {
                String queryText = rs.getString("FLMC_text");
                int queryCount = rs.getInt("FLMC_count");
                queryHistory.add(new QueryItem(queryText, queryCount));
            }

            Gson gson = new Gson();
            String jsonResponse = gson.toJson(queryHistory);
            response.getWriter().write(jsonResponse);

        } catch (SQLException e) {
            e.printStackTrace();
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            response.getWriter().write("{\"error\":\"Database error occurred\"}");
        } finally {
            // 确保关闭数据库连接
            if (conn != null) {
                JDBCUtils.closeConnection(conn);
            }
        }
    }

    // 处理 POST 请求，保存查询内容
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        String spotType = request.getParameter("spotType");  // 修改为接收 spotType 参数
        if (spotType == null || spotType.isEmpty()) {
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            return;
        }

        Connection conn = null;
        try {
            // 使用 JDBCUtils 获取连接
            conn = JDBCUtils.getConnection();

            // 检查 spotType 是否已存在
            String checkQuery = "SELECT FLMC_count FROM FLMC WHERE FLMC_text = ?";
            PreparedStatement checkStmt = conn.prepareStatement(checkQuery);
            checkStmt.setString(1, spotType);
            ResultSet rs = checkStmt.executeQuery();

            if (rs.next()) {
                // 如果 spotType 存在，则增加计数
                int currentCount = rs.getInt("FLMC_count");  // 正确的字段名为 FLMC_count
                String updateQuery = "UPDATE FLMC SET FLMC_count = ? WHERE FLMC_text = ?";
                PreparedStatement updateStmt = conn.prepareStatement(updateQuery);
                updateStmt.setInt(1, currentCount + 1);  // 更新查询次数
                updateStmt.setString(2, spotType);
                updateStmt.executeUpdate();
            } else {
                // 如果 spotType 不存在，则插入新记录并设置计数为 1
                String insertQuery = "INSERT INTO FLMC (FLMC_text, FLMC_count) VALUES (?, ?)";
                PreparedStatement insertStmt = conn.prepareStatement(insertQuery);
                insertStmt.setString(1, spotType);
                insertStmt.setInt(2, 1);  // 初始计数为 1
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
