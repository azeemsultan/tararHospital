const express    = require("express");
const router     = express.Router();
const bodyparser = require("body-parser");
const decode     = require("jwt-decode");
const SmartyStreetsSDK = require("smartystreets-javascript-sdk");
const SmartyStreetsCore = SmartyStreetsSDK.core;
const Lookup = SmartyStreetsSDK.usStreet.Lookup;

let authId = "5d24c140-c748-5bac-bb24-a636f64d9639";
let authToken =  "sjEFUJreovjzBJwo7w7c";
const credentials = new SmartyStreetsCore.StaticCredentials(authId, authToken);

let client = SmartyStreetsCore.buildClient.usStreet(credentials);


function handleError(response) {
	console.log(response);
}


router.use(bodyparser.json());
router.use(bodyparser.urlencoded());


router.get('/location', async (req,res )=>{
    let result;

        let lookup = new Lookup();
        lookup.street = "Amir Rd, Shad Bagh, Lahore, Punjab";
        lookup.maxCandidates = 3;
        lookup.match = "invalid";
  await client.send(lookup)
	.then((res)=>{
        result=res;
    })
    .catch(handleError);
    var location =result.lookups[0].result[0];
    res.send(location.metadata);

});




router.update;
module.exports = router;