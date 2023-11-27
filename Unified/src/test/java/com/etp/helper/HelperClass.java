package com.etp.helper;

import java.io.FileReader;
import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

public class HelperClass {
     
     public static WebDriver driver;

     public static void openPage() throws Exception {
    	 
    	 Properties prop=new Properties();	 
    	 FileReader reader = new FileReader(".\\src\\test\\java\\data.properties");
			 prop.load(reader);
		
		//	 System.setProperty("webdriver.gecko.driver",prop.getProperty("driverpath")); 
			 
			// DesiredCapabilities capabilities = DesiredCapabilities.firefox();
			// capabilities.setCapability("marionette",true);
		//	 driver= new FirefoxDriver();
			 
    	 System.setProperty(prop.getProperty("chromedriver"),prop.getProperty("driverpath"));
    	 driver=new ChromeDriver();
    	 driver.manage().window().maximize();
         driver.get(prop.getProperty("url"));
     }
}
