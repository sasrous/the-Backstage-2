# the-Backstage-2
proyecto final (modulo 3) IRONHACK 

# Project Name

The Backstage

## Description

The Backstage is a small fórum site that Works with the Songkick API to find musical events nearby filtered by your location, You can check them, join them, and interact with other users that wish to attend too (either on the wall of the event or on private messages).

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Signup:** As an anon I can sign up in the platform 
-  **Login:** As a user I can login to the platform so that I can acces my profile and save events / comment / message other users
-  **Logout:** As a user I can logout from the platform 
-  **Edit profile** As a user I can update the public information I display in my profile
-  **Search events** As a user I can search for events that will occur nearby
-  **Save Events** As a user I can save(and delete) events to my calendar
-  **Check Events / comment** As a user I can acces de details of an event and leave a comment on the wall
-  **Visit other users** As a user I can visit the profiles of other users that will be joining / that commented on said events
-  **Message other user** As a user I can message/ and be messaged by other users 
- **Block user** As a user I can block incoming messages from certain users


## Backlog

User profile:

- upload my profile picture
- dynamic calendar on profile 

Geo Location:
- see / search events on map


# Client

## Routes

- `/`
  - HomePageComponent
  - public
  - just promotional copy
- `/auth/signup`
  - SignupPageComponent
  - anon only
  - signup form, link to login
  - navigate to homepage after signup
- `/auth/login`
  - LoginPageComponent
  - anon only
  - login form, link to signup
  - navigate to homepage after login
- `/restaurants` 
  - RestaurantListPageComponent
  - public
  - shows all restaurants, links to details
  - search restaurants by name
- `/restaurants/create` 
  - RestaurantCreatePageComponent
  - user only
  - creates a new restaurant
  - navigates to restaurant's detail page after creation
- `/restaurants/:id` 
  - RestaurantDetailPageComponent 
  - public
  - details of one restaurant
  - button to add to favorite
  - show star if in favorites already
- `/profile/me` 
  - ProfilePageComponent
  - user only
  - my details
  - my favorite restaurants
  - restaurants created by me
- `**`
  - NotFoundPageComponent


## Components

- Restaurant Card component
  - Input: restaurant: any
  - Output: favorite(restaurantId: string, on: boolean)
- Search component
  - Output: change(terms: string)


## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous
- Restaurant Service
  - restaurant.list()
  - restaurant.search(terms)
  - restaurant.create(data)
  - restaurant.detail(id)
  - restaurant.addFavorite(id)
  - restaurant.removeFavorite(id)   

# Server

## Models

User model

```
username - String // required
email - String // required & unique
password - String // required
favorites - [ObjectID<Restaurant>]
```

Restaurant model

```
owner - ObjectID<User> // required
name - String // required
phone - String
address - String
```

## API Endpoints (backend routes)

- GET /auth/me
  - 404 if no user in session
  - 200 with user object
- POST /auth/signup
  - 401 if user logged in
  - body:
    - username
    - email
    - password
  - validation
    - fields not empty (422)
    - user not exists (409)
  - create user with encrypted password
  - store user in session
  - 200 with user object
- POST /auth/login
  - 401 if user logged in
  - body:
    - username
    - password
  - validation
    - fields not empty (422)
    - user exists (404)
    - passdword matches (404)
  - store user in session
  - 200 with user object
- POST /auth/logout
  - body: (empty)
  - 204
- POST /user/me/favorite
  - body:
    - restaurantId
  - validation
    - id is valid (404)
    - id exists (404)
  - add to favorites if not there yet
  - updates user in session
- DELETE /user/me/favorite/:restaurantId
  - validation
    - id is valid (404)
    - id exists (404)
  - body: (empty - the user is already stored in the session)
  - remove from favorites
  - updates user in session
- GET /restaurant?terms=foo
  - use search criteria if terms provided
  - 200 with array of restaurants
- POST /restaurant
  - body:
    - name
    - phone
    - address
  - validation
    - fields not empty
  - create restaurant
  - 200 with restaurant object
- GET /restaurant/:id

  

## Links

### Trello/Kanban

[Link to your trello board](https://trello.com) or picture of your physical board

### Git

The url to your repository and to your deployed project

[Client repository Link](http://github.com)
[Server repository Link](http://github.com)

[Deploy Link](http://heroku.com)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)



Contraer 
