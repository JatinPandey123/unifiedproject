package com.etp.actions;

import org.openqa.selenium.support.PageFactory;

import com.etp.helper.HelperClass;
import com.etp.locators.BasicPromoLocators;
import com.etp.locators.CompanySetupLocators;

public class BasicPromoActions extends HelperClass{
	
	
	BasicPromoLocators promos;
	
	 public BasicPromoActions() {
		// TODO Auto-generated constructor stub
		
		 
       this.promos = new BasicPromoLocators();

       PageFactory.initElements(driver,promos);
   }
	

	public void enterpromotion() {
		
		promos.enterpromotion();
		
	}


	public void filldetails() throws Exception {
		promos.filldetails();
	}

}
