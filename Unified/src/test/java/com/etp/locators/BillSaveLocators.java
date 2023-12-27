package com.etp.locators;

import org.openqa.selenium.By;

import com.etp.helper.HelperClass;

public class BillSaveLocators extends HelperClass{

	public void openpos() {
		try {
		Thread.sleep(1000);
		driver.findElement(By.xpath("//*[@id='nav-icon1']")).click();
		Thread.sleep(1000);
		driver.findElement(By.xpath("//span[contains(text(),'POS ')]")).click();
		}catch (Exception e) {
			System.out.println("exception occurs in opening pos"+e);
		}
		
	}

	public void selectcompany() {
		try {
		Thread.sleep(1000);
		driver.findElement(By.xpath("//p[contains(text(),' Sylphy Corp1')]")).click();
		
		
		//select store
		Thread.sleep(6000);
		driver.findElement(By.xpath("//div[contains(text(),' MUM286 ')]")).click();
		
	//	Thread.sleep(1000);
	//	driver.findElement(By.xpath("//input[@placeholder='Search Store']")).sendKeys("MUM1");
		
//		Thread.sleep(1000);
//		driver.findElement(By.xpath("(//div[@class='card-box'])[1] ")).click();
		
		}catch (Exception e) {
			System.out.println("exception occurs in selecting company"+e);
		}
	}

	public void selectcounter() {
		try {
			Thread.sleep(1000);
			driver.findElement(By.xpath("//div[@class='card-box card-box-active']")).click();
		
		}catch (Exception e) {
			System.out.println("exception occurs while selecting counter"+" "+e);
		}
	}

	public void selectshift() {
		try {
	    Thread.sleep(2000);
		driver.findElement(By.xpath("//button[contains(text(),' Begin Shift  ')]")).click();
		}catch (Exception e) {
			System.out.println("exception occur while selecting shift"+e);
		}
	}

	public void scanproduct() {
	try {
	 Thread.sleep(2000);
	 driver.findElement(By.xpath("//button[contains(text(),' Yes ')]")).click();
	}catch (Exception e) {
		System.out.println("exception occur while scanning product"+e);
	}
	}

	public void searchcustomer() {
		try {
			System.out.println("reached");
	//driver.findElement(By.xpath("")).click();
		}catch (Exception e) {
			System.out.println("exception occur while adding walkin and customer"+" "+e);
		}
	}

	public void selectcheckout() {
		try {
		driver.findElement(By.xpath("")).click();
		}catch (Exception e) {
			System.out.println("exception occur while clicking on checkout"+e);
		}
	}

	public void selectamount() {
		try {
		driver.findElement(By.xpath("")).click();
		}catch (Exception e) {
			System.out.println("exception occured while billing amount"+e);
		}
	}

	public void clicksavebill() {
		try {
		driver.findElement(By.xpath("")).click();
		}catch (Exception e) {
			System.out.println("exception occured while selecting save bill"+e);
		}
	}

}
