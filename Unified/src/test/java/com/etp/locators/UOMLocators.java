package com.etp.locators;

import org.openqa.selenium.By;

import com.etp.commonlinks.Modulemenu;
import com.etp.commonlinks.Modulesubmenu;
import com.etp.commonlinks.ThreeDotsCommon;
import com.etp.helper.HelperClass;

public class UOMLocators extends HelperClass{

	public void filldetails() {
		// TODO Auto-generated method stub
		
		try {
		
		ThreeDotsCommon uom= new ThreeDotsCommon();
		uom.threedots();
		
		Modulemenu menu= new Modulemenu();
		menu.ProductManagement();
		
		Modulesubmenu submenu= new Modulesubmenu();
		submenu.UOMConversion();
		
		Thread.sleep(1000);
		driver.findElement(By.xpath("//button[@class='hb-add-icon-btn']")).click();
		
		Thread.sleep(1000);
		driver.findElement(By.xpath("//input[@id='uomset']")).sendKeys("UOM123");
		
		Thread.sleep(1000);
		driver.findElement(By.xpath("//input[@id='baseuomvalu']")).sendKeys("5");
		
		Thread.sleep(1000);
		driver.findElement(By.xpath("//input[@id='alternateuomvalue']")).sendKeys("7");
		
		Thread.sleep(1000);
		driver.findElement(By.xpath("(//button[contains(text(),' SAVE ')])[1]")).click();
		
		
	
		
		}catch (Exception e) {
			System.out.println("Exception occurred while filling in uomCode"+" "+e);
		}
	}
	
	

}
