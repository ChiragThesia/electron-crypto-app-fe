### Operating System: MACOS
---
### Node Version:  12.18.3
---
### Instruction:
1. Clone the App: `git clone https://github.com/ChiragThesia/electron-crypto-app-fe.git`
2. Clone Backend Repo: `git clone https://github.com/ChiragThesia/electron-crypto-server.git` (this step is temporary as Heroku had an error)
3. Open the App Directory: `cd electron-crypto-app`
4. Install App Dependencies: `npm install`
5. Open the Back end Directory: `cd electron-crypto-server`
6. Create a .env file and use .env.example as reference. 
    - Obtain an API key from https://coinmarketcap.com/api/
7. Install Server Dependencies: `npm install`
8. Run Server: `npm run server`
    - Check that you see a: **Server is running at http://localhost:8080**
9. Run App: `npm run crypto-app`
----
This should allow you to run the app fully, the only disfunction aspect is the button for screenshotting which should be implmented with more time as more research is required. 
