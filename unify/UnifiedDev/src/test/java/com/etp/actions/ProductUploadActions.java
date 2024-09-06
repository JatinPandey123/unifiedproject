package com.etp.actions;

import java.awt.AWTException;

import org.openqa.selenium.support.PageFactory;

import com.etp.helper.HelperClass;
import com.etp.locators.ProductUploadLocators;

public class ProductUploadActions extends HelperClass {
ProductUploadLocators upload;
	
	public ProductUploadActions() {
		 
        this.upload = new ProductUploadLocators();
 
        PageFactory.initElements(driver,upload);
    }

	public void selectMenu() {
	//	upload.selectMenu();
	}

	public void clickButton() {
	//	upload.clickButton();
	}

	public void filldetails() {
//		upload.filldetails();
	}
	
	//---------------------------------------------Product new template Upload-------------------------------------------------------//

	public void selectuploadoption() {
		upload.selectuploadoption();
		
	}

	public void fillupdloaddetails() {
		try {
			upload.fillupdloaddetails();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

}
