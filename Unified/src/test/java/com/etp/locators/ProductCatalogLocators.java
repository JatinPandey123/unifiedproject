package com.etp.locators;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.Duration;
import java.util.Date;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.etp.helper.HelperClass;

public class ProductCatalogLocators extends HelperClass{
	Logger log = Logger.getLogger("devpinoyLogger");
	
	public void entercatalog() {
		try {
			
			// Create object of SimpleDateFormat class and decide the format
			DateFormat dateFormat = new SimpleDateFormat("dd");
			DateFormat dateFormat1 = new SimpleDateFormat("mm:ss");

			// System.out.println(dateFormat.format(date));
			// get current date time with Date()
			Date date = new Date();

			// Now format the date
			String date1 = dateFormat.format(date);
			String date2 = dateFormat1.format(date);

			// Print the Date
			int dateInt = Integer.parseInt(date1);
			System.out.println(dateInt);
			System.out.println(date2);
			
			Thread.sleep(2000);
		log.info("Click on three lines");
		driver.findElement(By.xpath("//*[@id='nav-icon1']")).click();
		Thread.sleep(2000);
		log.info("Click on Product Management");
		driver.findElement(By.xpath("//span[contains(text(),'PRODUCT MANAGEMENT ')]")).click();
		Thread.sleep(2000);
		log.info("Click on Product Catalog");
		driver.findElement(By.linkText("Product Catalog")).click();
		
		}catch (Exception e) {
			// TODO: handle exception
			System.out.println("exception occured in enter product catalog");
		}
	}
		
	public void clickaddbutton() {
		try {
		Thread.sleep(20000);
		WebDriverWait wait = new WebDriverWait(driver, 20000);
	   WebElement element3 = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@class='new-wrapper scrollWrapper']/div/app-catalog-list/div/div/div[3]/button")));
		element3.click();
		
		
		//driver.findElement(By.xpath("//div[@class='new-wrapper scrollWrapper']/div/app-catalog-list/div/div/div[3]/button")).click();
			
	}catch (Exception e) {
		// TODO: handle exception
		System.out.println("exception occurred while clicking on plus button"+e);
	}
	}
	public void fillmandatorydetails() {
		
		try {
			// Create object of SimpleDateFormat class and decide the format
			DateFormat dateFormat = new SimpleDateFormat("dd");
			DateFormat dateFormat1 = new SimpleDateFormat("mm:ss");

			// System.out.println(dateFormat.format(date));
			// get current date time with Date()
			Date date = new Date();

			// Now format the date
			String date1 = dateFormat.format(date);
			String date2 = dateFormat1.format(date);

			// Print the Date
			int dateInt = Integer.parseInt(date1);
			System.out.println(dateInt);
			System.out.println(date2);
			
		//	Thread.sleep(10000);
//			
//			WebDriverWait wait = new WebDriverWait(driver, 1000);
//			WebElement element3 = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@id='new-wrapper-id']/div/app-catalog-list/div/div[4]/button")));
//			element3.click();
			
			Thread.sleep(1000);
		//	String code="BAT4";
			driver.findElement(By.xpath("//input[@id='catalogCode']")).sendKeys("NailPaint1"+date2);
			
			Thread.sleep(1000);
			driver.findElement(By.xpath("//input[@formcontrolname='catalogName']")).sendKeys("NailPaint1"+date2);
			
			Thread.sleep(1000);
			driver.findElement(By.xpath("(//button[contains(text(),' SAVE ')])[1]")).click();
			
		//	Thread.sleep(1000);
		//	driver.findElement(By.xpath("//button[contains(text(),' Ok ')]")).click();
			
			
//			Thread.sleep(4000);
//			driver.findElement(By.xpath("//input[@placeholder='Search By Catalog Code or Name']")).sendKeys(code);
//			
//			Thread.sleep(4000);
//			driver.findElement(By.xpath("//input[@placeholder='Search By Catalog Code or Name']")).sendKeys(code);
			
			
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

	public void savecatalog() {
		// TODO Auto-generated method stub
		try {
		Thread.sleep(1000);
		System.out.println("save catalog success");
		}catch (Exception e) {
			System.out.println("Exception occured while saving catalog");
		}
	}

}
