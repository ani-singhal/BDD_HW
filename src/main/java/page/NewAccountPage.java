package page;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class NewAccountPage extends BasePage{
	WebDriver driver;

	public NewAccountPage(WebDriver driver) {
		this.driver = driver;
	}

	@FindBy(how = How.XPATH, using = "//h2[text()=' Accounts ']")
	WebElement ACCOUNTLANDING;
	@FindBy(how = How.XPATH, using = "//input[@name='account']")
	WebElement ACCOUNTTITLE;
	@FindBy(how = How.XPATH, using = "//input[@id='balance']")
	WebElement AccountBal;
	@FindBy(how = How.XPATH, using = "//input[@id='contact_person']")
	WebElement AccountName;
	@FindBy(how = How.XPATH, using = "//button[@class='btn btn-primary']")
	WebElement SubmitBut;
	@FindBy(how = How.XPATH, using = "//*[@id=\"page-wrapper\"]/div[3]/div[1]")
	WebElement ACCountCreated;

	public void accountlandingPageVerification() {
		Assert.assertEquals("NewACCOUNT FORM NOT OPENED", "Accounts", ACCOUNTLANDING.getText());
	}

	public void filltheNewaccountForm(String account, String balance, String name) {
		ACCOUNTTITLE.sendKeys(account+randomgen(999));
		AccountBal.sendKeys(balance);
		AccountName.sendKeys(name);

	}

	public void savenewaccountform() {
		SubmitBut.click();
	}

	public void successfullycreated() {
		System.out.println(ACCountCreated.getText());
		String actualT = ACCountCreated.getText();
		String expectedT = "Account Created Successfully";
		
		if (expectedT.contains(actualT)) {
			System.out.println("ACCOUNT CREATED SUCCESFULLY");
		} else {
			System.out.println("ACCOUNT NNNNOTTTT CREATED SUCCESFULLY");
		}
	}
}
