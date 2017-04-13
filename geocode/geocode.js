const request=require('request');
var geoAddress=(address,callback)=>{
    var encodeAddress=encodeURIComponent(address);
    request({
        url:`http://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
        json:true
    },(err,res,body)=>{
        if(err){
            callback("something went wrong")
        }else if(body.status==='ZERO_RESULTS'){//zero_results is specific to google api
           callback('Unable to find a location for that address')
        }
        else if(body.status=='OK'){
            callback(undefined,{
                lat:body.results[0].geometry.location.lat,
                long:body.results[0].geometry.location.lng
            });
        }
    })

}
module.exports.geocodeAddress=geoAddress;