package com.etp.locators;

import org.apache.http.message.BasicListHeaderIterator;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.etp.helper.HelperClass;
import com.opencsv.CSVReader;

public class AdvancePromoLocators extends HelperClass{
	

	public void enterpromotion() throws Exception{
	
			Thread.sleep(6000);
		//	log.info("Click on three lines");
			driver.findElement(By.xpath("//*[@id='nav-icon1']")).click();
			Thread.sleep(1000);
		//	log.info("Click on  Store Administration");
			driver.findElement(By.xpath("//span[contains(text(),'PRICING & PROMOTIONS ')]")).click();
			Thread.sleep(1000);

			driver.findElement(By.linkText("Promotions")).click();
			
			
//			WebDriverWait wait = new WebDriverWait(driver, 500);
//			WebElement element3 = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[@id='plusButton']")));
//			element3.click();

			WebDriverWait waitss = new WebDriverWait(driver, 500);
			WebElement element4 = waitss.until(
					ExpectedConditions.visibilityOfElementLocated(By.xpath("//input[@placeholder='Search By Promo Code or Promo Name']")));
			Thread.sleep(2000);
			element4.sendKeys("Voucher");
			
		
			WebElement element7 = waitss.until(
					ExpectedConditions.visibilityOfElementLocated(By.xpath("//input[@placeholder='Search By Promo Code or Promo Name']")));
			element7.sendKeys("Promotion1987");
		
		
			WebElement element9 = waitss.until(
					ExpectedConditions.visibilityOfElementLocated(By.xpath("//input[@placeholder='Search By Promo Code or Promo Name']")));
			Thread.sleep(1000);
			element9.sendKeys("8");
			
			WebElement element10 = waitss.until(
					ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[@id='hb-mat-btn-css-override']")));
			element10.click();
			
			WebElement element11 = waitss.until(
					ExpectedConditions.visibilityOfElementLocated(By.xpath("(//button[@class='mat-menu-item'])[1]")));
			element11.click();
			
			JavascriptExecutor js1 = (JavascriptExecutor) driver;
			WebElement Elee1 = driver.findElement(By.xpath("//span[contains(text(),' Promotion Flyer and Video ')]"));
			Thread.sleep(1000);
			js1.executeScript("arguments[0].scrollIntoView();", Elee1);
			
			WebElement element12 = waitss.until(
			ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[@class='btn activeBtn new_Btn addHeaderBtn']")));		
			element12.click();
			
			
			WebElement element13 = waitss.until(
			ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[name()='text' and @id='v-300']//*[name()='tspan' and contains(@class,'v-line')]")));		
			element13.click();
			
			WebElement element14 = waitss.until(
			ExpectedConditions.visibilityOfElementLocated(By.xpath("//span[contains(text(),' ADD PRODUCT ')]")));
			element14.click();
			
//			WebDriverWait waitsse = new WebDriverWait(driver, 1000);
//			WebElement element15 = waitsse.until(
//			ExpectedConditions.visibilityOfElementLocated(By.xpath("(//span[contains(text(),' FILTER ')])[1]")));
//			//element15.click();
//			element15.sendKeys(Keys.TAB);
			
		//	Thread.sleep(1000);
		//	driver.switchTo().activeElement();
			driver.findElement(By.xpath("(//div[@class='modal-content popuopModalContentSize top-80'])[1]/div/div[4]/div/ul/li/div[2]/input")).click();
			
		//	System.out.println(element15);
//			
//			WebElement element18 = waitss.until(
//			ExpectedConditions.visibilityOfElementLocated(By.xpath("/html/body/div[1]/app-root/div/div[3]/div/app-advance-promotion/div/div[5]/div[5]/div[1]/app-product-attributes/div[3]/div/div/div/div[4]/div[1]/ul/li/div[2]/input")));
//			element18.click();
//			Thread.sleep(1000);
//			driver.findElement(By.xpath("(//input[@type='file'])[3]")).click();
		
			

			
	
		
	}
	
	}