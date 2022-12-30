package com.etp.locators;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;
import java.util.List;
import java.util.Properties;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.etp.helper.HelperClass;

public class ProductUploadLocators extends HelperClass{

	JavascriptExecutor js = (JavascriptExecutor) driver;
	public void selectMenu() {
	
		try {
		//log.info("Click on three lines");
		Thread.sleep(2000);
		driver.findElement(By.xpath("//*[@id='nav-icon1']")).click();
		Thread.sleep(2000);
	//	log.info("Click on Product Management");
		driver.findElement(By.xpath("//span[contains(text(),'PRODUCT MANAGEMENT ')]")).click();
		Thread.sleep(2000);
	//	log.info("Click on Product Master");
		driver.findElement(By.linkText("Product Master")).click();
		}catch (Exception e) {
			System.out.println("Exception Occured while selecting menu");
		}
	}

	public void clickButton() {
	
		WebDriverWait wait = new WebDriverWait(driver, 40);
		WebElement element3 = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[@class='hb-add-icon-btn']")));
		element3.click();
		
		WebDriverWait waits = new WebDriverWait(driver, 40);
		WebElement element4 = waits.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[@class='add-btn-popup-first-btn']")));
		element4.click();
	}

	public void filldetails()  {
		try {
		Thread.sleep(2000);
			
		 WebElement Segmenttt= driver.findElement(By.xpath("//*[@ng-reflect-name='productCatalogId']"));
		 Segmenttt.click();
			    List<WebElement> segmentDr = driver.findElements(By.tagName("mat-option"));
				 for(WebElement values:segmentDr)
				 {
					 String requiredvalue="HelpText123 (HelpText)" ;
					if(requiredvalue.equalsIgnoreCase(values.getText())) {
						System.out.println(values.getText());
						values.click();
						break;
					}
				 }
		Thread.sleep(2000);
		System.out.println("No. Of Style SKU's");
		driver.findElement(By.xpath("//input[@formcontrolname='styleItemCount']")).sendKeys("1");
		
		Thread.sleep(2000);
		driver.findElement(By.xpath("//a[contains(text(),'Download Template')]")).click();
		}catch (Exception e) {
			System.out.println("Exception occured for upload");
		}
	}
	
	
	//--------------------------------------------------Product new template Upload--------------------------------------------------//

	public void selectuploadoption() {

		try {
		//log.info("Click on three lines");
		Thread.sleep(4000);
		driver.findElement(By.xpath("//*[@id='nav-icon1']")).click();
		Thread.sleep(2000);
	//	log.info("Click on Product Management");
		driver.findElement(By.xpath("//span[contains(text(),'PRODUCT MANAGEMENT ')]")).click();
		Thread.sleep(2000);
	//	log.info("Click on Product Master");
		driver.findElement(By.linkText("Product Master")).click();
		}catch (Exception e) {
			System.out.println("Exception Occured while selecting menu");
		}
		
	}

	public void fillupdloaddetails()  {
		try {
		WebDriverWait wait = new WebDriverWait(driver, 40);
		WebElement element3 = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[@class='hb-add-icon-btn']")));
		element3.click();
		
		WebDriverWait waits = new WebDriverWait(driver, 40);
		WebElement element4 = waits.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[@class='add-btn-popup-first-btn']")));
		element4.click();
		
		
			Thread.sleep(1000);
			System.out.println("Click on Product new Template");
			driver.findElement(By.xpath("//div[@id='mat-tab-label-1-1']")).click();
			
			
			 Thread.sleep(1000);
			   WebElement scroll= driver.findElement(By.xpath("//p[contains(text(),' Product Excel Sheet ')]"));
				
				js.executeScript("arguments[0].scrollIntoView();", scroll);
			
			Thread.sleep(4000);
			System.out.println("Click on Browse");
			driver.findElement(By.xpath("(//*[@class='custom-file-upload']/span[text()=' Browse'])[2]")).click();
			
			  StringSelection ss = new StringSelection("C:\\Users\\admin\\Downloads\\1000 product upload.xlsx");
			    Toolkit.getDefaultToolkit().getSystemClipboard().setContents(ss, null);

			    //imitate mouse events like ENTER, CTRL+C, CTRL+V
			    Robot robot;
				try {
					robot = new Robot();
				
			    robot.delay(550);
			    robot.keyPress(KeyEvent.VK_ENTER);
			    robot.keyRelease(KeyEvent.VK_ENTER);
			    Thread.sleep(2000);	
			    robot.keyPress(KeyEvent.VK_CONTROL);
			    Thread.sleep(2000);
			    robot.keyPress(KeyEvent.VK_V);
			    Thread.sleep(2000);
			    robot.keyRelease(KeyEvent.VK_V);
			    robot.keyRelease(KeyEvent.VK_CONTROL);
			    Thread.sleep(2000);
			    robot.keyPress(KeyEvent.VK_ENTER);
			    Thread.sleep(2000);
			    robot.keyRelease(KeyEvent.VK_ENTER);
			    robot.delay(100);
			    robot.keyRelease(KeyEvent.VK_ENTER);
			
				} catch (AWTException e) {
					e.printStackTrace();
				}
			Thread.sleep(1000);
			driver.findElement(By.xpath("//a[contains(text(),'UPLOAD')]")).click();	
			Thread.sleep(1000);
			driver.findElement(By.xpath(" //button[contains(text(),' Ok ')]")).click();
			
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		
	}

}
