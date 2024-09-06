package com.etp.commonlinks;

import org.openqa.selenium.By;

import com.etp.helper.HelperClass;

public class Modulemenu extends HelperClass{
	
	 public void Dashboard() {
		
	  }
	 
	 public void CallToAction() {
//		 try {
//			 Thread.sleep(1000);
//			 driver.findElement(By.xpath("//span[contains(text(),'PRODUCT MANAGEMENT ')]")).click();
//			 }catch (Exception e) {
//			System.out.println("Expection occured while clicking on Product Management"+" "+e);
//			}
	  }
	 public void OrderManagement() {
//		 try {
//			 Thread.sleep(1000);
//			 driver.findElement(By.xpath("//span[contains(text(),'PRODUCT MANAGEMENT ')]")).click();
//			 }catch (Exception e) {
//			System.out.println("Expection occured while clicking on Product Management"+" "+e);
//			}
	  }
	 public void InventoryManagement() {
//		 try {
//			 Thread.sleep(1000);
//			 driver.findElement(By.xpath("//span[contains(text(),'INVENTORY MANAGEMENT ')]")).click();
//			 }catch (Exception e) {
//			System.out.println("Expection occured while clicking on Inventory Management"+" "+e);
//			}
	  }
	 public void ProductManagement() {
	 try {
	 Thread.sleep(1000);
	 driver.findElement(By.xpath("//span[contains(text(),'PRODUCT MANAGEMENT ')]")).click();
	 }catch (Exception e) {
	 System.out.println("Expection occured while clicking on Product Management"+" "+e);
	 }
	  }
	 public void PricingAndPromotion() {
//		 try {
//			 Thread.sleep(1000);
//			 driver.findElement(By.xpath("//span[contains(text(),'PRODUCT MANAGEMENT ')]")).click();
//			 }catch (Exception e) {
//			System.out.println("Expection occured while clicking on Product Management"+" "+e);
//			}	
	  }
	 public void StatementOfAccount() {
//		 try {
//			 Thread.sleep(1000);
//			 driver.findElement(By.xpath("//span[contains(text(),'PRODUCT MANAGEMENT ')]")).click();
//			 }catch (Exception e) {
//			System.out.println("Expection occured while clicking on Product Management"+" "+e);
//			}
	  }
	 
	 public void Integrations() {
//		 try {
//			 Thread.sleep(1000);
//			 driver.findElement(By.xpath("//span[contains(text(),'PRODUCT MANAGEMENT ')]")).click();
//			 }catch (Exception e) {
//			System.out.println("Expection occured while clicking on Product Management"+" "+e);
//			}
	  }
	 public void ApiManagement() {
//		 try {
//			 Thread.sleep(1000);
//			 driver.findElement(By.xpath("//span[contains(text(),'PRODUCT MANAGEMENT ')]")).click();
//			 }catch (Exception e) {
//			System.out.println("Expection occured while clicking on Product Management"+" "+e);
//			}
	  }
	 public void Administration() {
		 try {
			 Thread.sleep(1000);
			 driver.findElement(By.xpath("//span[contains(text(),'ADMINISTRATION ')]")).click();
			 }catch (Exception e) {
			System.out.println("Expection occured while clicking on Administration"+" "+e);
			}
	  }
}
