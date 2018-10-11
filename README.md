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

- `/auth/signup`
  - SignupPageComponent
  - anon only
  - signup form, link to login
  - navigate to Profile after signup
- `/auth/login`
  - LoginPageComponent
  - anon only
  - login form, link to signup
  - navigate to Lobby after login
- `/lobby` 
  - API songkick 
  - searchbar / filter
  - search events, links to details
  - user only
  
- `/lobby/:id` 
  - event details
  - user only
  - join event (save in profile)
  - unjoin event
  - leave a comment on event
  - check other users that joined  (acces details)
  - check other users that commented (acces details) 

- `/profile/me` 
  - ProfilePageComponent
  - user only
  - my details
  - my events
  - my private messages 
  - edit information
- `/profile/:id`
  - user only
  - other user details 
  - send DM
  - block user
  - unblock user

- `**`
  - NotFoundPageComponent


## Components



## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous
- Event Service


# Server

## Models

User model

```
username - String // required
email - String // required & unique
password - String // required
saved - [ObjectID<Event>]
```

saved Event model

```
id -  String // required
name - String // required
address -  String // required
users - array (id's) 
comments - array (strings) 
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
  
...
  

## Links

### Trello/Kanban

https://trello.com/b/RnmDlMGE/the-backstage-2

### Git

The url to your repository and to your deployed project
https://github.com/sasrous/the-Backstage-2


[Client repository Link](http://github.com)
[Server repository Link](http://github.com)

[Deploy Link](http://heroku.com)

### Slides



https://slides.com/nuriasasrous/the-backstage




