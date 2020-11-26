
var urls=[];

exports.createUrl = function(req, res) {
	let short={
    	"url": req.body.url, 
    	"shortUrl":makeShort()
    }
    urls.push(short);
    return res.send(short.shortUrl); 
};

exports.createUrlBulk = function(req, res) {
	let result = [];
    console.log(req.body);
	for (var i = req.body.urls.length - 1; i >= 0; i--) {
	   let u = req.body.urls[i];
	   let short= {
	    	"url": u, 
	    	"shortUrl":makeShort()
       }
       result.push(short);
	}

	
    urls = urls.concat(result);
    return res.send(result); 
};

exports.getUrls = function(req, res) {
    return res.send(urls); 
};


exports.redirect = function(req, res) {
	
	let find = urls.find((u)=>{
		return u.shortUrl === req.params.short;
	});
	
    res.redirect(301, find.url);
};

function makeShort() {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < 6; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}