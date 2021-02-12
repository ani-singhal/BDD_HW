@Login @Regression 
Feature: Add and validate New Customer Account for Bank and Cash 

Background: 
	Given That user is on Techfios loginPage 
	
Scenario Outline: User should be able to login with valid credentials 
	When Users enters the "<userName>" and "<password>" 
	And Click on submit 
	Then We land on DasboardPage 
	When The user enters Bank&Cash button 
	When User enters New customer button 
	Then User land on New Account page 
	When User enters "<AccountTitle>" and "<InitialBalance>" and "<ContactPer>" 
	And click on the Save Button 
	Then account should be created 
Examples:
  |userName			|password|AccountTitle|InitialBalance|ContactPer|
  |demo@techfios.com|abc123	|AAAT|1000|ME|