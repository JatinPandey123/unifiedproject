package com.etp.actions;

import org.openqa.selenium.support.PageFactory;

import com.etp.helper.HelperClass;
import com.etp.locators.AdvancePromoLocators;
import com.etp.locators.CompanyEditLocators;

public class CompanyEditActions extends HelperClass{
	CompanyEditLocators comp;
	
	 public CompanyEditActions() {
		// TODO Auto-generated constructor stub
		
		 
      this.comp = new CompanyEditLocators();

      PageFactory.initElements(driver,comp);
  }
	

	public void threedotscomp() {
	
		comp.threedotscomp();
	}


	public void companyedit() {
		comp.companyedit();
		
	}


	public void editdetails() {
		comp.editdetails();
		
	}

}
