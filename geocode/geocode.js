const request=require('request');
var geocodeAddress=(address,callback)=>{
    var encodeAddress=encodeURIComponent(address);
    request({

        url:`http://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
        json:true
    },(err,res,body)=>{
        if(err){
            callback("something went wrong")
        }else if(res.statusCode===400){//zero_results is specific to google api
            callback('Unable to find a location for that address')
        }
        else if(res.statusCode=200){
            callback(undefined,{

                lat:body.results[0].geometry.location.lat,
                long:body.results[0].geometry.location.lng
            });
        }
    })

}
module.exports.geocodeAddress=geocodeAddress;