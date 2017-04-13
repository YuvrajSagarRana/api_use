let request=require('request');
let yargs=require('yargs');
const argv=yargs.options({
    a:{//-a
        demand: true,//to fetch data it is necessary
        alias: 'address',//--address
        describe: 'Put the address',
        string:true//it make compulsory to pass address
    }
}).help().alias('help','h').argv;
var encodeAddress=encodeURIComponent(argv.address);
request({
    url:`http://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
    json:true
},(err,res,body)=>{
    console.log(body.results[0].geometry.location.lat);
    console.log(body.results[0].geometry.location.lng);
})
//%20 is used for space to fi(ll in url bar
//encodeURIComponent('1310 lombard street philadelphia)=>gives=>1310%20lombard%...
//decodeURIComponent('Andrew%20Mead')=>give=>'Andrew Mead'