# Runing

## Requirements

 * Download and install Node.js (https://nodejs.org/en/download/).
   Node.js 0.10 or higher is required.

## Installing

 * Execute: [`npm install` command]:

	```bash
	$ npm install express
	```

## Execute

  * Execute: [`node app.js` command]:

	```bash
	$ node app.js
	```

  * Default server port 3000

## Api

  * POST http://localhost:3000/api/url Create a shortened version of the url send in json format:

  ```javascript
	{
	  "url" : string
	}
  ```

  * GET http://localhost:3000/api/url Return the list of urls:

  ```javascript
	{
	   "url": string,
       "shortUrl": string
	}
  ```

  * POST http://localhost:3000/api/url/bulk Create a shortened version of the url send in json format:
- Request
```javascript
	{
	  "urls":[string]
	}
  ```
  
 - Response
     
```javascript
	[{
	  "url": string,
       "shortUrl": string
	}]
  ```

## Testing

  * Open the url http://localhost:3000/[short] using any short string in the system.
  * Save url http://localhost:3000/save.html.
  * Bulk save url http://localhost:3000/bulk.html.
  * View url http://localhost:3000/view.html.