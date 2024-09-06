package com.etp.actions;

import org.openqa.selenium.support.PageFactory;

import com.etp.helper.HelperClass;
import com.etp.locators.ProductMasterLocators;
import com.etp.locators.StockOrderTypeLocators;

public class StockOrderTypeActions extends HelperClass{
	
	
StockOrderTypeLocators sot;
	
	public StockOrderTypeActions() {
		 
        this.sot = new StockOrderTypeLocators();
 
        PageFactory.initElements(driver,sot);
    }
	
	public void enterstockordertype() {
		sot.enterstockordertype();
		
	}

	public void enterdetails() {
		// TODO Auto-generated method stub
		sot.enterdetails();
	}



}
