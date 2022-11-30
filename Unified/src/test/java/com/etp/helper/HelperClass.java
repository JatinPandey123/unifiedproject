package com.etp.helper;

import java.io.FileReader;
import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class HelperClass {
     
     public static WebDriver driver;

     public static void openPage() throws Exception {
    	 
    	 Properties prop=new Properties();	 
    	 FileReader reader = new FileReader(".\\src\\test\\java\\data.properties");
			 prop.load(reader);
		
    	 System.setProperty(prop.getProperty("chromedriver"),prop.getProperty("driverpath"));
		//	 System.setProperty("webdriver.chrome.driver","D:\\seleniumJars\\chromedriver.exe");
    	 driver=new ChromeDriver();
    	 driver.manage().window().maximize();
         driver.get(prop.getProperty("url"));
     }
}
