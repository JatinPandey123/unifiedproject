package com.etp.actions;

import org.openqa.selenium.support.PageFactory;

import com.etp.helper.HelperClass;
import com.etp.locators.CompanySetupLocators;
import com.etp.locators.ProductMasterLocators;

public class CompanySetupActions extends HelperClass{

	
CompanySetupLocators company;
	
	 public CompanySetupActions() {
		// TODO Auto-generated constructor stub
		
		 
        this.company = new CompanySetupLocators();
 
        PageFactory.initElements(driver,company);
    }
	

	public void fillcompanydetails() {
	
		company.fillcompanydetails();
	}

}
