package steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import page.DashboardPage;
import page.LoginPage;
import page.NewAccountPage;
import util.Browserfactory2;

public class StepDefination2 {
	WebDriver driver;
	LoginPage loginpage;
	DashboardPage dashboardpage;
	NewAccountPage newaccountpage;
	
	@Before
	public void beforeRun() {
		driver = Browserfactory2.init();
		loginpage = PageFactory.initElements(driver, LoginPage.class);
		dashboardpage=PageFactory.initElements(driver, DashboardPage.class);
		newaccountpage=PageFactory.initElements(driver, NewAccountPage.class);
	}

	@Given("^That user is on Techfios loginPage$")
	public void Given_That_user_is_on_Techfios_loginPage() {
		System.out.println("+++++++");
		Assert.assertEquals("WRONG URL", "Login - iBilling", driver.getTitle());
	}

//	@When("^User enters the username \"([^\"]*)\"$")
//	public void User_enters_the_username(String arg1) {
//		loginpage.enterUserName(arg1);
//	}
//
//	@When("^Enters the password \"([^\"]*)\"$")
//	public void enters_the_password(String arg1) throws Throwable {
//		loginpage.enterPassword(arg1);
//	}

	@When("^Users enters the \"([^\"]*)\" and \"([^\"]*)\"$")
	public void users_enters_the_and(String arg1, String arg2) throws Throwable {
	    loginpage.enterCredentials(arg1, arg2);
	}
	@When("^Click on submit$")
	public void click_on_submit()  {
		loginpage.clickOnSignInButton();
	}

	@Then("^We land on DasboardPage$")
	public void we_land_on_DasboardPage() throws InterruptedException  {
		Thread.sleep(2000);
//Assert.assertEquals(message, expected, actual);
		dashboardpage.homePagelandingVerification();
	}

	@When("^The user enters Bank&Cash button$")
	public void the_user_enters_Bank_Cash_button() throws Throwable {
		dashboardpage.clickBankandCash();
		Thread.sleep(2000);
	}

	@When("^User enters New customer button$")
	public void user_enters_New_customer_button() throws Throwable {
		dashboardpage.clickNewAccount();
		Thread.sleep(3000);
	}

	@Then("^User land on New Account page$")
	public void user_land_on_New_Account_page() throws Throwable {
		newaccountpage.accountlandingPageVerification();
		loginpage.takeScreenshotAtEndOfTest(driver);
	}

//	@When("^User enters AccountTitle \"([^\"]*)\"$")
//	public void user_enters_AccountTitle(String arg1, int i, String arg2) throws Throwable {
//		newaccountpage.filltheNewaccountForm(arg1, 0, arg2);
//	}
	@When("^User enters \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and_and(String arg1, String arg2, String arg3) throws Throwable {
		newaccountpage.filltheNewaccountForm(arg1, arg2, arg3);
	}

	@When("^click on the Save Button$")
	public void click_on_the_Save_Button() throws Throwable {
		newaccountpage.savenewaccountform();
		Thread.sleep(2000);
	}

	@Then("^account should be created$")
	public void account_should_be_created() throws Throwable {
		Thread.sleep(2000);
		newaccountpage.successfullycreated();
		loginpage.takeScreenshotAtEndOfTest(driver);
	}


	
//	@After
//	public void teardown() {
//		driver.close();
//		driver.quit();
//	}

}
