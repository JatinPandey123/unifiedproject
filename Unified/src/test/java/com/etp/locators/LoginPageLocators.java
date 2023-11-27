package com.etp.locators;

import java.io.FileReader;
import java.time.Duration;

import org.apache.log4j.Logger;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.etp.helper.HelperClass;
import com.opencsv.CSVReader;

public class LoginPageLocators extends HelperClass {

	Logger log = Logger.getLogger("devpinoyLogger");

	String CSV_Login = ".\\CSV\\Login.csv";
	CSVReader reader = null;

	public void username() {
		try {
			Thread.sleep(1000);
			reader = new CSVReader(new FileReader(CSV_Login));
			String[] cell = reader.readNext();

			while ((cell = reader.readNext()) != null) {
				int i = 0;
				String txt_userName = cell[i];
				String loc_userName = cell[i + 1];

				Thread.sleep(1000);
				driver.findElement(By.name(loc_userName)).sendKeys(txt_userName);
				log.info("User has entered Username");
			}
		} catch (Exception e) {
			System.out.println("Exception occured for username");
		}

	}

	public void userpassword() {
		try {
			reader = new CSVReader(new FileReader(CSV_Login));
			String[] cell = reader.readNext();

			while ((cell = reader.readNext()) != null) {
				int i = 0;
				String txt_userPassword = cell[i + 2];
				String loc_userPassword = cell[i + 3];
				Thread.sleep(1000);
				driver.findElement(By.id(loc_userPassword)).sendKeys(txt_userPassword);

				log.info("User has entered password");

			}
		} catch (Exception e) {
			System.out.println("Exception occured for password");
		}

	}

	public void userloginbutton() {
		try {
			reader = new CSVReader(new FileReader(CSV_Login));
			String[] cell = reader.readNext();

			while ((cell = reader.readNext()) != null) {
				int i = 0;
				String loc_loginButton = cell[i + 4];
				driver.findElement(By.id(loc_loginButton)).click();
				log.info("click on login button");
			}
		} catch (Exception e) {
			System.out.println("Exception occured for clicking LoginButton");
		}

	}

	public void userclickgroup() {
		try {
			reader = new CSVReader(new FileReader(CSV_Login));
			String[] cell = reader.readNext();
			while ((cell = reader.readNext()) != null) {
				int i = 0;
				String loc_selectGroup = cell[i + 5];
				WebDriverWait wait = new WebDriverWait(driver, 50);
				WebElement element3 = wait
						.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("(//div[@class='user-list-card-list-tab'])[6]")));
				element3.click();

				log.info("Selected Group");
				
			}
		} catch (Exception e) {
			System.out.println("Exception Occured while selecting the group");
		}
	}
}
