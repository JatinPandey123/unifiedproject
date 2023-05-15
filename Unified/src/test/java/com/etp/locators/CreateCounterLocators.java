package com.etp.locators;

import java.io.FileReader;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.etp.helper.HelperClass;
import com.opencsv.CSVReader;

public class CreateCounterLocators extends HelperClass{
	
	String CSV_file1 = ".\\CSV\\createcounter.csv";
	CSVReader reader = null;

	public void createcounter() {
		try {
		Thread.sleep(2000);
	//	log.info("Click on three lines");
		driver.findElement(By.xpath("//*[@id='nav-icon1']")).click();
		Thread.sleep(2000);
	//	log.info("Click on  Store Administration");
		driver.findElement(By.xpath("//span[contains(text(),'STORE ADMINISTRATION ')]")).click();
		Thread.sleep(2000);
	//	log.info("Click on Product Master");
		driver.findElement(By.linkText("Counter Registration")).click();
	
	//	Thread.sleep(4000);
	//	driver.findElement(By.xpath("//span[contains(text(),' Sylphy Corp')]")).click();
		
		WebDriverWait wait = new WebDriverWait(driver, 50);
		WebElement element4 = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//span[contains(text(),' Sylphy Corp')]")));
		element4.click();

		
		WebDriverWait waitss = new WebDriverWait(driver, 50);
		WebElement element5 = waitss.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//li[contains(text(),' Bata QA ')]")));
		element5.click();
	//	Thread.sleep(4000);
	//	driver.findElement(By.xpath("//li[contains(text(),' Bata QA ')]")).click();
		
		
		WebElement element6 = waitss.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//mat-select[@id='storeatttype']")));
		element6.click();
		
		
		
		Thread.sleep(4000);
		driver.findElement(By.xpath("//mat-select[@id='storeatttype']")).click();
		
		Thread.sleep(4000);
		driver.findElement(By.xpath("//input[@placeholder='Select Store']")).sendKeys("BataStore02");
		
		
		
		Thread.sleep(1000);
		driver.findElement(By.xpath("//span[contains(text(),' Bata2 - BataStore02 ')]")).click();
		
//		 WebElement Segmenttt= driver.findElement(By.xpath("//*[@ng-reflect-name='productType']"));
//		 Segmenttt.click();
//			    List<WebElement> segmentDr = driver.findElements(By.tagName("mat-option"));
//				 for(WebElement values:segmentDr)
//				 {
//					 String requiredvalue=" Bata2 - BataStore02 "; 
//					if(requiredvalue.equalsIgnoreCase(values.getText())) {
//						System.out.println(values.getText());
//						values.click();
//						break;
//					}
//				 }
		
		
		
		}catch (Exception e) {
			// TODO: handle exception
			System.out.println("exception occurred in enter counter registration");
		}
		
	}

	public void fillcounterdetails() {
		try {
			
			 reader= new CSVReader(new FileReader(CSV_file1));
		     String[] cell=reader.readNext();

		     while((cell= reader.readNext())!=null)    	 
		    	 
		     {  
		    	 int i=0;
		    	 
		    	 String counterCode = cell[i]; 
		    	 String counterName = cell[i+1]; 
		    	 
		    	 
		
		//	WebDriverWait wait = new WebDriverWait(driver, 500);
		//	WebElement element3 = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[@class='btn scroll-btn hb-add-icon-btn dropdown-toggle add-new']")));
		//	element3.click();
		
		//click on add button
		Thread.sleep(8000);
		driver.findElement(By.xpath("//button[@class='btn scroll-btn hb-add-icon-btn dropdown-toggle add-new']")).click();
		
		Thread.sleep(2000);
		driver.findElement(By.id("counterCode")).sendKeys(counterCode);
		
		Thread.sleep(2000);
		driver.findElement(By.id("counterName")).sendKeys(counterName);
		
		Thread.sleep(2000);
		driver.findElement(By.xpath("(//button[contains(text(),' SAVE ')])[1]")).click();
		
	//	Thread.sleep(5000);
		
		
		WebDriverWait waitsss = new WebDriverWait(driver, 50);
		WebElement element6 = waitsss.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[contains(text(),' No ')]")));
		element6.click();
		
		
	//	driver.findElement(By.xpath("//button[contains(text(),' No ')]")).click();
		
		     }
		}catch (Exception e) {
			System.out.println("Exception Occurred while creating counters");
		}
		
	}

	
	
	
	
}
