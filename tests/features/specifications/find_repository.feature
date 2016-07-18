@find
Feature: User find repository on Github

  Scenario: Find repository
  
    Given i open Github "fernandosqa" profile
     Then the title contains "fernandosqa"
      And i click in Repositories tab
      And i fill search field with value "cucumberjs"
     When i click in search button
     Then i should be redirect to result page
  