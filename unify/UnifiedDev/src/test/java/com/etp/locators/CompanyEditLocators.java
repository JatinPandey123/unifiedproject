package com.etp.locators;

import org.openqa.selenium.By;

import com.etp.helper.HelperClass;

public class CompanyEditLocators extends HelperClass{

	
	public void threedotscomp() {
		try {
		Thread.sleep(1000);
		driver.findElement(By.xpath("(//span[@class='mat-button-wrapper'])[1]")).click();
		}catch (Exception e) {
			System.out.println("Exception occured while clicking on three dots"+" "+e);
		}
	}

	public void companyedit() {
		try {
		Thread.sleep(1000);	
		driver.findElement(By.xpath("//span[contains(text(),'Edit')]")).click();
		}catch (Exception e) {
			System.out.println("Exception occured while clicking on edit"+" "+e);
		}
		
	}

	public void editdetails() {
		try {
		Thread.sleep(1000);	
		driver.findElement(By.xpath("//input[@placeholder='Name']")).sendKeys("5");
		
		Thread.sleep(1000);
		driver.findElement(By.xpath("(//button[contains(text(),' UPDATE ')])[1]")).click();
		}catch (Exception e) {
			// TODO: handle exception
		}
		
	}
	
	

}
