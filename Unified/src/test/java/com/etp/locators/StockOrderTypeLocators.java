package com.etp.locators;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.etp.commonlinks.Modulemenu;
import com.etp.commonlinks.Modulesubmenu;
import com.etp.commonlinks.ThreeDotsCommon;
import com.etp.helper.HelperClass;

public class StockOrderTypeLocators extends HelperClass{
Logger log = Logger.getLogger("devpinoyLogger");
	
	public void enterstockordertype() {
		try {
		//	log.info("Click on three dots ");
			Thread.sleep(1000);
//			WebDriverWait waitss = new WebDriverWait(driver, 2000);
//			WebElement element4 = waitss.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='nav-icon1']")));
//			element4.click();
			ThreeDotsCommon dots=new ThreeDotsCommon();
			dots.threedots();
			
		Thread.sleep(1000);
		Modulemenu menu=new Modulemenu();
		menu.InventoryManagement();
		
		Thread.sleep(1000);
		Modulesubmenu submenu= new Modulesubmenu();
		submenu.StockOderType();
		
		}catch (Exception e) {
			// TODO: handle exception
			System.out.println("exception occured in enter stock order type");
		}
	}
	
	public void enterdetails() {
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
		
			Thread.sleep(1000);
		WebDriverWait waitss = new WebDriverWait(driver, 2000);
		WebElement element4 = waitss.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[@class='hb-add-icon-btn']")));
		element4.click();
		
		
		//for node to node transfer
			Thread.sleep(1000);
			driver.findElement(By.id("stockOrdTypeCode")).sendKeys("StockOrderType31"+date2);
			
			Thread.sleep(1000);
			driver.findElement(By.id("stockOrdTypeName")).sendKeys("StockOrderType31"+date2);
			
			Thread.sleep(1000);
			driver.findElement(By.xpath("//div[@class='mat-checkbox-inner-container']")).click();
			
			Thread.sleep(1000);
			driver.findElement(By.xpath("(//button[contains(text(),' SAVE ')])[1]")).click();
			
			Thread.sleep(1000);
			driver.close();			
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
	}

}
