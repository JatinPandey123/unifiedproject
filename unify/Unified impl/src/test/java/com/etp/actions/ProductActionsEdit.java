package com.etp.actions;

import org.openqa.selenium.support.PageFactory;

import com.etp.helper.HelperClass;
import com.etp.locators.ProductEdit;

public class ProductActionsEdit extends HelperClass{
	
	
ProductEdit products;
	
	public ProductActionsEdit() {
		 
        this.products = new ProductEdit();
 
        PageFactory.initElements(driver,products);
    }

	
////////------------------------------------Search---------------------------------------------------------////////

public void searchproduct() {
  
	products.searchproduct();
}



////////------------------------------------Edit---------------------------------------------------------////////


public void editThreeDots() {
	
	products.editThreeDots();
}

public void clickEdit() {
 products.clickEdit();
	
}

public void editDetails() {
products.editDetails();
	
}





}

	
	

