package com.etp.locators;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.etp.helper.HelperClass;
import com.opencsv.CSVReader;

public class ProductUploadLocators extends HelperClass{
	
	String CSV_file1 = ".\\CSV\\productupload.csv";
	 CSVReader reader = null;

	JavascriptExecutor js = (JavascriptExecutor) driver;
//	public void selectMenu() {
//	
//		try {
//		//log.info("Click on three lines");
//		Thread.sleep(1000);
//		driver.findElement(By.xpath("//*[@id='nav-icon1']")).click();
//		Thread.sleep(1000);
//	//	log.info("Click on Product Management");
//		driver.findElement(By.xpath("//span[contains(text(),'PRODUCT MANAGEMENT ')]")).click();
//		Thread.sleep(1000);
//	//	log.info("Click on Product Master");
//		driver.findElement(By.linkText("Product Master")).click();
//		
//	//	Thread.sleep(6000);
//	//	driver.findElement(By.xpath("//span[contains(text(),' Sylphy Corp')]")).click();
//		
//	//	
//		}catch (Exception e) {
//			System.out.println("Exception Occured while selecting menu");
//		}
//	}

//	public void clickButton() {
//		
//		WebDriverWait wait = new WebDriverWait(driver, 30);
//			WebElement element4 = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//span[contains(text(),' Sylphy Corp')]")));
//			element4.click();
//
//			
//			WebDriverWait waitss = new WebDriverWait(driver, 30);
//			WebElement element5 = waitss.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//li[contains(text(),' Bata QA ')]")));
//			element5.click();
//	
//	//	WebDriverWait waits = new WebDriverWait(driver, 20);
//	//	WebElement element3 = waits.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[@class='hb-add-icon-btn']")));
//	//	element3.click();
//		
//	//	WebDriverWait waitsss = new WebDriverWait(driver, 20);
//	//	WebElement element55 = waits.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[@class='add-btn-popup-first-btn']")));
//	//	element55.click();
//	}
//
//	public void filldetails()  {
//		try {
//		Thread.sleep(1000);
//			
//		 WebElement Segmenttt= driver.findElement(By.xpath("//*[@ng-reflect-name='productCatalogId']"));
//		 Segmenttt.click();
//			    List<WebElement> segmentDr = driver.findElements(By.tagName("mat-option"));
//				 for(WebElement values:segmentDr)
//				 {
//					 String requiredvalue="HelpText123 (HelpText)" ;
//					if(requiredvalue.equalsIgnoreCase(values.getText())) {
//						System.out.println(values.getText());
//						values.click();
//						break;
//					}
//				 }
//				 
//				 
//		driver.findElement(By.xpath("//input[@formcontrolname='styleItemCount']")).sendKeys("1");
//		
//		Thread.sleep(2000);
//		driver.findElement(By.xpath("//a[contains(text(),'Download Template')]")).click();
//		}catch (Exception e) {
//			System.out.println("Exception occured for upload");
//		}
//	}
	
	
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
		
//		WebDriverWait wait = new WebDriverWait(driver, 50);
//		WebElement element4 = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//span[contains(text(),' Sylphy Corp')]")));
//		element4.click();
//
//		
//		WebDriverWait waitss = new WebDriverWait(driver, 50);
//		WebElement element5 = waitss.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//li[contains(text(),' Bata QA ')]")));
//		element5.click();	
		
		WebDriverWait waitx = new WebDriverWait(driver, 50);
		WebElement element3 = waitx.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[@class='btn-round']")));
		element3.click();
		
		WebDriverWait waits = new WebDriverWait(driver, 50);
		WebElement element45 = waits.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[@class='add-btn-popup-first-btn']")));
		element45.click();
		
		
		}catch (Exception e) {
			System.out.println("Exception Occured while selecting menu");
		}
		
	}

	public void fillupdloaddetails() throws Exception  {
		 reader= new CSVReader(new FileReader(CSV_file1));
	     String[] cell=reader.readNext();

	     while((cell= reader.readNext())!=null)
	     { 
		    	 
		    	 int i=0;
		         String path = cell[i]; 
			
	
		
			Thread.sleep(1000);
			System.out.println("Click on Product new Template");
			driver.findElement(By.xpath("//div[@id='mat-tab-label-1-1']")).click();
			
			
			 Thread.sleep(1000);
			   WebElement scroll= driver.findElement(By.xpath("//p[contains(text(),' Product Excel Sheet ')]"));
				
				js.executeScript("arguments[0].scrollIntoView();", scroll);
			
			Thread.sleep(4000);
			System.out.println("Click on Browse");
			driver.findElement(By.xpath("(//*[@class='custom-file-upload']/span[text()=' Browse'])[2]")).click();
			
			  StringSelection ss = new StringSelection(path);
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
			Thread.sleep(1000);
			driver.findElement(By.xpath("//a[contains(text(),'UPLOAD')]")).click();	
			Thread.sleep(4000);
			driver.findElement(By.xpath("//button[contains(text(),' Ok ')]")).click();
			
		
	}
}}