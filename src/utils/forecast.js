// const request = require('postman-request');

// const forecast=(longitude,latitude,callback)=>{
//     const url='http://api.weatherstack.com/current?access_key=42577a104080b7b8315ba3aa5f1551a9&query='+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)+'&units=f';
//     request({url:url,json:true},(error,response)=>{
//         if(error){
//             callback('unable to connect to weather service !!',undefined);
//         }
//         else if(response.body.error){
//             callback('unable to find the location !!',undefined);
//         }
//         else{
//             const data=response.body.current.weather_descriptions[0]+'. The original temperature is '+response.body.current.temperature+' Fahrenheit, But the feeling temperature is '+response.body.current.feelslike+' Fahrenheit';
//             callback(undefined,data);
//         }
//     });

// };

// module.exports=forecast;

// video -> 40
const request = require('postman-request');

const forecast=(longitude,latitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=42577a104080b7b8315ba3aa5f1551a9&query='+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)+'&units=f';
    request({url,json:true},(error,{body}={})=>{
        if(error){
            callback('unable to connect to weather service !!',undefined);
        }
        else if(body.error){
            callback('unable to find the location !!',undefined);
        }
        else{
            console.log(body);
            const data=body.current.weather_descriptions[0]+'. The original temperature is '+body.current.temperature+' Fahrenheit, But the humidity is ' + body.current.humidity;
            callback(undefined,data);
        }
    });

};

module.exports=forecast;