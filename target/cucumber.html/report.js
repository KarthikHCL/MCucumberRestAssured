$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/cucumber/MavenCucumberProject/VerizonDemo.feature");
formatter.feature({
  "id": "demofeature",
  "description": "",
  "name": "DemoFeature",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "demofeature;a-few-cukes",
  "description": "",
  "name": "a few cukes",
  "keyword": "Scenario",
  "line": 3,
  "type": "scenario"
});
formatter.step({
  "name": "I have cukes in my belly",
  "keyword": "Given ",
  "line": 4
});
formatter.match({
  "location": "Stepdefs.I_have_cukes_in_my_belly()"
});
formatter.result({
  "duration": 5489578615,
  "status": "passed"
});
formatter.scenario({
  "id": "demofeature;check-for-thingspacelogin",
  "description": "",
  "name": "Check for Thingspacelogin",
  "keyword": "Scenario",
  "line": 6,
  "type": "scenario"
});
formatter.step({
  "name": "I try access without credentials",
  "keyword": "Given ",
  "line": 7
});
formatter.match({
  "location": "Stepdefs.I_try_access_without_credentials()"
});
formatter.result({
  "duration": 1629185583,
  "status": "passed"
});
formatter.scenario({
  "id": "demofeature;check-weather-in-my-city",
  "description": "",
  "name": "Check weather in my city",
  "keyword": "Scenario",
  "line": 14,
  "type": "scenario",
  "comments": [
    {
      "value": "#Scenario:\tGiven I read resturl from excel",
      "line": 9
    },
    {
      "value": "#\t\t\t\t\tWhen I pick the parent invoice",
      "line": 10
    },
    {
      "value": "#\t\t\t\t\tAnd gather all subinvoices",
      "line": 11
    },
    {
      "value": "#\t\t\t\t\tThen I check the invoice numbers are numeric   \t\t\t\t\t\\",
      "line": 12
    }
  ]
});
formatter.step({
  "name": "I want to check the Weather",
  "keyword": "Given ",
  "line": 15
});
formatter.match({
  "location": "Stepdefs.I_want_to_check_the_Weather()"
});
formatter.result({
  "duration": 2636242921,
  "status": "failed",
  "error_message": "java.lang.ClassCastException: com.jayway.restassured.internal.path.xml.NodeChildrenImpl cannot be cast to java.lang.String\r\n\tat com.cucumber.MavenCucumberProject.Stepdefs.I_want_to_check_the_Weather(Stepdefs.java:44)\r\n\tat ✽.Given I want to check the Weather(com/cucumber/MavenCucumberProject/VerizonDemo.feature:15)\r\n"
});
});