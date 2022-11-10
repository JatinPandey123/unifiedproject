package com.etp.actions;
import org.openqa.selenium.support.PageFactory;

import com.etp.helper.HelperClass;
import com.etp.locators.LoginPageLocators;

public class LoginActions extends HelperClass{
	
	LoginPageLocators loginPageLocators; 
	
	
	public LoginActions() {
		 
        this.loginPageLocators = new LoginPageLocators();
 
        PageFactory.initElements(driver,loginPageLocators);
    }
  

	 public void setUserName() throws Exception {
	    	 Thread.sleep(3000);
	         loginPageLocators.username();
	     }
	 
	 public void setPassword() throws Exception {

		 Thread.sleep(3000);
	        loginPageLocators.userpassword();
	    }
	 
	 
	 public void clickLogin() {
	        loginPageLocators.userloginbutton();
	    }
//	 public void grptextdisplayed() {
//		 loginPageLocators.userinselectgrp();
//	 }
//	 
	 
	 public void clickGroup()  {
		 loginPageLocators.userclickgroup();
	 }
	 

     
}
