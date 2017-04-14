const request=require('request');
var getWeather=(lat,long,callback)=>{
    request({
        url:`https://api.darksky.net/forecast/e54b3860c58e4d17e6267a24fb7edfaa/${lat},-${long}`,
        json:true
    },(err,res,body)=>{
        if(err){
            callback("something went wrong")
        }else if(body.status===400){//zero_results is specific to google api
            callback('Unable to find a location for that address')
        }
        else{
            callback(undefined,{
                temperature:body.currently.temperature,
                apparentTemperature:body.currently.apparentTemperature
            });
        }
    })

}
module.exports.getWeather=getWeather;