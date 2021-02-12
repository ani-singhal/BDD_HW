$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/mylogin.feature");
formatter.feature({
  "line": 2,
  "name": "Add and validate New Customer Account for Bank and Cash",
  "description": "",
  "id": "add-and-validate-new-customer-account-for-bank-and-cash",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "User should be able to login with valid credentials",
  "description": "",
  "id": "add-and-validate-new-customer-account-for-bank-and-cash;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Users enters the \"\u003cuserName\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#\tWhen User enters the username \"demo@techfios.com\""
    },
    {
      "line": 10,
      "value": "#\tWhen Enters the password \"abc123\""
    }
  ],
  "line": 11,
  "name": "Click on submit",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "We land on DasboardPage",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "The user enters Bank\u0026Cash button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters New customer button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User land on New Account page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User enters \"\u003cAccountTitle\u003e\" and \"\u003cInitialBalance\u003e\" and \"\u003cContactPer\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "click on the Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "account should be created",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "add-and-validate-new-customer-account-for-bank-and-cash;user-should-be-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "AccountTitle",
        "InitialBalance",
        "ContactPer"
      ],
      "line": 20,
      "id": "add-and-validate-new-customer-account-for-bank-and-cash;user-should-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "AAA",
        "1000",
        "ME"
      ],
      "line": 21,
      "id": "add-and-validate-new-customer-account-for-bank-and-cash;user-should-be-able-to-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7365841299,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "That user is on Techfios loginPage",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination2.Given_That_user_is_on_Techfios_loginPage()"
});
formatter.result({
  "duration": 155312600,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User should be able to login with valid credentials",
  "description": "",
  "id": "add-and-validate-new-customer-account-for-bank-and-cash;user-should-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Users enters the \"demo@techfios.com\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#\tWhen User enters the username \"demo@techfios.com\""
    },
    {
      "line": 10,
      "value": "#\tWhen Enters the password \"abc123\""
    }
  ],
  "line": 11,
  "name": "Click on submit",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "We land on DasboardPage",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "The user enters Bank\u0026Cash button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters New customer button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User land on New Account page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User enters \"AAA\" and \"1000\" and \"ME\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "click on the Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "account should be created",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 18
    },
    {
      "val": "abc123",
      "offset": 42
    }
  ],
  "location": "StepDefination2.users_enters_the_and(String,String)"
});
formatter.result({
  "duration": 531008201,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination2.click_on_submit()"
});
formatter.result({
  "duration": 4976243600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination2.we_land_on_DasboardPage()"
});
formatter.result({
  "duration": 2050033301,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination2.the_user_enters_Bank_Cash_button()"
});
formatter.result({
  "duration": 2049192800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination2.user_enters_New_customer_button()"
});
formatter.result({
  "duration": 3695301099,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination2.user_land_on_New_Account_page()"
});
formatter.result({
  "duration": 33054701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AAA",
      "offset": 13
    },
    {
      "val": "1000",
      "offset": 23
    },
    {
      "val": "ME",
      "offset": 34
    }
  ],
  "location": "StepDefination2.user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 246870300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination2.click_on_the_Save_Button()"
});
formatter.result({
  "duration": 2989973900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination2.account_should_be_created()"
});
formatter.result({
  "duration": 4068892500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027alert alert-success fade in\u0027]\"}\n  (Session info: chrome\u003d88.0.4324.150)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-SF05AVNG\u0027, ip: \u002710.0.0.104\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.150, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\jatin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:49371}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 123b8bd8068b06f600a2abff045c47e7\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027alert alert-success fade in\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.getText(Unknown Source)\r\n\tat page.NewAccountPage.successfullycreated(NewAccountPage.java:45)\r\n\tat steps.StepDefination2.account_should_be_created(StepDefination2.java:99)\r\n\tat ✽.Then account should be created(features/mylogin.feature:18)\r\n",
  "status": "failed"
});
});