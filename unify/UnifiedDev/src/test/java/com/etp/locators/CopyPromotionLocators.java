package com.etp.locators;

import java.io.FileReader;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;

import com.etp.helper.HelperClass;
import com.opencsv.CSVReader;

public class CopyPromotionLocators extends HelperClass{
	JavascriptExecutor js = (JavascriptExecutor) driver;
	String CSV_file1 = ".\\CSV\\copypromotion.csv";
	CSVReader reader = null;
	
	public void enterpromotion() throws Exception {
		Thread.sleep(20000);
		// log.info("Click on three lines");
		driver.findElement(By.xpath("//*[@id='nav-icon1']")).click();
		Thread.sleep(1000);
		// log.info("Click on Store Administration");
		driver.findElement(By.xpath("//span[contains(text(),'PRICING & PROMOTIONS ')]")).click();
		Thread.sleep(1000);
		driver.findElement(By.linkText("Promotions")).click();
	}
	
	public void savecopypromo() {
		try {
			
			 reader= new CSVReader(new FileReader(CSV_file1));
		     String[] cell=reader.readNext();

		     while((cell= reader.readNext())!=null)
		     {  
		    	
		    	 
		    	 int i=0;
		         String promoname = cell[i]; 
		         String promodesc = cell[i+1];
		
		Thread.sleep(2000);
		driver.findElement(By.xpath("//input[@placeholder='Search By Promo Code or Promo Name']")).sendKeys("checkout");
		Thread.sleep(2000);
		driver.findElement(By.xpath("//input[@placeholder='Search By Promo Code or Promo Name']")).sendKeys("Copy1");
		Thread.sleep(2000);
		driver.findElement(By.xpath("(//button[@id='hb-mat-btn-css-override'])[1]")).click();
    //	Thread.sleep(1000);
	//	driver.findElement(By.xpath("(//button[@class='mat-menu-item'])[4]")).click();
	//	Thread.sleep(1000);
		//driver.findElement(By.xpath("//button[@class='btn activeBtn new_Btn addHeaderBtn']"));
		Thread.sleep(1000);
		driver.findElement(By.xpath("//button[contains(text(),' Copy ')]")).click();
		
		Thread.sleep(20000);
		driver.findElement(By.id("promoName")).sendKeys(promoname);
		
		Thread.sleep(1000);
		driver.findElement(By.id("promoDesc")).sendKeys(promodesc);
		
		Thread.sleep(8000);
		driver.findElement(By.xpath("(//button[contains(text(),' SAVE ')])[1]")).click();
		
		Thread.sleep(8000);
		     }
		
		}catch (Exception e) {
		System.out.println("exception occured in copy promotion"+e);
		}
		
	}

}
