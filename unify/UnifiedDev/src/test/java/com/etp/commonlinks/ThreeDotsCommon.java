package com.etp.commonlinks;

import org.openqa.selenium.By;

import com.etp.helper.HelperClass;

public class ThreeDotsCommon extends HelperClass{
	
	public void threedots() {
		try {
		Thread.sleep(1000);
		driver.findElement(By.xpath("//*[@id='nav-icon1']")).click();
		}catch (Exception e) {
			System.out.println("excetion occurred while clicking on three dots"+" "+e);
		}
	}

}
