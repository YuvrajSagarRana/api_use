let yargs=require('yargs');
const geocode=require('./geocode/geocode')
const argv=yargs.options({
    a:{//-a
        demand: true,//to fetch data it is necessary
        alias: 'address',//--address
        describe: 'Put the address',
        string:true//it make compulsory to pass address
    }
}).help().alias('help','h').argv;

geocode.geocodeAddress(argv.address,(error,result)=>{
if(error){
 console.log(error)
}else{
console.log(JSON.stringify(result,undefined,2))}
})

//%20 is used for space to fi(ll in url bar
//encodeURIComponent('1310 lombard street philadelphia)=>gives=>1310%20lombard%...
//decodeURIComponent('Andrew%20Mead')=>give=>'Andrew Mead'