package com.etp.actions;

import org.openqa.selenium.support.PageFactory;

import com.etp.helper.HelperClass;
import com.etp.locators.AdvancePromoLocators;
import com.etp.locators.Advanceperdisclocators;

public class Advanceperdisc extends HelperClass{

	
	Advanceperdisclocators promos;
	
	 public Advanceperdisc() {
		// TODO Auto-generated constructor stub
		
		 
      this.promos = new Advanceperdisclocators();

      PageFactory.initElements(driver,promos);
  }
	

	public void enterpromo() throws Exception{
		
		promos.enterpromo();
		
	}


	public void enterdetailspromo() {
		promos.enterdetailspromo();
		
	}
}
