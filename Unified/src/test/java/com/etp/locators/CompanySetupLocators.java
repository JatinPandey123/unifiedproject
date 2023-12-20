package com.etp.locators;

import java.time.Duration;
import java.util.List;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.etp.helper.HelperClass;

public class CompanySetupLocators extends HelperClass {

	public void fillcompanydetails() {

	//	Logger log = Logger.getLogger("devpinoyLogger");

		try {
			Thread.sleep(8000);
		
			driver.findElement(By.xpath("//*[@id='nav-icon1']")).click();
			Thread.sleep(8000);
			
			driver.findElement(By.xpath("//span[contains(text(),'ADMINISTRATION ')]")).click();
			Thread.sleep(8000);
	
			driver.findElement(By.linkText("Company Setup")).click();

			WebDriverWait wait = new WebDriverWait(driver, 50);
			WebElement element3 = wait.until(
					ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[@class='hb-add-icon-btn']")));
			element3.click();

			WebElement companycode = wait
					.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//input[@id='companyCode']")));
			companycode.sendKeys("FC526");
			
			
			WebElement companyname = wait
					.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//input[@formcontrolname='companyName']")));
			companyname.sendKeys("Addidas9");

		//	Thread.sleep(2000);
			// company name
			//driver.findElement(By.id("//input[@formcontrolname='companyName']")).sendKeys("Addidas1");

			Thread.sleep(1000);
	
			//
			
			driver.findElement(By.xpath("(//*[@class='mat-datepicker-toggle-default-icon ng-star-inserted'])[1]"))
			.click();
			String f = "4 JUN 2023";
	String[] dates = f.split(" ");

	driver.findElement(By.xpath("(//div[@class='mat-calendar-controls']/button)[1]")).click();

	List<WebElement> year = driver.findElements(By.xpath("//td"));
	Thread.sleep(1000);
	int k = 0;
	while (true) {
		if ((Integer.parseInt(dates[2])) < (Integer
				.parseInt(driver.findElement(By.xpath("(//td[@role='gridcell'])[1]")).getText()))) {
			Thread.sleep(1000);
			driver.findElement(By.xpath("//div[@class='mat-calendar-controls']/button[2]")).click();
			year = driver.findElements(By.xpath("//td"));
		}
		for (WebElement c : year) {
			if (dates[2].equalsIgnoreCase(c.getText())) {
				c.click();
				k = 1;
				break;
			}
		}
		if (k == 1)
			break;
	}
	List<WebElement> month = driver.findElements(By.xpath("//td"));
	Thread.sleep(1000);
	for (WebElement c : month) {
		if (dates[1].equalsIgnoreCase(c.getText())) {
			c.click();
			break;
		}
	}

	List<WebElement> caldate = driver.findElements(By.xpath("//td"));
	Thread.sleep(1000);
	for (WebElement c : caldate) {
		if (dates[0].equalsIgnoreCase(c.getText())) {
			c.click();
			break;
		}
	}

			//
			Thread.sleep(1000);
			driver.findElement(By.xpath("//input[@formcontrolname='taxDecNo']")).sendKeys("324323");

			//Tax Declaration No.
			Thread.sleep(1000);
			driver.findElement(By.xpath("//input[@formcontrolname='regNo']")).sendKeys("4354543");

			
			//scroll
			JavascriptExecutor js12 = (JavascriptExecutor) driver;
			WebElement Elee12 = driver.findElement(By.xpath("//span[contains(text(),' Company Address')]"));
			Thread.sleep(1000);
			js12.executeScript("arguments[0].scrollIntoView();", Elee12);
			
			//country
			Thread.sleep(1000);
			WebElement Segment = driver.findElement(By.xpath("//*[@ng-reflect-name='countryId']"));
			Segment.click();
			List<WebElement> segmentDD = driver.findElements(By.tagName("mat-option"));

			for (WebElement values : segmentDD) {
				String requiredvalue = "Indonesia";
				if (requiredvalue.equalsIgnoreCase(values.getText())) {
					System.out.println(values.getText());
					values.click();
					break;
				}
			}

			//state
			Thread.sleep(1000);
			WebElement Segmenta = driver.findElement(By.xpath("//*[@ng-reflect-name='stateId']"));
			Segmenta.click();
			List<WebElement> segmentDDs = driver.findElements(By.tagName("mat-option"));

			for (WebElement values : segmentDDs) {
				String requiredvalue = "Banten";
				if (requiredvalue.equalsIgnoreCase(values.getText())) {
					System.out.println(values.getText());
					values.click();
					break;
				}
			}

			//city
			Thread.sleep(1000);
			WebElement Segments = driver.findElement(By.xpath("//*[@ng-reflect-name='cityId']"));
			Segments.click();
			List<WebElement> segmentDDa = driver.findElements(By.tagName("mat-option"));

			for (WebElement values : segmentDDa) {
				String requiredvalue = "Curug";
				if (requiredvalue.equalsIgnoreCase(values.getText())) {
					System.out.println(values.getText());
					values.click();
					break;
				}
			}

			
			
			Thread.sleep(1000);
			//address 1
			driver.findElement(By.xpath("//input[@placeholder='Address 1']")).sendKeys("dsds443");
			
			//postal code
			Thread.sleep(1000);
			driver.findElement(By.xpath("//input[@placeholder='Postal code']")).sendKeys("23234");
			
			//currency
			Thread.sleep(1000);
			WebElement Segmentsq = driver.findElement(By.xpath("//*[@ng-reflect-name='localCurrency']"));
			Segmentsq.click();
			List<WebElement> segmentDDaw = driver.findElements(By.tagName("mat-option"));

			for (WebElement values : segmentDDaw) {
				String requiredvalue = "IDR";
				if (requiredvalue.equalsIgnoreCase(values.getText())) {
					System.out.println(values.getText());
					values.click();
					break;
				}
			}
			
			//exchange rate type
			Thread.sleep(1000);
			WebElement Segmentsqe = driver.findElement(By.xpath("//*[@ng-reflect-name='exchRateType']"));
			Segmentsqe.click();
			List<WebElement> segmentDDawe = driver.findElements(By.tagName("mat-option"));

			for (WebElement values : segmentDDawe) {
				String requiredvalue = "Dual Exchange Rate";
				if (requiredvalue.equalsIgnoreCase(values.getText())) {
					System.out.println(values.getText());
					values.click();
					break;
				}
			}	
			
			//scroll
			JavascriptExecutor js123 = (JavascriptExecutor) driver;
			WebElement Elee123 = driver.findElement(By.xpath("//span[contains(text(),' Other Information')]"));
			Thread.sleep(1000);
			js123.executeScript("arguments[0].scrollIntoView();", Elee123);
			
			//localization
			Thread.sleep(1000);
			WebElement Segmentsqer = driver.findElement(By.xpath("//*[@ng-reflect-name='loclzAppl']"));
			Segmentsqer.click();
			List<WebElement> segmentDDawes = driver.findElements(By.tagName("mat-option"));

			for (WebElement values : segmentDDawes) {
				String requiredvalue = "Base";
				if (requiredvalue.equalsIgnoreCase(values.getText())) {
					System.out.println(values.getText());
					values.click();
					break;
				}
			}	
			
			//
			Thread.sleep(1000);
			WebElement Segmentsqert = driver.findElement(By.xpath("//*[@ng-reflect-name='costingMethod']"));
			Segmentsqert.click();
			List<WebElement> segmentDDawesf = driver.findElements(By.tagName("mat-option"));

			for (WebElement values : segmentDDawesf) {
				String requiredvalue = "Lot wise costing";
				if (requiredvalue.equalsIgnoreCase(values.getText())) {
					System.out.println(values.getText());
					values.click();
					break;
				}
			}	
			
			
			//
			Thread.sleep(1000);
			WebElement Segmentsqef = driver.findElement(By.xpath("//*[@ng-reflect-name='costinglevel']"));
			Segmentsqef.click();
			List<WebElement> segmentDDawef = driver.findElements(By.tagName("mat-option"));

			for (WebElement values : segmentDDawef) {
				String requiredvalue = "Company level";
				if (requiredvalue.equalsIgnoreCase(values.getText())) {
					System.out.println(values.getText());
					values.click();
					break;
				}
			}	
			
			
			Thread.sleep(1000);
			driver.findElement(By.xpath("//button[contains(text(),' SAVE ')]")).click();
			
			Thread.sleep(1000);
			driver.findElement(By.xpath("//button[contains(text(),' Ok ')]")).click();
		
			
		} catch (Exception e) {
			// TODO: handle exception
			System.out.println("exception occured while saving company setup");
		}
	}

}
