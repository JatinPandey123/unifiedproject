package com.etp.actions;

import org.openqa.selenium.support.PageFactory;

import com.etp.helper.HelperClass;
import com.etp.locators.CreateCounterLocators;
import com.etp.locators.ProductEdit;

public class CreateCounterActions extends HelperClass{
	
	
CreateCounterLocators counters;
	
	public CreateCounterActions() {
		 
        this.counters = new CreateCounterLocators();
 
        PageFactory.initElements(driver,counters);
    }
	
	
	
	

	public void createcounter() {
		
		counters.createcounter();
		
	}

	public void fillCounterDetails() {
		
		
		counters.fillcounterdetails();
	}

	
	
	
	
}
