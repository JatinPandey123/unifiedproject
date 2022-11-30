package com.etp.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import com.etp.helper.HelperClass;

public class Locators {
	
	@FindBy(name="txtusername")
	public WebElement userName;

	
	@FindBy(id="inputPassword")
	public WebElement password;
	
	@FindBy(id="btnLogin")
	public WebElement loginButton;
}
