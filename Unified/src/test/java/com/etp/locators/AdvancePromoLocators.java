package com.etp.locators;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;
import java.time.Duration;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.apache.http.message.BasicListHeaderIterator;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.Point;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.etp.helper.HelperClass;
import com.opencsv.CSVReader;

import junit.framework.Assert;

public class AdvancePromoLocators extends HelperClass {

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
			
			WebDriverWait wait = new WebDriverWait(driver, 50);
			WebElement element4 = wait.until(
					ExpectedConditions.visibilityOfElementLocated(By.xpath("//input[@placeholder='Search By Promo Code or Promo Name']")));
			Thread.sleep(2000);
			element4.sendKeys("Voucher");
			
		
			WebElement element7 = wait.until(
					ExpectedConditions.visibilityOfElementLocated(By.xpath("//input[@placeholder='Search By Promo Code or Promo Name']")));
			element7.sendKeys("Promotion1987");
		
		
			WebElement element9 = wait.until(
					ExpectedConditions.visibilityOfElementLocated(By.xpath("//input[@placeholder='Search By Promo Code or Promo Name']")));
			Thread.sleep(1000);
			element9.sendKeys("9");
			
			WebElement element10 = wait.until(
					ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[@id='hb-mat-btn-css-override']")));
			element10.click();
			
			WebElement element11 = wait.until(
					ExpectedConditions.visibilityOfElementLocated(By.xpath("(//button[@class='mat-menu-item'])[1]")));
			element11.click();
			
			JavascriptExecutor js1 = (JavascriptExecutor) driver;
			WebElement Elee1 = driver.findElement(By.xpath("//span[contains(text(),' Promotion Flyer and Video ')]"));
			Thread.sleep(1000);
			js1.executeScript("arguments[0].scrollIntoView();", Elee1);
			
			WebElement element12 = wait.until(
			ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[@class='btn activeBtn new_Btn addHeaderBtn']")));		
			element12.click();
			
			
			WebElement element13 = wait.until(
			ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[name()='text' and @id='v-300']//*[name()='tspan' and contains(@class,'v-line')]")));		
			element13.click();
			
			WebElement element14 = wait.until(
			ExpectedConditions.visibilityOfElementLocated(By.xpath("//span[contains(text(),' ADD PRODUCT ')]")));
			element14.click();
			
		//	Thread.sleep(10000);
			
			//(//input[@id="file-input"])[1]
			//div[@id='addProductInclude']//input[@id='file-input']
			
			WebElement a=driver.findElement(By.xpath("//div[@id='addProductInclude']//input[@id='file-input']"));
			System.out.println(a.getText()+"    "+a.getTagName());
					
			Actions actions = new Actions(driver); 
			actions.moveToElement(a).click().build().perform();
			
			  StringSelection ss = new StringSelection("C:\\Users\\Lenovo\\Desktop\\Product Include\\promoInclude.xls");
			    Toolkit.getDefaultToolkit().getSystemClipboard().setContents(ss, null);

			    //imitate mouse events like ENTER, CTRL+C, CTRL+V
			    Robot robot;
				try {
					robot = new Robot();
				
			    robot.delay(500);
			    robot.keyPress(KeyEvent.VK_ENTER);
			    robot.keyRelease(KeyEvent.VK_ENTER);
			    Thread.sleep(1000);	
			    robot.keyPress(KeyEvent.VK_CONTROL);
			    Thread.sleep(1000);
			    robot.keyPress(KeyEvent.VK_V);
			    Thread.sleep(1000);
			    robot.keyRelease(KeyEvent.VK_V);
			    robot.keyRelease(KeyEvent.VK_CONTROL);
			    Thread.sleep(1000);
			    robot.keyPress(KeyEvent.VK_ENTER);
			    Thread.sleep(1000);
			    robot.keyRelease(KeyEvent.VK_ENTER);
			    robot.delay(100);
			    robot.keyRelease(KeyEvent.VK_ENTER);
			
				} catch (AWTException e) {
					e.printStackTrace();
				}
				
				WebElement element15 = wait.until(
				ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='j_155']")));		
				element15.click();
				
				//driver.findElement(By.id("")).click();		
				
				Thread.sleep(1000);
				
				driver.findElement(By.xpath("(//span[@class='mainMenuTree ng-star-inserted'])[3]")).click();
				
				Thread.sleep(1000);
				
				driver.findElement(By.xpath("(//span[@class='menu-bg-color'])[3]")).click();
				
				Thread.sleep(1000);
				
				driver.findElement(By.xpath("//button[@class='addCatalog']")).click();
				
				Thread.sleep(1000);
				
				driver.findElement(By.xpath("(//label[@class='mat-checkbox-layout'])[15]")).click();
				
				Thread.sleep(1000);
				
				driver.findElement(By.xpath("(//button[contains(text(),' ADD ')])[2]")).click();
				
				Thread.sleep(1000);
				
				driver.findElement(By.xpath("//p[contains(text(),'Actions')]")).click();
				
				Thread.sleep(1000);
				
				driver.findElement(By.xpath("(//span[@class='innerTree menu-bg-color HeaderDiscountLi'])[1]")).click();
				
				Thread.sleep(1000);
				
				driver.findElement(By.xpath("//input[@id='searchCatalog']")).sendKeys("5");
				
				Thread.sleep(1000);
				
				driver.findElement(By.xpath("//button[contains(text(),' APPLY ')]")).click();
				
				Thread.sleep(1000);
				
				driver.findElement(By.xpath("(//button[contains(text(),' UPDATE ')])[1]")).click();
				
				Thread.sleep(1000);
				
				driver.findElement(By.xpath("//button[contains(text(),' No ')]")).click();
				
}
}
