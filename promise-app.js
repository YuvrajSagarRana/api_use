let yargs=require('yargs');
const axios=require('axios')

const argv=yargs.options({
    a:{//-a
        demand: true,//to fetch data it is necessary
        alias: 'address',//--address
        describe: 'Put the address',
        string:true//it make compulsory to pass address
    }
}).help().alias('help','h').argv;
var encodeAddress=encodeURIComponent(argv.address),
url=`http://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`;

axios.get(url).then((response)=>{
  console.log(response.data);
}).catch((error)=>{
    console.log(error)
})
