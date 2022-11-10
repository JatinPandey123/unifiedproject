package com.etp.helper;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class HelperClass {
     
     public static WebDriver driver;
     
     public static void openPage() {
    	 System.setProperty("webdriver.chrome.driver","D:\\seleniumJars\\chromedriver.exe");
    	 driver=new ChromeDriver();
    	 driver.manage().window().maximize();
         driver.get("https://dev-unified-op.etpgroup.sg/");
     }
}
