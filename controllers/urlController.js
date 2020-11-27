
var urls=[];

exports.createUrl = function(req, res) {
	if(!validURL(req.body.url))
		throw new Error("Invalid url");

	let short={
    	"url": req.body.url, 
    	"shortUrl":makeShort()
    }
    urls.push(short);
    return res.send(short.shortUrl); 
};

exports.createUrlBulk = function(req, res) {
	let result = [];
   
	for (var i = req.body.urls.length - 1; i >= 0; i--) {
	   let u = req.body.urls[i];

	   if(!validURL(u))
		throw new Error("Invalid url");

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
	if(!find)
		throw new Error("URL not found");
	
    res.redirect(301, getValidUrl(find.url));
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

function validURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}



function getValidUrl (url) {
   
    let newUrl = url.trim().replace(/\s/g, "");

    if(/^(:\/\/)/.test(newUrl)){
        return `http${newUrl}`;
    }
    if(!/^(f|ht)tps?:\/\//i.test(newUrl)){
        return `http://${newUrl}`;
    }

    return newUrl;
};
