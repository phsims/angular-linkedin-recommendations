# angular-linkedin-recommendations
Linkedin recommendations for AngularJS

I used https://apigee.com/console/linkedin to log into Linkedin and get an ACCESS TOKEN.

Choose:
API = Linkedin
Service = default (there is only one)
Authentication = Linkedin AuthenticatedUser
API Method = Retrieve basic profile data

Replace [ACCESS TOKEN]

USAGE
```html
<div ng-controller="linkedinOutput as linkedin">
        <h1>{{ linkedinOutput.recommendationsReceived }}</h1>
        <ul>
                <li ng-repeat="recommendation in myRecommendations">
                              <p>{{recommendation.recommendationText}}</p>
                              <p>{{recommendation.recommender.firstName}} {{recommendation.recommender.lastName}}</p>

                </li>
                </ul>
</div>
```
There is likely a better way to do this but I am an angular noobie :)

