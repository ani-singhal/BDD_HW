package page;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;





public class DashboardPage {
	WebDriver driver;
	
	public DashboardPage(WebDriver driver) {
		this.driver=driver;
	}
	
	@FindBy(how=How.XPATH, using="//span[text()='Dashboard']") 
	WebElement HOMEPAGE;
	@FindBy(how=How.XPATH, using="//span[text()='Bank & Cash']") WebElement BANKCASHBut;
	@FindBy(how=How.XPATH, using="//a[text()='New Account']") WebElement NEWACCBUT;
	
public void homePagelandingVerification() {
	System.out.println(HOMEPAGE.getText());
	Assert.assertEquals("LandingPAGE NOT FOUND", "Dashboard", HOMEPAGE.getText());
}
public void clickBankandCash() {
	BANKCASHBut.click();
}

public void clickNewAccount() {
	NEWACCBUT.click();
}
}
