package com.etp;


public class Unify {
	       
	      System.setProperty("webdriver.chrome.driver", "D:\\chromedriver-win64\\chromedriver.exe");
	        driver=new ChromeDriver();
	        WebDriver driver = new ChromeDriver();
	        driver.get("https://google.com");

	        WebElement button = driver.findElement(By.id("your-button-id"));
	        button.click();
}
