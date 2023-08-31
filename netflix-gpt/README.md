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