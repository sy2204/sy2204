import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.gson.Gson;

// 定义 /addpoint 处理请求
@WebServlet("/addpoint")
public class AddPointServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    // 处理 POST 请求，保存添加的点信息
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("UTF-8");

        // 获取请求中的参数
        String pointName = request.getParameter("name");
        String pointMeaning = request.getParameter("meaning");
        String latStr = request.getParameter("lat");
        String lngStr = request.getParameter("lng");

        // 检查参数是否有效
        if (pointName == null || pointName.isEmpty() ||
                latStr == null || latStr.isEmpty() ||
                lngStr == null || lngStr.isEmpty()) {
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            response.getWriter().write("{\"error\":\"Invalid input data\"}");
            return;
        }

        // 将字符串的经纬度转换为浮点数
        double lat = Double.parseDouble(latStr);
        double lng = Double.parseDouble(lngStr);

        Connection conn = null;
        try {
            // 使用 JDBCUtils 获取数据库连接
            conn = JDBCUtils.getConnection();

            // 插入点信息到数据库
            String insertQuery = "INSERT INTO points (point_name, point_meaning, latitude, longitude) VALUES (?, ?, ?, ?)";
            PreparedStatement insertStmt = conn.prepareStatement(insertQuery);
            insertStmt.setString(1, pointName);
            insertStmt.setString(2, pointMeaning);
            insertStmt.setDouble(3, lat);
            insertStmt.setDouble(4, lng);
            insertStmt.executeUpdate();

            // 设置响应状态为200 OK，表示成功
            response.setStatus(HttpServletResponse.SC_OK);
            response.getWriter().write("{\"message\":\"Point added successfully\"}");

        } catch (SQLException e) {
            e.printStackTrace();
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            response.getWriter().write("{\"error\":\"Database error occurred\"}");
        } finally {
            // 关闭数据库连接
            JDBCUtils.closeConnection(conn);
        }
    }

    // 处理 GET 请求，读取数据库中的所有点信息并返回
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setCharacterEncoding("UTF-8");
        response.setContentType("application/json");

        Connection conn = null;
        PreparedStatement stmt = null;
        ResultSet rs = null;
        List<Point> points = new ArrayList<>();

        try {
            // 使用 JDBCUtils 获取数据库连接
            conn = JDBCUtils.getConnection();

            // 查询所有点信息
            String selectQuery = "SELECT point_name, point_meaning, latitude, longitude FROM points";
            stmt = conn.prepareStatement(selectQuery);
            rs = stmt.executeQuery();

            // 遍历结果集，构建 Point 对象列表
            while (rs.next()) {
                String name = rs.getString("point_name");
                String meaning = rs.getString("point_meaning");
                double lat = rs.getDouble("latitude");
                double lng = rs.getDouble("longitude");

                Point point = new Point(name, meaning, lat, lng);
                points.add(point);
            }

            // 使用 Gson 将点信息列表转换为 JSON 格式
            Gson gson = new Gson();
            String json = gson.toJson(points);

            // 将 JSON 响应写入响应体
            response.setStatus(HttpServletResponse.SC_OK);
            response.getWriter().write(json);

        } catch (SQLException e) {
            e.printStackTrace();
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            response.getWriter().write("{\"error\":\"Database error occurred\"}");
        } finally {
            // 关闭数据库连接
            JDBCUtils.closeConnection(conn);
            if (stmt != null) {
                try {
                    stmt.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
            if (rs != null) {
                try {
                    rs.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    // Point 类用于保存点信息
    class Point {
        private String name;
        private String meaning;
        private double lat;
        private double lng;

        public Point(String name, String meaning, double lat, double lng) {
            this.name = name;
            this.meaning = meaning;
            this.lat = lat;
            this.lng = lng;
        }

        // Getter 和 Setter 可以根据需要添加
    }
}
