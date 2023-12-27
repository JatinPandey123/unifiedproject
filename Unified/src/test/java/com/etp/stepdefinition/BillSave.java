package com.etp.stepdefinition;

import com.etp.actions.BillSaveActions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class BillSave {

	BillSaveActions savebill=new BillSaveActions();
	
	@Given("pos link is available in unify")
	public void pos_link_is_available_in_unify() {
	  savebill.openpos();
	}
	@Then("user select company")
	public void user_select_company() {
	  savebill.selectcompany();
	}
	@Then("user select counter")
	public void user_select_counter() {
	  savebill.selectcounter();
	}
	@When("user click on shift begin")
	public void user_click_on_shift_begin() {
	 savebill.selectshift();
	}
	@When("user search for customer")
	public void user_search_for_customer() {
	    savebill.searchcustomer();
	}
	@When("user scan the Product")
	public void user_scan_the_product() {
	 savebill.scanproduct();
	}
	@Then("user clicks on checkout")
	public void user_clicks_on_checkout() {
	savebill.selectcheckout();
	}
	@Then("user select amount and click on submit")
	public void user_select_amount_and_click_on_submit() {
	 savebill.selectamount();
	}
	@Then("user clicks on save bill")
	public void user_clicks_on_save_bill() {
	  savebill.clicksavebill();
	}
}
