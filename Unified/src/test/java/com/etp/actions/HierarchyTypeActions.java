package com.etp.actions;

import org.openqa.selenium.support.PageFactory;


import com.etp.helper.HelperClass;
import com.etp.locators.HierarchyTypeLocators;

public class HierarchyTypeActions extends HelperClass{
	
	HierarchyTypeLocators type;
	
	 public HierarchyTypeActions() {
		
		 
      this.type = new HierarchyTypeLocators();

      PageFactory.initElements(driver,type);
  }

	public void hierarchymenu() {
		type.hierarchymenu();
		
	}

	public void enterhierarchy() {
		type.enterhierarchy();
		
	}
	public void hierarchyfilldetails() {
		
		type.hierarchyfilldeails();
	}
	

	

}
