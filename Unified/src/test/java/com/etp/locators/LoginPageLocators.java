package com.etp.locators;

import java.io.FileReader;

import org.apache.log4j.Logger;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.etp.helper.HelperClass;
import com.opencsv.CSVReader;

public class LoginPageLocators extends HelperClass{
	
	
	Logger log = Logger.getLogger("devpinoyLogger");
	
	String CSV_file1 = ".\\CSV\\Login.csv";
	 CSVReader reader = null;

		
	public void username()  {
		try {
		 reader= new CSVReader(new FileReader(CSV_file1));
	     String[] cell=reader.readNext();

	     while((cell= reader.readNext())!=null)
	     {  
	    	 int i=0;
	         String strUserName = cell[i]; 
	         Thread.sleep(1000);
		driver.findElement(By.name("txtusername")).sendKeys(strUserName);
	   //      userName.sendKeys(strUserName);
		log.info("User has entered Username");
		System.out.println("User has entered Username");
	     }
	}catch (Exception e) {
		System.out.println("Exception occured for username");
    	}

	}
	
	public void userpassword()  {
		try {
		 reader= new CSVReader(new FileReader(CSV_file1));
	     String[] cell=reader.readNext();

	     while((cell= reader.readNext())!=null)
	     {  
	    	 int i=0;
	         String strUserPassword = cell[i+1]; 
	         Thread.sleep(1000);
	     	driver.findElement(By.id("inputPassword")).sendKeys(strUserPassword);
	     	
	     	log.info("User has entered password");
		
	     }
	}catch (Exception e) {
		System.out.println("Exception occured for password");
    	}

	}
	
	public void userloginbutton() {
//		try {
		  try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		driver.findElement(By.id("btnLogin")).click();
		
//		Thread.sleep(1000);
//		String actualResult = driver.findElement(By.xpath("//h4[contains(text(),' Select Group  ')]")).getText();
//		String expectedResult = " Select Group  ";
//		if(expectedResult.equalsIgnoreCase(actualResult)) {
//			test.log(LogStatus.PASS, "Login Sucessful");
//		}else {
//			test.log(LogStatus.FAIL, "Login Failed");
//		}
//		}catch (Exception e) {
//			// TODO: handle exception
//			System.out.println("Exception occured");
//		}
	}
	
//	public void userinselectgrp() {
//		try {
//			Thread.sleep(1000);
//		
//	Boolean textGrp=driver.findElement(By.xpath("//h4[contains(text(),' Select Group  ')]")).isDisplayed();
//	System.out.println(textGrp);
//		} catch (InterruptedException e) {
//			e.printStackTrace();
//			System.out.println("exception occurred for select grp text");
//		}
//	}
	
	public void userclickgroup() throws InterruptedException {
		WebDriverWait wait = new WebDriverWait(driver, 40);
		WebElement element3 = wait.until(ExpectedConditions.visibilityOfElementLocated(By.linkText("Sylphy Group")));
		element3.click();
			
	//	WebElement Element=	driver.findElement(By.linkText(""));
	//	Element.click();
		log.info("Selected Group");
	}
	
//	public void userClickThreeLines() {
//	//System.out.println("Click on three lines");
//	}
	
	
}
