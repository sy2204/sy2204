import java.sql.Connection;
import java.sql.SQLException;

public class TestDBConnection {

    public static void main(String[] args) {
        Connection conn = null;
        try {
            // 调用 JDBCUtils 中的 getConnection() 方法获取数据库连接
            conn = JDBCUtils.getConnection();
            if (conn != null) {
                System.out.println("数据库连接成功！");
            }
        } catch (SQLException e) {
            System.out.println("数据库连接失败！");
            e.printStackTrace();
        } finally {
            // 确保连接关闭
            JDBCUtils.closeConnection(conn);
        }
    }
}
