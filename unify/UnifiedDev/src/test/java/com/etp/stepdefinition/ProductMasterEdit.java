package com.etp.stepdefinition;

import com.etp.actions.ProductActionsEdit;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class ProductMasterEdit {
	
	ProductActionsEdit products= new ProductActionsEdit();

////////------------------------------------Search---------------------------------------------------------////////
	
@Given("User is on list screen")
public void user_is_on_list_screen() {
    System.out.println("card view for search");
}
@Then("user can search in search bar")
public void user_can_search_in_search_bar() {
 // products.searchproduct();
}


////////------------------------------------------Edit---------------------------------------------------------////////
@Given("User is on list screen for edit")
public void User_is_on_list_screen_for_edit() {
	System.out.println("user is on edit screen in edit screen");
}

@And("user clicks on three dots in list screen")
public void user_clicks_on_three_dots_in_list_screen() {
//  products.editThreeDots();
}

@Then("user clicks on edit option")
public void user_clicks_on_edit_option() {
//products.clickEdit();
}

@And("user is on edit screen")
public void user_is_on_edit_screen() {
  
}

@When("user Edit the details in edit screen")
public void user_edit_the_details_in_edit_screen() {
//   products.editDetails();
}

@And("user clicks on save button in edit screen")
public void user_clicks_on_save_button_in_edit_screen() {
   
}

@Then("record will update successfully")
public void record_will_update_successfully() {
   
}

}
