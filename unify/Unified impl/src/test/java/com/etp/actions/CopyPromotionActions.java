package com.etp.actions;

import org.openqa.selenium.support.PageFactory;

import com.etp.helper.HelperClass;
import com.etp.locators.Advanceperdisclocators;
import com.etp.locators.CopyPromotionLocators;

public class CopyPromotionActions extends HelperClass{
	
	
	CopyPromotionLocators copypromos;
	
	 public CopyPromotionActions() {
		// TODO Auto-generated constructor stub
		
		 
      this.copypromos = new CopyPromotionLocators();

      PageFactory.initElements(driver,copypromos);
  }
	
		public void enterpromotion() {
			try {
				copypromos.enterpromotion();
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		}

	public void savacopypromo() {
		copypromos.savecopypromo();
		
	}




}
