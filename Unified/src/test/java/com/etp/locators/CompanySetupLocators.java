package com.etp.locators;

import java.util.List;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
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
			companycode.sendKeys("sdfd");

			Thread.sleep(1000);
			// company name
			driver.findElement(By.id("//input[@formcontrolname='companyName']")).sendKeys("ff");

			Thread.sleep(1000);
			// establishment date
			driver.findElement(By.id("//input[@formcontrolname='estDate']")).sendKeys("ff");

			//
			Thread.sleep(1000);
			driver.findElement(By.xpath("//input[@formcontrolname='taxDecNo']")).sendKeys("324323");

			//Tax Declaration No.
			Thread.sleep(1000);
			driver.findElement(By.xpath("//input[@formcontrolname='regNo']")).sendKeys("4354543");

			
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
			driver.findElement(By.xpath("//input[@placeholder='Postal Code']")).sendKeys("23234");
			
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
			
			//
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
			WebElement Segmentsqert = driver.findElement(By.xpath("//*[@ng-reflect-name='exchRateType']"));
			Segmentsqert.click();
			List<WebElement> segmentDDawesf = driver.findElements(By.tagName("mat-option"));

			for (WebElement values : segmentDDawesf) {
				String requiredvalue = "Dual Exchange Rate";
				if (requiredvalue.equalsIgnoreCase(values.getText())) {
					System.out.println(values.getText());
					values.click();
					break;
				}
			}	
			
			
			//
			Thread.sleep(1000);
			WebElement Segmentsqef = driver.findElement(By.xpath("//*[@ng-reflect-name='exchRateType']"));
			Segmentsqef.click();
			List<WebElement> segmentDDawef = driver.findElements(By.tagName("mat-option"));

			for (WebElement values : segmentDDawef) {
				String requiredvalue = "Dual Exchange Rate";
				if (requiredvalue.equalsIgnoreCase(values.getText())) {
					System.out.println(values.getText());
					values.click();
					break;
				}
			}	
			
			
			
	
			
			
		} catch (Exception e) {
			// TODO: handle exception
			System.out.println("exception occured in enter product master");
		}
	}

}
