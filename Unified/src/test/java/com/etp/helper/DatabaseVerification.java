package com.etp.helper;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.testng.Assert;
import org.testng.annotations.Test;


@Test
public class DatabaseVerification extends HelperClass{
	
	 //System.setProperty("webdriver.chrome.driver", "C:\\Users\\Lenovo\\Downloads\\chromedriver-win64 (8)\\chromedriver-win64\\chromedriver.exe");
     //driver = new ChromeDriver();
    
    // JDBC URL, username, and password of MySQL server
    private static final String JDBC_URL = "jdbc:mysql://172.24.2.216:51759/UnifiedDB";
    private static final String USERNAME = "jatin.pandey";
    private static final String PASSWORD = "3D82VLmkktCP";

    public static void main(String[] args) {
        // Database connection
        try (Connection connection = DriverManager.getConnection(JDBC_URL, USERNAME, PASSWORD)) {

            // Example SQL query
        //    String query = "SELECT * FROM tbl_Product WHERE ProductCode='11072024006'";
        	
    String query ="SELECT * FROM tbl_Product WHERE GroupID='1786' AND CompanyID='1315' AND RecordStatus='1' AND ProductStatus='1'";
            Statement stmt = connection.createStatement();
            ResultSet rs = stmt.executeQuery(query);

            // Verify the results
            while (rs.next()) {
                String expectedData = "11072024006";
                String actualData = rs.getString("ProductCode");
                System.out.println(expectedData  + " " + actualData);
                Assert.assertEquals(actualData, expectedData);
             
            
            // Check if Product Code is available in database for Product Master
            if (expectedData==actualData) {
                System.out.println("Product Code is available in database");
                
            } else {
                System.out.println("Record does not exists");
            }
           }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        
    }
    
}
