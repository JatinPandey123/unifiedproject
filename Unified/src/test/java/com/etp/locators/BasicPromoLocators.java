package com.etp.locators;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.etp.helper.HelperClass;
import com.opencsv.CSVReader;

public class BasicPromoLocators extends HelperClass{
	

	public void enterpromotion() {
		try {
			Thread.sleep(2000);
		//	log.info("Click on three lines");
			driver.findElement(By.xpath("//*[@id='nav-icon1']")).click();
			Thread.sleep(2000);
		//	log.info("Click on  Store Administration");
			driver.findElement(By.xpath("//span[contains(text(),'PRICING & PROMOTIONS ')]")).click();
			Thread.sleep(2000);
		//	log.info("Click on Product Master");
			driver.findElement(By.linkText("Promotion & Reservation")).click();
			
			WebDriverWait wait = new WebDriverWait(driver, 50);
			WebElement element4 = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//span[contains(text(),' Sylphy Corp')]")));
			element4.click();

			
			WebDriverWait waitss = new WebDriverWait(driver, 50);
			WebElement element5 = waitss.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//li[contains(text(),' Bata QA ')]")));
			element5.click();
			
		}catch (Exception e) {
			System.out.println("Exception Occured");
		}
		
	}
	public void filldetails() throws Exception {
	
	BasicPromo1 promo1=new BasicPromo1();
	promo1.basicpromo1();
//	
//	BasicPromo2 promo2=new BasicPromo2();
//	promo2.basicpromo2();
//	
//	BasicPromo3 promo3=new BasicPromo3();
//	promo3.basicpromo3();
//	
//	
//	BasicPromo4 promo4=new BasicPromo4();
//	promo4.basicpromo4();
//	
//	
//	BasicPromo5 promo5=new BasicPromo5();
//	promo5.basicpromo5();
//	
//	
//	BasicPromo6 promo6=new BasicPromo6();
//	promo6.basicpromo6();
//	
//	
//	BasicPromo7 promo7=new BasicPromo7();
//	promo7.basicpromo7();
//	
//	
//	
//	BasicPromo8 promo8=new BasicPromo8();
//	promo8.basicpromo8();
	
		
	}
	}