Feature: Paige Fashion for Women Pants Example Feature

Scenario Outline: User Buys Women Pants Scenario
        Given I am in Paige home Page
        And I wait for "5" seconds
        And I wait for the popup to appear
        When I close the popup
        And I wait for "1" seconds
        And I maximize the window
        And I assert the PAIGE logo appears
        When  I hover on Women tab
        And I wait for "5" seconds
        Then I select Pants option
        And I assert the WOMEN PANTS title appears
        # When I click into the search field
        And I wait for "1" seconds
        # Then I search for "<pantsItem>"
        And I click on Gemma image
        And I wait for "5" seconds
        And I assert the Gemma title appears
        And I wait for "1" seconds
        When I select size 25
        # Then In Stock message appears
        And I wait for "1" seconds
        When I select size 29
        # Then Sold Out message appears
        And I wait for "1" seconds
        When I select size 31
        And I wait for "5" seconds
        Then I add it to the shopping bag
        And I wait for "5" seconds
        And The Good News Shipping message displays
        Then I assert the Checkout button exists
        And I wait for "1" seconds
        When I hover on Checkout button
        And I wait for "1" seconds
        Then I click on Checkout button
        And I wait for "1" seconds
        And I click on Checkout As Guest
        
        Examples:
        | pantsItem                             |
        | Gemma - Black Fog Luxe Coating        |