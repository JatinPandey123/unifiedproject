package com.etp.base;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features= 
{
"Feature/alogin01.feature" ,
//"Feature/stockordertype.feature",
//"Feature/productcatalog.feature" ,
//"Feature/productmaster.feature",
//"Feature/basicpromo.feature",
//"Feature/createcounter.feature",
//"Feature/groupedit.feature",
//"Feature/copypromotion.feature",
//"Feature/productupload.feature",
//"Feature/basicadvanceperdisc.feature",
//"Feature/companysetup.feature",
//"Feature/billsave.feature",
//"Feature/companyedit.feature",
//"Feature/hierarchytype.feature",
//"Feature/UOMconversion.feature"

},
//tags ="@loginunify , @productcreate" ,
glue={"com.etp.stepdefinition"},

plugin= {"pretty",
		"html:target/cucumber/result",
		"json:target/cucumber/result.json",
		"com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:"})


public class Login{

}


