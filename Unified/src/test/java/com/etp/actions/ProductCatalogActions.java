package com.etp.actions;

import org.openqa.selenium.support.PageFactory;

import com.etp.helper.HelperClass;
import com.etp.locators.ProductCatalogLocators;

public class ProductCatalogActions extends HelperClass{
	
	
	ProductCatalogLocators productcatalog;
	
	
	 public ProductCatalogActions()  {
		 
        this.productcatalog = new ProductCatalogLocators();
 
        PageFactory.initElements(driver,productcatalog);
    }

	public void entercatalog() {
	productcatalog.entercatalog();
		
	}

	public void clickaddbutton() {
		// TODO Auto-generated method stub
	productcatalog.clickaddbutton();
	}

	public void fillmandatorydetails() {
		// TODO Auto-generated method stub
		productcatalog.fillmandatorydetails();
	}

}
