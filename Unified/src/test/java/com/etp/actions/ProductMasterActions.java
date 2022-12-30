package com.etp.actions;

import org.openqa.selenium.support.PageFactory;

import com.etp.helper.HelperClass;
import com.etp.locators.ProductMasterLocators;

public class ProductMasterActions extends HelperClass{
	
	ProductMasterLocators product;
	
	public ProductMasterActions() {
		 
        this.product = new ProductMasterLocators();
 
        PageFactory.initElements(driver,product);
    }
	
	 public void enterproduct() throws Exception {
    	 Thread.sleep(3000);
    product.enterproductmaster();
     }

	public void clickaddbutton() {
	//product.productcreationbutton();
		
	}

	public void clicksingleproduct() {
		// TODO Auto-generated method stub
		
	//	product.singleproductbutton();
	}

	public void fillproductdetails() throws Exception {
		
		product.fillproductdetail();
	}

//	public void saveproduct() {
//		product.saveproduct();
//		
//	}
	
	
////////------------------------------------Search---------------------------------------------------------////////

	public void searchproduct() {
	  
		
	}


	
////////------------------------------------Edit---------------------------------------------------------////////

	
	public void editThreeDots() {
		
		
	}

//	public void clickEdit() {
//	 product.clickEdit();
//		
//	}
//
//	public void editDetails() {
//	product.editDetails();
//		
//	}


	
  

}
