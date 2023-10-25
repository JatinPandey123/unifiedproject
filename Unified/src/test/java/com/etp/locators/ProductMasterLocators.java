package com.etp.locators;

import java.io.FileReader;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.Duration;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Random;

import java.util.concurrent.TimeUnit;
import java.util.function.Function;

import org.apache.log4j.Logger;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.etp.helper.HelperClass;
import com.opencsv.CSVReader;

public class ProductMasterLocators extends HelperClass{
	
	Logger log = Logger.getLogger("devpinoyLogger");
	JavascriptExecutor js = (JavascriptExecutor) driver;
	String CSV_file1 = ".\\CSV\\ProductMaster.csv";
	 CSVReader reader = null;
	 Random r = new Random();
	 
	public void enterproductmaster() {
		try {
			Thread.sleep(5000);
		log.info("Click on three lines");
		driver.findElement(By.xpath("//*[@id='nav-icon1']")).click();
		Thread.sleep(5000);
		log.info("Click on Product Management");
		driver.findElement(By.xpath("//span[contains(text(),'PRODUCT MANAGEMENT ')]")).click();
		Thread.sleep(5000);
		log.info("Click on Product Master");
		driver.findElement(By.linkText("Product Master")).click();
		
//		WebDriverWait wait = new WebDriverWait(driver, 50);
//		WebElement element4 = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//span[contains(text(),' Sylphy Corp')]")));
//		element4.click();

		
//		WebDriverWait waitss = new WebDriverWait(driver, 50);
//		WebElement element5 = waitss.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//li[contains(text(),' Bata QA ')]")));
//		element5.click();	
		
		}catch (Exception e) {
			// TODO: handle exception
			System.out.println("exception occured in enter product master");
		}
	}

//	public void productcreationbutton() {
//		
//	
//			WebDriverWait wait = new WebDriverWait(driver, 40);
//			WebElement element3 = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[@id='plusButton']")));
//			element3.click();
//			driver.findElement(By.xpath("//button[@class='hb-add-icon-btn']")).click();
//			
//	}

//	public void singleproductbutton() {
//		WebDriverWait wait = new WebDriverWait(driver, 20);
//		WebElement element4 = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[@class='add-btn-popup-second-btn']")));
//		element4.click();
//		
//	}
//	
	
	public void fillproductdetail() throws Exception {
	
			 reader= new CSVReader(new FileReader(CSV_file1));
		     String[] cell=reader.readNext();

		     while((cell= reader.readNext())!=null)
		     {  
		    	
		    	 
		    	 int i=0;
		         String pcode = cell[i]; 
		         String pname = cell[i+1];
		         String ptype = cell[i+2];
		         String brand = cell[i+3];
		         String segment = cell[i+4];
		         String category = cell[i+5];
		         String sub_category = cell[i+6];
		         String pclass = cell[i+7];
		         String seasonId = cell[i+8]; 
		         String departmentId = cell[i+9];
		         String procurementgroup = cell[i+10];
		         String pricepoint = cell[i+11];
		         String subclass = cell[i+12];
		         String uan = cell[i+13];
		         String uom = cell[i+14];
		         String length = cell[i+15];
		         String width = cell[i+16];
		         String height = cell[i+17];
		         String volume = cell[i+18];
		         String grossweight = cell[i+19];
		         String netweight = cell[i+20];
		         String description = cell[i+21];
		         String imageurl=cell[i+22];
		         
		         
		     	// Create object of SimpleDateFormat class and decide the format
		    	 DateFormat dateFormat = new SimpleDateFormat("dd");
		    	 DateFormat dateFormat1 = new SimpleDateFormat("dd HH:mm:ss");
		    	 
		    	 //System.out.println(dateFormat.format(date));
		    	 //get current date time with Date()
		    	 Date date = new Date();
		    	 
		    	 // Now format the date
		    	 String date1= dateFormat.format(date);
		    	 String date2= dateFormat1.format(date);
		    	 
		    	 
		    	 int dateInt = Integer.parseInt(date1);
				 System.out.println(dateInt);
				 System.out.println(date2);
				 
				 int FdateInt = dateInt;
				 String FromDateF =String.valueOf(FdateInt);
				 
				 System.out.println(FromDateF);
				 
				 
				 String FromDate = FromDateF;
				 int ToDateInt = dateInt+10;
				 String ToDate =String.valueOf(ToDateInt);
		    	
		         
		     	WebDriverWait wait = new WebDriverWait(driver, 50);
				WebElement element3 = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[@id='plusButton']")));
				element3.click();
				
				WebDriverWait waitss = new WebDriverWait(driver, 50);
				WebElement element4 = waitss.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[@class='add-btn-popup-second-btn']")));
				element4.click();
		         
		//Thread.sleep(20000);
				
				
				
	//------------------------------------------Basic Information-----------------------------------------------------------------//
	
		WebDriverWait waitsss = new WebDriverWait(driver, 50);
		WebElement element = waitsss.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@class='mat-option-text'][contains(text(),' Clothes ')]")));
		element.click();
		//String pdtcatlog="Helptext";
		
		log.info("Select Product Catalog");
		

		Thread.sleep(1000);
	//	log.info("Product Code");
		driver.findElement(By.id("productCode")).sendKeys(pcode);
		Thread.sleep(1000);
		log.info("Product Name");
		driver.findElement(By.xpath("//*[@formcontrolname='productName']")).sendKeys(pname);
		
		Thread.sleep(1000);
		log.info("Product Type");
		//driver.findElement(By.id("productType")).click();
		
		 WebElement Segmenttt= driver.findElement(By.xpath("//*[@ng-reflect-name='productType']"));
		 Segmenttt.click();
			    List<WebElement> segmentDr = driver.findElements(By.tagName("mat-option"));
				 for(WebElement values:segmentDr)
				 {
					 String requiredvalue=ptype; 
					if(requiredvalue.equalsIgnoreCase(values.getText())) {
						System.out.println(values.getText());
						values.click();
						break;
					}
				 }
				 
				 
				 Thread.sleep(1000);
				 log.info("inventary handling");
				 driver.findElement(By.xpath("//mat-checkbox[@name='invHandling']")).click();
				 
				
				 Thread.sleep(1000);
		WebElement labelbrand= driver.findElement(By.xpath("(//p[contains(text(),' Product Attributes Details ')])"));
		
		js.executeScript("arguments[0].scrollIntoView();", labelbrand);
		
		
	//	 Thread.sleep(1000);
		
		
		
		
	
//---------------------------------------------------Product Attributes Details-----------------------------------------------------//
				 
		log.info("Brand is selected");
				 WebElement Segmentte= driver.findElement(By.xpath("//*[@ng-reflect-name='brandId']"));
				 Segmentte.click();
					    List<WebElement> segmentDw = driver.findElements(By.tagName("mat-option"));
						 for(WebElement values:segmentDw)
						 {
							 String requiredvalue=brand; 
							if(requiredvalue.equalsIgnoreCase(values.getText())) {
								System.out.println(values.getText());
								values.click();
								break;
							}
						 }
						 
						 
						 log.info("Product Segment is selected");
			 WebElement Segmentttt= driver.findElement(By.xpath("//*[@ng-reflect-name='productSegId']"));
			 Segmentttt.click();
			 List<WebElement> segmentDf = driver.findElements(By.tagName("mat-option"));
				for(WebElement values:segmentDf)
					{
					 String requiredvalue=segment; 
					 if(requiredvalue.equalsIgnoreCase(values.getText())) {
					 System.out.println(values.getText());
					 values.click();
						break;
							}
						}	
						 
				log.info("Product Category is selected");
			 WebElement Segmentt= driver.findElement(By.xpath("//*[@ng-reflect-name='productCatId']"));
			 Segmentt.click();
				    List<WebElement> segmentD = driver.findElements(By.tagName("mat-option"));
					 for(WebElement values:segmentD)
					 {
						 String requiredvalue=category; 
						if(requiredvalue.equalsIgnoreCase(values.getText())) {
							System.out.println(values.getText());
							values.click();
							break;
						}
					 }
		 
					 log.info("Product Sub Category is selected");
		 WebElement Segme= driver.findElement(By.xpath("//*[@ng-reflect-name='productSubCatId']"));
		 Segme.click();
			    List<WebElement> segme = driver.findElements(By.tagName("mat-option"));
				 for(WebElement values:segme)
				 {
					 String requiredvalue=sub_category; 
					if(requiredvalue.equalsIgnoreCase(values.getText())) {
						System.out.println(values.getText());
						values.click();
						break;
					}
				 }						 
		 
		 
				 log.info("Product Class is selected");
		 WebElement Segment= driver.findElement(By.xpath("//*[@ng-reflect-name='productClassId']"));
		 Segment.click();
			    List<WebElement> segmentDD = driver.findElements(By.tagName("mat-option"));
			  
				 for(WebElement values:segmentDD)
				 {
					 String requiredvalue=pclass; 
					if(requiredvalue.equalsIgnoreCase(values.getText())) {
						System.out.println(values.getText());
						values.click();
						break;
					}
				 }			
		 
				 log.info("Season Id is selected");
		 WebElement seasonI= driver.findElement(By.xpath("//*[@ng-reflect-name='seasonId']"));
		 seasonI.click();
			    List<WebElement> season = driver.findElements(By.tagName("mat-option"));
				 for(WebElement values:season)
				 {
					 String requiredvalue=seasonId; 
					if(requiredvalue.equalsIgnoreCase(values.getText())) {
						System.out.println(values.getText());
						values.click();
						break;
					}
				 }					
		 

		 
				 log.info("Department Id is selected");
		 WebElement Departments= driver.findElement(By.xpath("//*[@ng-reflect-name='departmentId']"));
		 Departments.click();
			    List<WebElement> segment2 = driver.findElements(By.tagName("mat-option"));
			   
				 for(WebElement values:segment2)
				 {
					 String requiredvalue=departmentId; 
					if(requiredvalue.equalsIgnoreCase(values.getText())) {
						System.out.println(values.getText());
						values.click();
						break;
					}
				 }		
				 
				 
				 log.info("Procurement Group is selected");
				 WebElement Depa= driver.findElement(By.xpath("//*[@ng-reflect-name='procurementGrpId']"));
				 Depa.click();
					    List<WebElement> segm = driver.findElements(By.tagName("mat-option"));
					   
						 for(WebElement values:segm)
						 {
							 String requiredvalue=procurementgroup; 
							if(requiredvalue.equalsIgnoreCase(values.getText())) {
								System.out.println(values.getText());
								values.click();
								break;
							}
						 }		
						 
						 log.info("Pricepoint is selected");
						 WebElement Departme= driver.findElement(By.xpath("//*[@ng-reflect-name='pricePointId']"));
						 Departme.click();
							    List<WebElement> segmel = driver.findElements(By.tagName("mat-option"));
							   
								 for(WebElement values:segmel)
								 {
									 String requiredvalue=pricepoint; 
									if(requiredvalue.equalsIgnoreCase(values.getText())) {
										System.out.println(values.getText());
										values.click();
										break;
									}
								 }		
								 
				    
								 log.info("Product SubClass is selected");
					WebElement D= driver.findElement(By.xpath("//*[@ng-reflect-name='prodSubClassId']"));
					D.click();
				    List<WebElement> se = driver.findElements(By.tagName("mat-option"));
					   
				    for(WebElement values:se)
					 {
						String requiredvalue=subclass; 
						if(requiredvalue.equalsIgnoreCase(values.getText())) {
						System.out.println(values.getText());
						values.click();
						break;
								}
							 }	
				 
		 Thread.sleep(1000);
		 log.info("UAN NUMBER");
	driver.findElement(By.xpath("//*[@formcontrolname='aliasNumber']")).sendKeys(uan);	
	
	
	//---------------------------------------Product Dimensions----------------------------------------------------------------------//
	
	
	WebElement lab= driver.findElement(By.xpath("(//p[contains(text(),' Product Dimensions ')])[1]"));
	
	js.executeScript("arguments[0].scrollIntoView();", lab);
	
	
	log.info("UOM is selected");
		WebElement uo= driver.findElement(By.xpath("//*[@ng-reflect-name='uomId']"));
		uo.click();
	    List<WebElement> uomm = driver.findElements(By.tagName("mat-option"));
		   
	   for(WebElement values:uomm)
		 {
			String requiredvalue=uom; 
			if(requiredvalue.equalsIgnoreCase(values.getText())) {
			System.out.println(values.getText());
			values.click();
			break;
					}
				 }	
	   
	   log.info("Length");
	   Thread.sleep(1000);
	   driver.findElement(By.xpath("//input[@formcontrolname='length']")).sendKeys(length);
	   
	   
	   log.info("Width");
	   Thread.sleep(1000);
	   driver.findElement(By.xpath("//input[@formcontrolname='width']")).sendKeys(width);
	
	   log.info("Height");
	   Thread.sleep(1000);
	   driver.findElement(By.xpath("//input[@formcontrolname='height']")).sendKeys(height);
	   
	   log.info("Volume");
	   Thread.sleep(1000);
	   driver.findElement(By.xpath("//input[@formcontrolname='volume']")).sendKeys(volume);
	   
	   log.info("gross weight");
	   Thread.sleep(1000);
	   driver.findElement(By.xpath("//input[@formcontrolname='grossWeight']")).sendKeys(grossweight);
	   
	   log.info("Net Weight");
	   Thread.sleep(1000);
	   driver.findElement(By.xpath("//input[@formcontrolname='netWeight']")).sendKeys(netweight);
	   
	   
//--------------------------------------------Product Expiry & Warranty Details------------------------------------------------------//
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   //-------------------------------------------------Prices Details-------------------------------------------------------//
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
//------------------------------------Product Description----------------------------------------------------------------------------//
	   
	   
	   Thread.sleep(1000);
	   WebElement descrip= driver.findElement(By.xpath("//p[contains(text(),' Product Description ')]"));
		
		js.executeScript("arguments[0].scrollIntoView();", descrip);
		
		
		log.info("Product Description");
		   Thread.sleep(1000);
		WebElement des=	driver.findElement(By.xpath("//div[@class='angular-editor-textarea']"));
		des.click();
		des.sendKeys(description);
		
		
//----------------------------------------Inventory & Replenishment------------------------------------------------------------------//
		
		
		
		
		
		
		
		
		
		
//--------------------------------------------Product Image and Video-----------------------------------------------------------------//
		log.info("Image");
		   Thread.sleep(1000);
		 WebElement image= driver.findElement(By.xpath("(//p[contains(text(),' Product Image and Video ')])[1]"));		
			js.executeScript("arguments[0].scrollIntoView();", image);
			
		//	log.info("Image url");
			   Thread.sleep(3000);
			   
			WebElement img= driver.findElement(By.xpath("//input[@placeholder='Enter URL']"));
			img.click();
			img.sendKeys("https://5.imimg.com/data5/AS/SX/TG/SELLER-473986/liquid-soap-500x500.jpg");
			
			 Thread.sleep(3000);
			driver.findElement(By.xpath("//span[contains(text(),' SAVE')]")).click();
			
			 Thread.sleep(3000);
				driver.findElement(By.xpath("//button[@class='hb-default-btn-active ng-star-inserted']")).click();
			
		     }
	}
	
}








//-----------------------------------------------------Customer Demographics------------------------------------------------------------//


//	public void saveproduct(){
//		try {
//			 Thread.sleep(4000);
//		log.info("Save");
//		  
//		driver.findElement(By.xpath("//span[contains(text(),' SAVE')]")).click();
//		
//		   Thread.sleep(3000);
//			driver.findElement(By.xpath("//button[@class='hb-white-btn width-35per-imp'][1]")).click();
//		}catch (Exception e) {
//			System.out.println("Exception Occurred");
//		}
//		
//	}
