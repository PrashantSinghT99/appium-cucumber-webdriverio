Feature: Login to SauceLabs mobile application

  Background:
    Given I launch the application

  @validUser
  Scenario Outline: Valid username and password
    When I enter the username <username>
    Then I enter the password <password>
    Then I click the login button
    Then I validate product screen visible

    Examples:
      | username      | password     |
      | standard_user | secret_sauce |

  @invalidUser
  Scenario Outline: Invalid username and password
    When I enter the username <username>
    Then I enter the password <password>
    Then I click the login button
    Then I should see the error message <message>

    Examples:
      | username          | password | message                                                      |
      | alice@example.com | 10203040 | Username and password do not match any user in this service. |

  @lockedUser
  Scenario Outline: Locked username and password
    When I enter the username <username>
    Then I enter the password <password>
    Then I click the login button
    Then I should see the error message <message>

    Examples:
      | username        | password     | message                               |
      | locked_out_user | secret_sauce | Sorry, this user has been locked out. |

  @noCredentials
  Scenario Outline: Validate no username and no password
    When I click the login button
    Then I should see the error message <message>

    Examples:
      | message              |
      | Username is required |

  @usernameNoPassword
  Scenario Outline: Validate enter username but no password
    When I enter the username <username>
    Then I click the login button
    Then I should see the error message <message>

    Examples:
      | username        | message              |
      | bob@example.com | Password is required |
