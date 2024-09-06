package com.etp.locators;

import java.io.FileReader;
import java.time.Duration;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.etp.helper.HelperClass;
import com.opencsv.CSVReader;

public class ProductEdit extends HelperClass {

	Logger log = Logger.getLogger("devpinoyLogger");
	JavascriptExecutor js = (JavascriptExecutor) driver;
	String CSV_file1 = ".\\CSV\\ProductMaster.csv";
	CSVReader reader = null;

////////-----------------------------------------Search----------------------------------------------------////////
	
//	public void fluentwaits() {
//		 Wait<WebDriver> wt = new FluentWait<WebDriver>(driver)
//                 .withTimeout(10, TimeUnit.SECONDS)
//                 .pollingEvery(2, TimeUnit.SECONDS)
//                 .ignoring(NoSuchElementException.class);
//		 
//
//	}

	public void searchproduct() {
	
		try {
			reader = new CSVReader(new FileReader(CSV_file1));
			String[] cell = reader.readNext();
			while ((cell = reader.readNext()) != null) 
			{
				int i = 0;
				String psearch = cell[i + 1];
			//	Thread.sleep(5000);
			//	driver.findElement(By.xpath("//abbr[@title='refresh button']")).click();
			//	WebDriverWait wai = new WebDriverWait(driver, 50);
			//	WebElement ele = wai.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(
				//		"//abbr[@title='refresh button']")));
		//	ele.click();
				
				
				
				WebDriverWait waitss = new WebDriverWait(driver, 50);
					WebElement elemen = waitss.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(
							"//input[@placeholder='Search by Product Name, Code, Catalog, Category, Brand And Segment']")));
					elemen.sendKeys(psearch);
				}
			
		} catch (Exception e) {
			System.out.println("exception occurred");
		}

	}

	public void editThreeDots() {
		try {
			Thread.sleep(2000);
			driver.findElement(By.xpath("(//span[@class='mat-button-wrapper'])[3]/mat-icon")).click();
		} catch (Exception e) {
			System.out.println("edit Three Dots");
		}
	}

	public void clickEdit() {
		try {
			Thread.sleep(2000);
			driver.findElement(By.xpath("//button[contains(text(),' Edit Product Details ')]")).click();
		} catch (Exception e) {
			System.out.println("click Edit");
		}
	}

	public void editDetails() {
		try {
			reader = new CSVReader(new FileReader(CSV_file1));
			String[] cell = reader.readNext();

			while ((cell = reader.readNext()) != null) {
				int i = 0;
				// String pedit = cell[i+23];
				// Thread.sleep(2000);
				// driver.findElement(By.xpath("(//div[@class='mat-radio-outer-circle'])[1]")).click();
				// Thread.sleep(2000);

//		WebDriverWait wait = new WebDriverWait(driver, 20);
//		WebElement element4 = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@formcontrolname='productName']")));
//     element4.clear();
				// Thread.sleep(1000);
//     element4.sendKeys(pedit);

				System.out.println("Select Costing Allowed");
				WebDriverWait wait = new WebDriverWait(driver, 50);
				WebElement element5 = wait.until(ExpectedConditions
						.visibilityOfElementLocated(By.xpath("//mat-checkbox[@formcontrolname='costingAllowed']")));
				element5.click();
				
				Thread.sleep(1000);
				System.out.println("Selected inactive button");
				driver.findElement(By.xpath("(//div[@class='mat-radio-outer-circle'])[1]")).click();
				
				Thread.sleep(1000);
				driver.findElement(By.xpath("//span[contains(text(),' SAVE')]")).click();

				System.out.println("Click on no");
				WebDriverWait waits = new WebDriverWait(driver, 50);
				WebElement eleme = waits.until(ExpectedConditions
						.visibilityOfElementLocated(By.xpath("//button[@class='hb-white-btn width-35per-imp'][1]")));
				eleme.click();
				
				
		//		WebDriverWait del = new WebDriverWait(driver, 40);
				WebElement threedot = wait.until(ExpectedConditions
						.visibilityOfElementLocated(By.xpath("(//span[@class='mat-button-wrapper'])[3]/mat-icon")));
				threedot.click();
				
				Thread.sleep(1000);
				
				driver.findElement(By.xpath("//button[contains(text(),' Delete ')]")).click();
				
				Thread.sleep(1000);
				driver.findElement(By.xpath(" //button[contains(text(),' Ok ')]")).click();
	    
	 // driver.findElement(By.xpath("//button[@class='hb-white-btn
		// width-35per-imp'][1]")).click();
				// Thread.sleep(1000);
//	  driver.findElement(By.xpath("//*[@formcontrolname='productName']")).sendKeys(pedit);
			}
		} catch (Exception e) {
			System.out.println("click edit details" + e);
		}
	}

}
