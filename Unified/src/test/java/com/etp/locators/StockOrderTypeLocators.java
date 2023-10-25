package com.etp.locators;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.etp.helper.HelperClass;

public class StockOrderTypeLocators extends HelperClass{
Logger log = Logger.getLogger("devpinoyLogger");
	
	public void enterstockordertype() {
		try {
			Thread.sleep(5000);
		log.info("Click on three lines");
		driver.findElement(By.xpath("//*[@id='nav-icon1']")).click();
		Thread.sleep(5000);
		log.info("Click on INVENTORY MANAGEMENT ");
		driver.findElement(By.xpath("//span[contains(text(),'INVENTORY MANAGEMENT ')]")).click();
		Thread.sleep(5000);
		log.info("Click on Stock Order Type");
		driver.findElement(By.linkText("Stock Order Type")).click();
		
		}catch (Exception e) {
			// TODO: handle exception
			System.out.println("exception occured in enter stock order type");
		}
	}
	
	public void enterdetails() {
		try {
		
		WebDriverWait waitss = new WebDriverWait(driver, 50);
		WebElement element4 = waitss.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[@class='hb-add-icon-btn']")));
		element4.click();
		
		
		
			Thread.sleep(1000);
			driver.findElement(By.id("stockOrdTypeCode")).sendKeys("StockOrderType");
			
			Thread.sleep(1000);
			driver.findElement(By.id("stockOrdTypeName")).sendKeys("StockOrderType");
			
//			Thread.sleep(1000);
	//		driver.findElement(By.id(""))
			
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
	}

}
