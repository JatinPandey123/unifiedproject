package com.etp.locators;

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
			Thread.sleep(5000);
		log.info("Click on three lines");
		driver.findElement(By.xpath("//*[@id='nav-icon1']")).click();
		Thread.sleep(5000);
		log.info("Click on Product Management");
		driver.findElement(By.xpath("//span[contains(text(),'PRODUCT MANAGEMENT ')]")).click();
		Thread.sleep(5000);
		log.info("Click on Product Catalog");
		driver.findElement(By.linkText("Product Catalog")).click();
		
		}catch (Exception e) {
			// TODO: handle exception
			System.out.println("exception occured in enter product catalog");
		}
	}
		
	

	public void clickaddbutton() {
		try {
		Thread.sleep(1000);
		WebDriverWait wait = new WebDriverWait(driver, 500);
		WebElement element3 = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@id='new-wrapper-id']//button[@class='hb-add-icon-btn']")));
		element3.click();
		
	}catch (Exception e) {
		// TODO: handle exception
	}
	}
	public void fillmandatorydetails() {
		
		try {
			
			
		//	Thread.sleep(10000);
			
//			WebDriverWait wait = new WebDriverWait(driver, 1000);
//			WebElement element3 = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@id='new-wrapper-id']/div/app-catalog-list/div/div[4]/button")));
//			element3.click();
			
			
			Thread.sleep(4000);
			String code="BAT";
			driver.findElement(By.xpath("//input[@id='catalogCode']")).sendKeys(code);
			
			
			Thread.sleep(2000);
			driver.findElement(By.xpath("//input[@formcontrolname='catalogName']")).sendKeys("Ball");
			
			Thread.sleep(2000);
			driver.findElement(By.xpath("(//button[contains(text(),' SAVE ')])[1]")).click();
			
			Thread.sleep(2000);
			driver.findElement(By.xpath("//button[contains(text(),' Ok ')]")).click();
			
			
			Thread.sleep(4000);
			driver.findElement(By.xpath("//input[@placeholder='Search By Catalog Code or Name']")).sendKeys(code);
			
			Thread.sleep(4000);
			driver.findElement(By.xpath("//input[@placeholder='Search By Catalog Code or Name']")).sendKeys(code);
			
			
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

}
