package com.etp.actions;

import org.openqa.selenium.support.PageFactory;

import com.etp.helper.HelperClass;
import com.etp.locators.CompanyEditLocators;
import com.etp.locators.GroupEditLocators;

public class GroupEditActions extends HelperClass{
	GroupEditLocators grp;
	
	 public GroupEditActions() {
		// TODO Auto-generated constructor stub
		
		 
     this.grp = new GroupEditLocators();

     PageFactory.initElements(driver,grp);
 }
	

	public void threedotsgrp() {
		grp.threedotsgrp();
		
	}


	public void editgroup() {
		grp.editgroup();
		
	}


	public void updatedetailsgrp() {
	grp.updatedetailsgrp();
		
	}

}
