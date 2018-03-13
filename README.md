Guide to host locally:

1. Go to dinnerplanner-html with terminal or windows CMD.
2. Create the file package.json and paste this into it:
    
    ```
    {    
        "name": "Demo", 
        "version": "1.0.0", 
        "description": "demo project.", 
        "scripts": { 
            "lite": "lite-server --port 10001", 
            "start": "npm run lite" 
        }, 
        "author": "", 
        "license": "ISC", 
        "devDependencies": { 
            "lite-server": "^1.3.1" 
        } 
    }
    ```

2. Run `npm install`
3. Run `npm start`
4. The website is now hosted at `localhost:10001`