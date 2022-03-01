Feature: Test the ecommerce site for shopping of a clothing item

  @id:10 @e2e
    Scenario Outline: Use myStore website to buy <dress item>
    Given user can access myStore website while having an existing account
    When user hover over the <type> section
    And user click on the <dresses type> dresses
    And user change the to list view
    And user select a <dress item> dress
    And user proceed to checkout
    And user increase the quantity to <qty>
    And user proceed to checkout to sign in
    When user able to login to website successfully
    And user confirm delivery address and shipping
    Then user print the product name and price

    Examples:
    | type    | dresses type | dress item                                         | qty |
    | dresses | summer       | Long printed dress with thin adjustable straps     | 2   |
    | dresses | summer       | Sleeveless knee-length chiffon dress               | 2   |
    | dresses | summer       | Printed chiffon knee length dress with tank straps | 2   |

  @id:20 @e2e
  Scenario Outline: Buy a best seller item from myStore website
    Given user can access myStore website while having an existing account
    When user select a best selling item
    And user change the quantity <qty>, size <size> and color <color>
    And user add the item to cart
    Then user proceeds to checkout with the updated details
    And user able to login to website successfully
    And user add a new address
    And user change the billing address
    And user confirm delivery address and shipping
    And user print the product name and price

    Examples:
      | qty | size | color |
      | 2   | L    | blue  |

###################################################################
### The below test cases are not automated                      ###
### They are high priority tests that needs to automated next   ###
###################################################################

#  @id:30 @e2e
#  Scenario Outline: Buy a women clothing item
#    Given user can access myStore website while having an existing account
#    And user select a women <clothing item> under the section <section>
#    Then user should be able to add an item to cart after requirement changes
#    And user should be able to proceed to check out
#    Then user able to login to website successfully
#    And user confirm delivery address and shipping
#    And user print the product name and price
#
#    Examples:
#      | section | clothing item  |
#      | tops    | T-shirts       |
#      | dresses | casual dresses |
#
#  @id:40 @e2e
#    Scenario Outline: Buy <section> item
#    Given user can access myStore website while having an existing account
#    And user select the <section> section
#    Then user should be able to add an item to cart after requirement changes
#    And user should be able to proceed to check out
#    Then user able to login to website successfully
#    And user confirm delivery address and shipping
#    And user print the product name and price
#    Examples:
#      | section |
#      | T-Shirt |
#
#  @id:50 @e2e
#  Scenario: Buy a best selling item using quick view
#    Given user can access myStore website while having an existing account
#    And user select the quick view of a best selling item
#    When user changes the quantity, size and color of the item and add it to cart
#    Then the updated item should be added to cart
#    And user should be able to proceed to check out
#    And user should be be able to update the quantity again
#    Then user able to login to website successfully
#    And user confirm delivery address and shipping
#    And user print the product name and price
#
#  @id:60 @e2e
#  Scenario: Select an item based on catalog/filters
#    Given user can access myStore website
#    When user go to category or sub-category
#    Then user should be able to filter the items by catalog filters
#    And user is able to buy the items from filtered list
#
#  @id:70
#  Scenario: Sort items
#    Given user can access myStore website
#    When user go to category or sub-category
#    Then user should be able to sort the items
#    And user is able to see the sorted items
#
#  @id:80
#  Scenario: Remove the items from cart summary
#    Given user can access myStore website
#    And user add items to cart
#    When user removes the items from the cart summary
#    And the cart is updated accordingly
#
#  @id:90
#  Scenario: Remove the items from pop-up cart
#    Given user can access myStore website
#    And user add items to cart
#    When user removes the items from pop-up cart
#    And the cart is updated accordingly
#
#  @id:100
#  Scenario: Update personal information
#    Given user can access myStore website while having an existing account
#    And user able to login to website successfully
#    And access the personal information
#    When user update personal information
#    Then the updated personal information should be visible
#
#  @id:110
#  Scenario: Update user address and contact details
#    Given user can access myStore website while having an existing account
#    And user able to login to website successfully
#    And access the account details
#    When user update an existing address and contact details
#    Then the updated details should be visible in addresses
#
