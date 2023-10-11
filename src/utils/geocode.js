// const request=require('postman-request');
// const geocode=(address,callback)=>{
//     const url='http://api.positionstack.com/v1/forward?access_key=ce6979a143144a2ddb0d0362fdea964a&query='+encodeURIComponent(address)+'&limit=1';

//     request({url:url,json:true},(error,response)=>{
//         if(error){
//             callback('unable to connect to geocoding service !!',undefined);
//         }
//         else if(response.body.error){
//             callback(response.body.error,undefined);
//         }
//         else if(response.body.data.length==0){
//             callback('unable to find the location, try another search !!',undefined);
//         }
//         else{
//             callback(undefined,{
//                 latitude:response.body.data[0].latitude,
//                 longitude:response.body.data[0].longitude
//             });
//         }
//     });
// };

// module.exports=geocode;

// video -> 40
const request=require('postman-request');
const geocode=(address,callback)=>{
    const url='http://api.positionstack.com/v1/forward?access_key=ce6979a143144a2ddb0d0362fdea964a&query='+encodeURIComponent(address)+'&limit=1';

    request({url,json:true},(error,{body}={})=>{
        if(error){
            callback('unable to connect to geocoding service !!',undefined);
        }
        else if(body.error){
            callback("can't find the location, try another one !",undefined);
        }
        else if(body.data.length===0){
            callback('unable to find the location, try another search !!',undefined);
        }
        else{
            callback(undefined,body.data[0]);
        }
    });
};

module.exports=geocode;