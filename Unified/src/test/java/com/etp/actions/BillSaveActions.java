package com.etp.actions;

import org.openqa.selenium.support.PageFactory;

import com.etp.helper.HelperClass;
import com.etp.locators.BillSaveLocators;

public class BillSaveActions extends HelperClass{
	
	BillSaveLocators billsave;
	
	 public BillSaveActions() {
		
      this.billsave = new BillSaveLocators();

      PageFactory.initElements(driver,billsave);
  }

	public void openpos() {
	billsave.openpos();
		
	}

	public void selectcompany() {
	billsave.selectcompany();
		
	}
	public void selectstore() {
		billsave.selectstore();
	}


	public void selectshift() {
		billsave.selectshift();
		
	}

	public void searchcustomer() {
		billsave.searchcustomer();
		
	}

	public void scanproduct() {
	billsave.scanproduct();
		
	}

	public void selectcheckout() {
	billsave.selectcheckout();
		
	}

	public void selectamount() {
		billsave.selectamount();
		
	}

	public void clicksavebill() {
		billsave.clicksavebill();
		
	}

	public void selectcounter() {
		billsave.selectcounter();
		
	}





}
