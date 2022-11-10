package com.etp.locators;

import java.io.FileNotFoundException;
import java.io.FileReader;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import com.etp.helper.HelperClass;
import com.opencsv.CSVReader;

public class LoginPageLocators extends HelperClass{
	
	String CSV_file1 = ".\\CSV\\Login.csv";
	 CSVReader reader = null;

//	@FindBy(name="txtusername")
//	public WebElement userName;
//	
//	@FindBy(id="inputPassword")
//	public WebElement password;
//	
//	@FindBy(id="btnLogin")
//	public WebElement loginButton;
	

	public void username()  {
		try {
		 reader= new CSVReader(new FileReader(CSV_file1));
	     String[] cell=reader.readNext();

	     while((cell= reader.readNext())!=null)
	     {  
	    	 int i=0;
	         String strUserName = cell[i]; 
		
		driver.findElement(By.name("txtusername")).sendKeys(strUserName);
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
		
		driver.findElement(By.id("inputPassword")).sendKeys(strUserPassword);
	     }
	}catch (Exception e) {
		System.out.println("Exception occured for password");
    	}

	}
	
	public void userloginbutton() {
		driver.findElement(By.id("btnLogin")).click();
		
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
	
	public void userclickgroup() {
		try {
			Thread.sleep(2000);
		
		JavascriptExecutor js = (JavascriptExecutor) driver;
	    js.executeScript("window.scrollBy(0,350)", "");
	    
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	
	//WebElement Element=	driver.findElement(By.xpath("//a[contains(text(),'Sylphy Group')]"));
	
//	js.executeScript("arguments[0].scrollIntoView();", Element);
	}
}
