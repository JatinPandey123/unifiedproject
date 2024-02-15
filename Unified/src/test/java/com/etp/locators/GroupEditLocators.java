package com.etp.locators;
import org.openqa.selenium.By;
import com.etp.helper.HelperClass;


public class GroupEditLocators extends HelperClass{

	public void threedotsgrp() {
		try {
			Thread.sleep(3000);
			driver.findElement(By.xpath("(//span[@class='mat-button-wrapper'])[1]")).click();
		}catch (Exception e) {
			System.out.println("exception occurred while clicking on three dots"+" "+e);
		}
	}

	public void editgroup() {
		try {
			Thread.sleep(1000);
			driver.findElement(By.xpath("//span[contains(text(),'Edit')]")).click();
		}catch (Exception e) {
			System.out.println("Exception occurred while clicking on edit button"+" "+e);
		}
		
	}

	public void updatedetailsgrp() {
		try {
			Thread.sleep(1000);
			driver.findElement(By.id("groupName")).sendKeys("5");
			
			Thread.sleep(1000);
			driver.findElement(By.xpath("//button[contains(text(),' UPDATE ')]")).click();
			
			Thread.sleep(1000);
			driver.findElement(By.xpath("//button[contains(text(),' Yes ')]")).click();
		}catch (Exception e) {
			System.out.println("Exception occurred while clicking on edit button"+" "+e);
		}
		
	}

}
