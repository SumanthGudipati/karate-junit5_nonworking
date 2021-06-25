Feature : login Test


  Background:
    * url weburl
    * def req =
    '''

    '''

    @RegressionTest
    Scenario: Validate Login tests

      Given path "/path/id"
      And SoapAction ""
      When request req
      Then statuscode 200

      * match x.y.x == "Test"

