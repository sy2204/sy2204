import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class JDBCUtils {

    static {
        try {
            Class.forName("org.postgresql.Driver");
            System.out.println("PostgreSQL JDBC Driver Registered!");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

    // PostgreSQL 连接信息
    private static final String DB_URL = "jdbc:postgresql://localhost:5432/search_db";
    private static final String USER = "postgres";
    private static final String PASS = "sy050422";

    // 获取数据库连接
    public static Connection getConnection() throws SQLException {
        return DriverManager.getConnection(DB_URL, USER, PASS);
    }


/*    // PostgreSQL 连接信息 - 第一个数据库
    private static final String DB_URL1 = "jdbc:postgresql://localhost:5432/search_db";
    private static final String USER1 = "postgres";
    private static final String PASS1 = "sy050422";

    // PostgreSQL 连接信息 - 第二个数据库
    private static final String DB_URL2 = "jdbc:postgresql://localhost:5432/FLMC_db";
    private static final String USER2 = "postgres";
    private static final String PASS2 = "sy050422";

    // 获取第一个数据库的连接
    public static Connection getSearchDbConnection() throws SQLException {
        return DriverManager.getConnection(DB_URL1, USER1, PASS1);
    }

    // 获取第二个数据库的连接
    public static Connection getFLMCDbConnection() throws SQLException {
        return DriverManager.getConnection(DB_URL2, USER2, PASS2);
    }*/

    // 关闭数据库连接
    public static void closeConnection(Connection conn) {
        if (conn != null) {
            try {
                conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}
