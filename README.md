React Assignment 

Tasks: 
● Authenticate the user on the login screen.
● Create a grid to list users available via https://reqres.in/api/users API call.
● Provide buttons to edit user information, delete, add a new user and search.

Approach
1. Used the given mock API endpoint for backend connections.
2. used react-router-dom package for the routing within the application.
3. Used redux & react-redux package for state management.
4. Used session-storage for storing authenticated token.
5. folder structure
   - src
        - components
            - login ( contains the features and view of login)
            - list ( contains the functionalities of list component )
            - user ( used by the list component to render the data of the user list fetched from the API  also the main aim of making this component is to maintain reusability of the code.)
            - addUser ( contains the features and view of adding user)
            - modifyUser ( contains the features and view of update user)
  
        - redux
            - userStore ( Used for the creation of store)
            - userTypes ( contains all types of Action types that can be dispatched)
            - userAction ( contains all the action function that will be used to dispatch an action)
            - userReducer ( handles the action on the state )
  
        - app.js ( holds the root point of the application )

6. Implemented the search function on all the possible fields of the list
7. Deployed the same application on heroku , link for the same is { https://truckx-react.herokuapp.com/ }