- Create react app
- Configured Tailwind css into our app
- Header
- Routing of app
- Build Login Form
- Sign up form
- Form Validation
- useRef hook
- use firebase for authentication
- firebase setup
- deploying our app to production
- create sigin up user Account in fire base
- implement sign in user api
- created redux store with user slice to keep user data
- implemented sign out featue
- added photo name
- updated profile api call
- navigation
- build fetch movies from TMDB
- resolved bug issue for navigation when user is not signed and able to go to browse page 
- resolved bug fix for user display name and profile picture upadte
- if user is not logged redirect to login page
- when my header component unloads/unmounts it will unsubscribe this event, is we are not doing this then when every time header components loading this use effect call -- Unsubscribed to onauthStatusChanged() callback.

- Add harcoded values to the constant files
- register for TMBD API and create new app and get access token
- Make get data from TMBD Now playing list api
- store NowPlaying Movies to store
- custom hook for now playing movies
- updated store with movies data
- create movie slice
- planning for main container and seconday container
- fetch data for triler video
- custom hook for trailer video
- update store with trailer video data
-  embedded the you tube video
- make it autoplay and mute
- tailwind class to make main container look awsome
- Build secondary component
- Movie list built
- Movie card build 
- Found out TMDB cdn url
- Made browse page good with tailwind css
- i create use popular movies, top rated movies, upcoming movies custom hooks
- Add gpt search feature
- gpt search bar
- added mutli language feature in our ***
- Integrate gpt Api's()
- set aopen ai API key
- install openai package






- Feature We Build
    - Login/Sign up
      - sign in /Sign up form
      - Redirect to browse page
    - Browse Page (after authentication)
      - Header
      - Main movie 
        - Trailer in background
        - Title and desc
        - play button
        - Movie suggestion
          - Movie list * n
  - Netfix gpt
    - Seach bar
    - Movie suggestions


- Deplyment to firebase
1. npm install -g firebase-tools
2. firebase login
3. firebase init
4. i am doing manually deployment from local
5. I choose this option -  Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
6. just select option for you want to select existiing project and hit enter
7. npm run build
8. Follow this url: https://firebase.google.com/docs/hosting
9. firebase deploy


npm install -D @reduxjs/toolkit
npm install react-redux