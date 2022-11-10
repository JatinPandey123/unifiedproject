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
		
		driver.findElement(By.id("inputPassword")).sendKeys(strUserPassword);
		System.out.println("User has entered password");
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
			Thread.sleep(5000);
			System.out.println("Click on Group");
		WebElement Element=	driver.findElement(By.xpath("//a[contains(text(),'Sylphy Group')]"));
		Element.click();
		Thread.sleep(5000);
		System.out.println("Click on three lines");
		driver.findElement(By.xpath("//*[@id='nav-icon1']")).click();
		Thread.sleep(5000);
		System.out.println("Click on Product Management");
		driver.findElement(By.xpath("//span[contains(text(),'PRODUCT MANAGEMENT ')]")).click();
		Thread.sleep(5000);
		System.out.println("Click on Product Master");
		driver.findElement(By.linkText("Product Master")).click();
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		System.out.println("Selected Group");
	}
}
