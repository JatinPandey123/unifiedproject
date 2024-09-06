package appium.appium;

import java.net.MalformedURLException;
import java.net.URL;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.remote.DesiredCapabilities;

import io.appium.java_client.ios.IOSDriver;
import io.appium.java_client.ios.IOSElement;
import io.appium.java_client.remote.IOSMobileCapabilityType;
import io.appium.java_client.remote.MobileCapabilityType;

public class AppiumTestNew {
	
	 public IOSDriver<IOSElement> driver;
	    public DesiredCapabilities dc = new DesiredCapabilities();
	    private String accessKey = "\r\n"
	    		+ "\r\n"
	    		+ "\r\n"
	    		+ "eyJhbGciOiJIUzI1NiJ9.eyJ4cC51IjoyNzU4NzQ3NywieHAucCI6Mjc1ODc0NzYsInhwLm0iOjE3MTYzODAxNDgyMTcsImV4cCI6MjAzMTc0MDE4NCwiaXNzIjoiY29tLmV4cGVyaXRlc3QifQ.uO3LeufjLlZLrr_c0D2MwnIQIscPc_vTJkq-RTA4TSA"; // Replace with your actual valid access key

	    @Before
	    public void setUp() throws MalformedURLException {
	        System.out.println("Setting up driver...");
	        dc.setCapability("testName", "Open Chrome on iOS");
	        dc.setCapability("accessKey", accessKey);
	        dc.setCapability("deviceQuery", "@os='ios' and @category='PHONE'");
	  //      dc.setCapability(MobileCapabilityType.BROWSER_NAME, "chrome");
	  //      dc.setCapability(IOSMobileCapabilityType.BUNDLE_ID, "com.google.chrome.ios"); // Chrome bundle ID for iOS
	        dc.setCapability("appiumVersion", "1.22.3");

	        driver = new IOSDriver<>(new URL("https://cloud.seetest.io:443/wd/hub"), dc);
	        System.out.println("Driver setup complete.");
	    }

	    @Test
	    public void openChrome() {
	        System.out.println("Opening Chrome browser on iOS...");
	        driver.get("https://test-unify.etpgroup.sg/");
	        System.out.println("Title of the page is: " + driver.getTitle());
	    }

	    @After
	    public void tearDown() {
	        if (driver != null) {
	            System.out.println("Report URL: " + driver.getCapabilities().getCapability("reportUrl"));
	            driver.quit();
	        }
	    }

}
