Feature: Login to SauceLabs mobile application

  Background:
    Given I am on the login page

  Scenario Outline: As a user, I can log into with valid credentials
    When I login with <username> and <password>
    Then I validate product screen visible

    Examples:
      | username      | password     |
      | standard_user | secret_sauce |
