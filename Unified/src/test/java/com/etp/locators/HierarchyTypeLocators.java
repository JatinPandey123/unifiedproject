package com.etp.locators;

import org.openqa.selenium.By;

import com.etp.commonlinks.Modulemenu;
import com.etp.commonlinks.Modulesubmenu;
import com.etp.commonlinks.ThreeDotsCommon;
import com.etp.helper.HelperClass;

public class HierarchyTypeLocators extends HelperClass{
	
	public void hierarchymenu() {
		ThreeDotsCommon threedots=new ThreeDotsCommon();
		threedots.threedots();
		
		Modulemenu hierarchy=new Modulemenu();
		hierarchy.ProductManagement();
	}

	public void enterhierarchy() {
		Modulesubmenu hierarchytype = new Modulesubmenu();
		hierarchytype.HierarchyType();
		
	}

	public void hierarchyfilldeails() {
		try {
		Thread.sleep(6000);
		driver.findElement(By.xpath("//button[@id='hierarchy-definationadd']")).click();
		Thread.sleep(1000);
		driver.findElement(By.xpath("//input[@id='hierarchyTypeName']")).sendKeys("Clothes");
		Thread.sleep(1000);
		driver.findElement(By.xpath("//mat-select[@id='baseHierarchy']")).click();
		Thread.sleep(1000);
		driver.findElement(By.xpath("//span[contains(text(),' Hierarchy 1 ')]")).click();
		Thread.sleep(1000);
		driver.findElement(By.xpath("//input[@id='level1']")).sendKeys("Cosmetics");
		Thread.sleep(1000);
		driver.findElement(By.xpath("(//button[contains(text(),' SAVE ')])[1]")).click();
		Thread.sleep(1000);
		driver.findElement(By.xpath("(//input[@placeholder='Search By Hierarchy Group, Type Name'])[1]")).sendKeys("Clothes");
		Thread.sleep(1000);
		driver.findElement(By.xpath("//button[@id='hb-mat-btn-css']")).click();
		Thread.sleep(1000);
		driver.findElement(By.xpath("//button[contains(text(),' Delete ')]")).click();
		Thread.sleep(1000);
		driver.findElement(By.xpath("//button[contains(text(),' Yes ')]")).click();
		}catch (Exception e) {
		System.out.println("Exception occured while filling hierarchy details"+" "+e);
		}
	}
   
	
}
