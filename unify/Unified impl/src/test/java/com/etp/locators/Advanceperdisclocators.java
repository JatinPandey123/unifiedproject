package com.etp.locators;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;
import java.io.FileReader;
import java.time.Duration;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.apache.http.message.BasicListHeaderIterator;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.Point;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.etp.helper.HelperClass;
import com.opencsv.CSVReader;

import junit.framework.Assert;

public class Advanceperdisclocators extends HelperClass {

	JavascriptExecutor js = (JavascriptExecutor) driver;
	String CSV_file1 = ".\\CSV\\advancepromo.csv";
	CSVReader reader = null;

	public void enterpromo() throws Exception {
		try {
			Thread.sleep(6000);
			// log.info("Click on three lines");
			driver.findElement(By.xpath("//*[@id='nav-icon1']")).click();
			Thread.sleep(1000);
			// log.info("Click on Store Administration");
			driver.findElement(By.xpath("//span[contains(text(),'PRICING & PROMOTIONS ')]")).click();
			Thread.sleep(1000);

			driver.findElement(By.linkText("Promotions")).click();

		} catch (Exception e) {
			// TODO: handle exception

			System.out.println("exception occured" + e);
		}

	}

	public void enterdetailspromo() {
		// TODO Auto-generated method stub
		try {
			 reader= new CSVReader(new FileReader(CSV_file1));
		     String[] cell=reader.readNext();

		     while((cell= reader.readNext())!=null)
		     {  
		    	
		    	 
		    	 int i=0;
		         String promoname = cell[i]; 
		         String promodesc = cell[i+1];
		        
		
				Thread.sleep(6000);

				WebDriverWait wait = new WebDriverWait(driver, 10000);
	    		WebElement element3 = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@id='new-wrapper-id']//button[@class='btn-round']")));
	    		element3.click();
	    		
	    //		WebDriverWait wait = new WebDriverWait(driver, 50);
				WebElement element4 = wait.until(
				ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[contains(text(),' ADVANCED ')]")));
				element4.click();
				
				WebElement element10 = wait.until(
				ExpectedConditions.visibilityOfElementLocated(By.xpath("//p[contains(text(),'In this promotion Discounted on product will be offered based on Checkout % or Amount')]")));
				element10.click();
				
				WebElement element7 = wait.until(
						ExpectedConditions.visibilityOfElementLocated(By.xpath("//input[@formcontrolname='promoName']")));
				element7.sendKeys(promoname);

				Thread.sleep(2000);
				driver.findElement(By.xpath("//textarea[@placeholder='Enter Promotion Description']"))
						.sendKeys(promodesc);
				
//				JavascriptExecutor js1 = (JavascriptExecutor) driver;
//				WebElement Elee1 = driver.findElement(By.xpath("//span[contains(text(),'Promotion Conditions')]"));
//				Thread.sleep(1000);
//				js1.executeScript("arguments[0].scrollIntoView();", Elee1);
				Thread.sleep(1000);
				
				driver.findElement(By.xpath("//button[@class='btn activeBtn new_Btn addHeaderBtn']")).click();
				
				Thread.sleep(1000);
				driver.findElement(By.xpath("(//span[@class='mainMenuTree ng-star-inserted'])[1]")).click();
				
				Thread.sleep(1000);
				driver.findElement(By.xpath("//span[contains(text(),' Product Include ')]")).click();
				
				WebElement element14 = wait.until(
						ExpectedConditions.visibilityOfElementLocated(By.xpath("//span[contains(text(),' ADD PRODUCT ')]")));
						element14.click();
						
					//	Thread.sleep(10000);
						
						//(//input[@id="file-input"])[1]
						//div[@id='addProductInclude']//input[@id='file-input']
						
						WebElement a=driver.findElement(By.xpath("//div[@id='addProductInclude']//input[@id='file-input']"));
						System.out.println(a.getText()+"    "+a.getTagName());
								
						Actions actions = new Actions(driver); 
						actions.moveToElement(a).click().build().perform();
						
						  StringSelection ss = new StringSelection("C:\\Users\\Lenovo\\Desktop\\Product Include\\promoInclude1.xls");
						    Toolkit.getDefaultToolkit().getSystemClipboard().setContents(ss, null);

						    //imitate mouse events like ENTER, CTRL+C, CTRL+V
						    Robot robot;
							try {
								robot = new Robot();
							
						    robot.delay(500);
						    robot.keyPress(KeyEvent.VK_ENTER);
						    robot.keyRelease(KeyEvent.VK_ENTER);
						    Thread.sleep(1000);	
						    robot.keyPress(KeyEvent.VK_CONTROL);
						    Thread.sleep(1000);
						    robot.keyPress(KeyEvent.VK_V);
						    Thread.sleep(1000);
						    robot.keyRelease(KeyEvent.VK_V);
						    robot.keyRelease(KeyEvent.VK_CONTROL);
						    Thread.sleep(1000);
						    robot.keyPress(KeyEvent.VK_ENTER);
						    Thread.sleep(1000);
						    robot.keyRelease(KeyEvent.VK_ENTER);
						    robot.delay(100);
						    robot.keyRelease(KeyEvent.VK_ENTER);
						
							} catch (AWTException e) {
								e.printStackTrace();
							}
							Thread.sleep(20000);
							driver.findElement(By.xpath("(//span[contains(text(),' Brand ')])[1]")).click();
							
							Thread.sleep(1000);
							driver.findElement(By.xpath("//span[contains(text(),'ADD BRAND ')]")).click();
							
							Thread.sleep(1000);
							driver.findElement(By.xpath("(//label[@class='mat-checkbox-layout'])[9]")).click();		
							
							Thread.sleep(1000);
							driver.findElement(By.xpath("(//button[contains(text(),' ADD ')])[2]")).click();
							
							Thread.sleep(20000);
							driver.findElement(By.xpath("(//span[@class='mainMenuTree ng-star-inserted'])[3]")).click();
							Thread.sleep(1000);
							driver.findElement(By.xpath("//span[contains(text(),' Store Include ')]")).click();
							
							Thread.sleep(1000);
							WebElement element17 = wait.until(
							ExpectedConditions.visibilityOfElementLocated(By.xpath("//span[contains(text(),' ADD STORE ')]")));
							element17.click();
						
							
							WebElement aa=driver.findElement(By.xpath("(//div[@id='new-wrapper-id']//input[@id='file-input'])[2]"));
							System.out.println(aa.getText()+"    "+aa.getTagName());
									
							Actions actionss = new Actions(driver); 
							actionss.moveToElement(aa).click().build().perform();
							
							  StringSelection sss = new StringSelection("C:\\Users\\Lenovo\\Downloads\\storeInclude1.xls");
							    Toolkit.getDefaultToolkit().getSystemClipboard().setContents(sss, null);

							    //imitate mouse events like ENTER, CTRL+C, CTRL+V
							    Robot robots;
								try {
									robots = new Robot();
								
							    robots.delay(500);
							    robots.keyPress(KeyEvent.VK_ENTER);
							    robots.keyRelease(KeyEvent.VK_ENTER);
							    Thread.sleep(1000);	
							    robots.keyPress(KeyEvent.VK_CONTROL);
							    Thread.sleep(1000);
							    robots.keyPress(KeyEvent.VK_V);
							    Thread.sleep(1000);
							    robots.keyRelease(KeyEvent.VK_V);
							    robots.keyRelease(KeyEvent.VK_CONTROL);
							    Thread.sleep(1000);
							    robots.keyPress(KeyEvent.VK_ENTER);
							    Thread.sleep(1000);
							    robots.keyRelease(KeyEvent.VK_ENTER);
							    robots.delay(100);
							    robots.keyRelease(KeyEvent.VK_ENTER);
							
								} catch (AWTException e) {
									e.printStackTrace();
								}
								
								Thread.sleep(2000);
								driver.findElement(By.xpath("(//span[@class='mainMenuTree ng-star-inserted'])[4]")).click();
								Thread.sleep(1000);
								driver.findElement(By.xpath("//span[contains(text(),' Promo Duration ')]")).click();
								Thread.sleep(1000);
								driver.findElement(By.xpath("(//*[@class='mat-datepicker-toggle-default-icon ng-star-inserted'])[1]"))
								.click();
						String fromdate="13 DEC 2023";
						String f = fromdate;
						String[] dates = f.split(" ");

						driver.findElement(By.xpath("(//div[@class='mat-calendar-controls']/button)[1]")).click();

						List<WebElement> year = driver.findElements(By.xpath("//td"));
						Thread.sleep(1000);
						int k = 0;
						while (true) {
							if ((Integer.parseInt(dates[2])) < (Integer
									.parseInt(driver.findElement(By.xpath("(//td[@role='gridcell'])[1]")).getText()))) {
								Thread.sleep(1000);
								driver.findElement(By.xpath("//div[@class='mat-calendar-controls']/button[2]")).click();
								year = driver.findElements(By.xpath("//td"));
							}
							for (WebElement c : year) {
								if (dates[2].equalsIgnoreCase(c.getText())) {
									System.out.println(c.getText());
									c.click();
									k = 1;
									break;
								}
							}
							if (k == 1)
								break;
						}
						List<WebElement> month = driver.findElements(By.xpath("//td"));
						Thread.sleep(1000);
						for (WebElement c : month) {
							if (dates[1].equalsIgnoreCase(c.getText())) {
								c.click();
								break;
							}
						}

						List<WebElement> caldate = driver.findElements(By.xpath("//td"));
						Thread.sleep(1000);
						for (WebElement c : caldate) {
							System.out.println(c.getText());
							if (dates[0].equalsIgnoreCase(c.getText())) {
								c.click();
								break;
							}
						}
				
						// from time
						Thread.sleep(1000);
						// db.sysloginfo(log,"Click on From Time");
						driver.findElement(By.xpath("(//*[@class='ngx-material-timepicker-toggle'])[1]")).click();
						// Thread.sleep(3000);
						// db.sysloginfo(log,"Click on time HH (22)");

						driver.findElement(By.xpath(
								"//*[@class=\"clock-face__number clock-face__number--inner ng-star-inserted\"]/..//span[text()=' 22']"))
								.click();
						Thread.sleep(3000);

						// db.sysloginfo(log,"Click on OK");
						driver.findElement(By.xpath("(//*[@class='timepicker-button']/span)[2]")).click();
						Thread.sleep(2000);

						driver.findElement(By.xpath("(//*[@class='mat-datepicker-toggle-default-icon ng-star-inserted'])[2]"))
						.click();
						
				String ff = "13 DEC 2023";
				String[] dates1 = ff.split(" ");

				driver.findElement(By.xpath("(//div[@class='mat-calendar-controls']/button)[1]")).click();

				List<WebElement> years = driver.findElements(By.xpath("//td"));
				Thread.sleep(1000);
				int kk = 0;
				while (true) {
					if ((Integer.parseInt(dates1[2])) < (Integer
							.parseInt(driver.findElement(By.xpath("(//td[@role='gridcell'])[1]")).getText()))) {
						Thread.sleep(1000);
						driver.findElement(By.xpath("//div[@class='mat-calendar-controls']/button[2]")).click();
						years = driver.findElements(By.xpath("//td"));
					}
					for (WebElement c : years) {
						if (dates1[2].equalsIgnoreCase(c.getText())) {
							c.click();
							kk = 1;
							break;
						}
					}
					if (kk == 1)
						break;
				}
				List<WebElement> months = driver.findElements(By.xpath("//td"));
				Thread.sleep(1000);
				for (WebElement c : months) {
					if (dates1[1].equalsIgnoreCase(c.getText())) {
						c.click();
						break;
					}
				}

				List<WebElement> caldates = driver.findElements(By.xpath("//td"));
				Thread.sleep(1000);
				for (WebElement c : caldates) {
					if (dates1[0].equalsIgnoreCase(c.getText())) {
						c.click();
						break;
					}
				}

				// To Time
				Thread.sleep(1000);
			//	db.sysloginfo(log, "Click on To Time");
				driver.findElement(By.xpath("(//*[@class='ngx-material-timepicker-toggle'])[2]")).click();
				
				Thread.sleep(1000);
				driver.findElement(By.xpath(
						"//*[@class=\"clock-face__number clock-face__number--inner ng-star-inserted\"]/..//span[text()=' 21']"))
						.click();
				
				Thread.sleep(1000);
			//	db.sysloginfo(log, "Click on OK");
				driver.findElement(By.xpath("(//*[@class='timepicker-button'])[2]")).click();
				
				Thread.sleep(1000);
				driver.findElement(By.xpath("//button[contains(text(),' APPLY ')]")).click();
				
				Thread.sleep(1000);
				driver.findElement(By.xpath("(//span[@class='mainMenuTree ng-star-inserted'])[5]")).click();
				
				Thread.sleep(1000);
				driver.findElement(By.xpath("//span[contains(text(),' Invoice Total Amount ')]")).click();
				Thread.sleep(1000);
				driver.findElement(By.xpath("//mat-select[@ng-reflect-placeholder='Select Operator']")).click();
				
				Thread.sleep(1000);
				driver.findElement(By.xpath("(//span[@class='mat-option-text'])[2]")).click();
				
				Thread.sleep(1000);
				driver.findElement(By.xpath("//input[@placeholder='Enter Amount']")).sendKeys("5");
				
				Thread.sleep(1000);
				driver.findElement(By.xpath("(//button[contains(text(),' ADD ')])[2]")).click();
				
				Thread.sleep(1000);
				driver.findElement(By.xpath("//p[contains(text(),'Actions')]")).click();
				
				Thread.sleep(1000);
				driver.findElement(By.xpath("//span[contains(text(),' Percentage Header Discount ')]")).click();
				
				Thread.sleep(1000);
				driver.findElement(By.xpath("//input[@id='searchCatalog']")).sendKeys("5");
				
				Thread.sleep(1000);
				driver.findElement(By.xpath("//button[contains(text(),' APPLY ')]")).click();
				
				Thread.sleep(1000);
				driver.findElement(By.xpath("(//button[contains(text(),' SAVE ')])[1]")).click();
			}}catch (Exception e) {
				// TODO: handle exception
				System.out.println("exception occured"+e);
			}
		
	
}

}
