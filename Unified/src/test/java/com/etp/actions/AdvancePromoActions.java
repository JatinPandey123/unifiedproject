package com.etp.actions;

import org.openqa.selenium.support.PageFactory;

import com.etp.helper.HelperClass;
import com.etp.locators.AdvancePromoLocators;
import com.etp.locators.BasicPromoLocators;
import com.etp.locators.CompanySetupLocators;

public class AdvancePromoActions extends HelperClass{
	
	
	AdvancePromoLocators promos;
	
	 public AdvancePromoActions() {
		// TODO Auto-generated constructor stub
		
		 
       this.promos = new AdvancePromoLocators();

       PageFactory.initElements(driver,promos);
   }
	

	public void enterpromotion() throws Exception{
		
		promos.enterpromotion();
		
	}


	public void filldetails() throws Exception {
	//	promos.filldetails();
	}

}
