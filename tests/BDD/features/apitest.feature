@apifeature
Feature: To test API

Background:
    Given API base url for respective env is "https://api.github.com/"

@smoke
Scenario: To verify given repo available in github
    Given Provide API Endpoint along resource param is "repos/xaviermpa/MyLatestPlaywright"
    And I need to set API Headers as "Headers"
    When I need to set API Method as "GET"
    Then I need to send my API
    Then Response has status as "200" and "OK"

Scenario: To create new repo into github
    Given Provide API Endpoint along resource param is "/user/repos"
    And I need to set API Headers as "Headers"
    And I need to provide payload from "resources/data/samplepayload.json"
    When I need to set API Method as "POST"
    Then I need to send my API
    Then Response has status as "201" and "Created"

Scenario: To delete given repo from github
    Given Provide API Endpoint along resource param is "repos/xaviermpa/tobdeleted"
    And I need to set API Headers as "Headers"
    When I need to set API Method as "DELETE"
    Then I need to send my API
    Then Response has status as "204" and "No Content"