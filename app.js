let yargs=require('yargs');
const geocode=require('./geocode/geocode')
const weather=require('./weather/weather')
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
    weather.getWeather(result.lat, result.long, (error,results)=>{
        if(error){
            console.log(error)
        }else{
            console.log(`${results.temperature}-${results.apparentTemperature}`)
        }

    })

}
})

//%20 is used for space to fi(ll in url bar
//encodeURIComponent('1310 lombard street philadelphia)=>gives=>1310%20lombard%...
//decodeURIComponent('Andrew%20Mead')=>give=>'Andrew Mead'