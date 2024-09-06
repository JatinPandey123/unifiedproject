package com.etp.locators;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.etp.commonlinks.ThreeDotsCommon;
import com.etp.helper.HelperClass;





public class BillSaveLocators extends HelperClass {
	WebDriverWait wait = new WebDriverWait(driver, 50);
	public void openpos() {
		try {
			Thread.sleep(6000);
			driver.findElement(By.xpath("//*[@id='nav-icon1']")).click();
			Thread.sleep(1000);
			driver.findElement(By.xpath("//span[contains(text(),'POS ')]")).click();
		} catch (Exception e) {
			System.out.println("exception occurs in opening pos" + " " + e);
		}

	}

	
	public void selectcompany() {
		try {
			//select company
			Thread.sleep(6000);
			driver.findElement(By.xpath("//p[contains(text(),' Sylphy Corp1')]")).click();

		} catch (Exception e) {
			System.out.println("exception occurs in selecting company" + " " + e);
		}
	}

	
	public void selectstore() {
		try {
//			select store
		
			WebElement storesearch = wait
					.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//input[@class='form-control form-placeholder bg_imp ng-untouched ng-pristine ng-valid']")));
			storesearch.sendKeys("MUM1");
		//	Thread.sleep(10000);
		//	driver.findElement(By.xpath("//input[@class='form-control form-placeholder bg_imp ng-untouched ng-pristine ng-valid']")).sendKeys("MUM1");

			Thread.sleep(1000);
			driver.findElement(By.xpath("(//div[@class='card-box'])[1] ")).click();

		} catch (Exception e) {
			System.out.println("exception occurs while selecting store" + " " + e);
		}
	}

	
	public void selectcounter() {
		// select counter
		try {
			Thread.sleep(1000);
			driver.findElement(By.xpath("//div[@class='card-box card-box-active']")).click();

		} catch (Exception e) {
			System.out.println("exception occurs while selecting counter" + " " + e);
		}
	}

	
	public void selectshift() {
		try {

			// select shift begin
			WebElement shiftbegin = wait
					.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[contains(text(),' Begin Shift  ')]")));
			shiftbegin.click();
			
		//	Thread.sleep(1000);
		//	driver.findElement(By.xpath("//button[contains(text(),' Begin Shift  ')]")).click();

			//click on yes button
			Thread.sleep(1000);
			driver.findElement(By.xpath("//button[contains(text(),' Yes ')]")).click();
		} catch (Exception e) {
			System.out.println("exception occur while selecting shift" + " " + e);
		}
	}

	
	public void searchcustomer() {
		try {
			// search customer
//			System.out.println("reached");
//			Thread.sleep(1000);
//			driver.findElement(By.xpath("(//*[@id='Rectangle_3471'])[1]")).click();
//			
//			// add walkin and customer
//			Thread.sleep(2000);
//			driver.findElement(By.xpath("(//button[contains(text(),' APPLY')])[2]))")).click();
//			
//			Thread.sleep(2000);
//			driver.findElement(By.xpath("//*[@id='customer_table_parent']/table/tbody/tr[1]/td[3]/span")).click();

			
			
			
			
		} catch (Exception e) {
			System.out.println("exception occur while adding walkin and customer" + " " + e);
		}
	}

	
	public void scanproduct() {
		try {
			// product search
			
			Thread.sleep(10000);
			driver.findElement(By.xpath("//input[@placeholder='Product Search']")).sendKeys("34343244");
			
			//product name click
			Thread.sleep(1000);
			driver.findElement(By.xpath("//li[@id='productFirstLi']")).click();
		} catch (Exception e) {
			System.out.println("exception occur while scanning product" + " " + e);
		}
	}

	
	public void selectcheckout() {
		try {
			//click on checkout button
			Thread.sleep(10000);
			driver.findElement(By.xpath("//div[contains(text(),' CHECKOUT ')]")).click();
		} catch (Exception e) {
			System.out.println("exception occur while clicking on checkout" + " " + e);
		}
	}

	
	public void selectamount() {
		try {
			// click on cash
			Thread.sleep(1000);
			WebElement cash = wait
					.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//p[contains(text(),' Cash')]")));
			cash.click();
			
		//	driver.findElement(By.xpath("//p[contains(text(),' Cash')]")).click();
			Thread.sleep(1000);
			driver.findElement(By.xpath("//button[contains(text(),'ACCEPT')]")).click();
		} catch (Exception e) {
			System.out.println("exception occured while billing amount" + " " + e);
		}
	}

	
	public void clicksavebill() {
		try {
			//save bill
			Thread.sleep(10000);
			driver.findElement(By.xpath("(//div[contains(text(),' SUBMIT ')])[1]")).click();
			
			Thread.sleep(1000);
			driver.findElement(By.xpath("//div[contains(text(),' SAVE ')]")).click();
			
			System.out.println("bill save successful");
			
			System.out.println("click on three dots");
		//	ThreeDotsCommon threeDots = new ThreeDotsCommon();
		//	threeDots.threedots();
			Thread.sleep(6000);
			WebElement threedots = wait
					.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@id='nav-icon1']")));
			
			threedots.click();
		//	Thread.sleep(1000);
		//	driver.findElement(By.xpath("//div[@id='nav-icon1']")).click();
			System.out.println("click on shift end");
			Thread.sleep(1000);
			driver.findElement(By.linkText("SHIFT END")).click();
			
			System.out.println("click on yes");
			Thread.sleep(1000);
			driver.findElement(By.xpath("(//button[contains(text(),' Yes ')])[2]")).click();
			
			Thread.sleep(1000);
			driver.findElement(By.xpath("(//button[contains(text(),' SHIFT END ')])[1]")).click();
			
			Thread.sleep(1000);
			driver.findElement(By.xpath("//button[contains(text(),' Yes ')]")).click();
			
			WebDriverWait wait = new WebDriverWait(driver, 10);
			Alert alert = wait.until(ExpectedConditions.alertIsPresent());
			// Accept the alert
			alert.accept();
			
			
			
		} catch (Exception e) {
			System.out.println("exception occured while selecting save bill" + " " + e);
		}
	}
}
