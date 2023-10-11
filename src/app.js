// const express=require('express');
// const app=express();

// app.get('',(req,res)=>{
//     res.send('hello express !!');
// })

// app.get('/help',(req,res)=>{
//     res.send('help page');
// });

// app.get('/about',(req,res)=>{
//     res.send('the about page');
// });

// app.get('/weather',(req,res)=>{
//     res.send('the weather page');
// });

// app.listen(3000,()=>{
//     console.log('server is up on port 3000');
// })


// video -> 44
// const express=require('express');
// const app=express();

// app.get('',(req,res)=>{
//     res.send('<h1>the title</h1>');
// })

// app.get('/help',(req,res)=>{
//     res.send({
//         name:'kushagra',
//         age:22
//     });
// });

// app.get('/about',(req,res)=>{
//     res.send('<h1>the title</h1>');
// });

// app.get('/weather',(req,res)=>{
//     res.send({
//         forecast:'temp1',
//         location:'temp2'
//     });
// });

// app.listen(3000,()=>{
//     console.log('server is up on port 3000');
// })


// video->45
// const path=require('path');          //paths mein add and substract krne ke liye hota hai
// const express=require('express');
// const app=express();

// // console.log(__dirname);
// // console.log(__filename);

// const publicdirectorypath=path.join(__dirname,'../public');
// app.use(express.static(publicdirectorypath));

// // Ismien doubt yh hai ki khaali url pr index.html kyon call hora hai 

// app.get('/weather',(req,res)=>{
//     res.send({
//         forecast:'temp1',
//         location:'temp2'
//     });
// });

// app.listen(3000,()=>{
//     console.log('server is up on port 3000');
// })




// video -> 46
// const path=require('path');          //paths mein add and substract krne ke liye hota hai
// const express=require('express');
// const app=express();

// app.set('view engine','hbs');  //yh hota hai bataane ke liye ki we are using hbs

// const publicdirectorypath=path.join(__dirname,'../public');
// app.use(express.static(publicdirectorypath));

// app.get('',(req,res)=>{
//     res.render('index',{
//         title:'weather app',
//         name:'kushagra agrawal'
//     })   //yh jo render hota hai yh hota hee dynamic ke liye hai toh path dene ki jaroort ni 
// });

// app.get('/about',(req,res)=>{
//     res.render('about',{
//         title:'about me',
//         name:'kushagra agrawal'  
//     })
// })

// app.get('/help',(req,res)=>{
//     res.render('help',{
//         help:'this is a helping text'
//     })
// })

// app.get('/weather',(req,res)=>{  
//     res.send({
//         forecast:'temp1',
//         location:'temp2'
//     });
// });

// app.listen(3000,()=>{
//     console.log('server is up on port 3000');
// });






// ----------------------------video -> 48---------------------------
// const path=require('path');          //paths mein add and substract krne ke liye hota hai
// const express=require('express');
// const app=express();

// const publicdirectorypath=path.join(__dirname,'../public');
// const viewspath=path.join(__dirname,'../templates/views');

// //setup handle bars engine and views location
// app.set('view engine','hbs');  //yh hota hai bataane ke liye ki we are using hbs
// app.set('views',viewspath);

// //setup static directory to serve
// app.use(express.static(publicdirectorypath));

// app.get('',(req,res)=>{
//     res.render('index',{
//         title:'weather app',
//         name:'kushagra agrawal'
//     })   //yh jo render hota hai yh hota hee dynamic ke liye hai toh path dene ki jaroort ni 
// });

// app.get('/about',(req,res)=>{
//     res.render('about',{
//         title:'about me',
//         name:'kushagra agrawal'  
//     })
// })

// app.get('/help',(req,res)=>{
//     res.render('help',{
//         help:'this is a helping text'
//     })
// })

// app.get('/weather',(req,res)=>{  
//     res.send({
//         forecast:'temp1',
//         location:'temp2'
//     });
// });

// app.listen(3000,()=>{
//     console.log('server is up on port 3000');
// });





// video -> 49
// const path=require('path');          //paths mein add and substract krne ke liye hota hai
// const express=require('express');
// const hbs=require('hbs');

// const app=express();

// const publicdirectorypath=path.join(__dirname,'../public');
// const viewspath=path.join(__dirname,'../templates/views');
// const partialpaths=path.join(__dirname,'../templates/partials');

// //setup handle bars engine and views location
// app.set('view engine','hbs');  //yh hota hai bataane ke liye ki we are using hbs
// app.set('views',viewspath);
// hbs.registerPartials(partialpaths);

// //setup static directory to serve
// app.use(express.static(publicdirectorypath));

// app.get('',(req,res)=>{
//     res.render('index',{
//         title:'weather app',
//         name:'kushagra agrawal'
//     })   //yh jo render hota hai yh hota hee dynamic ke liye hai toh path dene ki jaroort ni 
// });

// app.get('/about',(req,res)=>{
//     res.render('about',{
//         title:'about me',
//         name:'kushagra agrawal'  
//     })
// })

// app.get('/help',(req,res)=>{
//     res.render('help',{
//         help:'this is a helping text',
//         name:'kushagra',
//         title:'Help'
//     })
// })

// app.get('/weather',(req,res)=>{  
//     res.send('weather',{
//         forecast:'temp1',
//         location:'temp2'
//     });
// });

// app.get('/help/*',(req,res)=>{
//     res.render('404',{
//         title:'help article not found'
//     })
// })

// app.get('/what',(req,res)=>{
//     res.render('404',{
//         error:'404',
//         title:'page not found'
//     });
// })

// app.listen(3000,()=>{
//     console.log('server is up on port 3000');
// });



//video-> 54
// const path=require('path');          //paths mein add and substract krne ke liye hota hai
// const express=require('express');
// const hbs=require('hbs');

// const app=express();

// const publicdirectorypath=path.join(__dirname,'../public');
// const viewspath=path.join(__dirname,'../templates/views');
// const partialpaths=path.join(__dirname,'../templates/partials');

// //setup handle bars engine and views location
// app.set('view engine','hbs');  //yh hota hai bataane ke liye ki we are using hbs
// app.set('views',viewspath);
// hbs.registerPartials(partialpaths);

// //setup static directory to serve
// app.use(express.static(publicdirectorypath));

// app.get('',(req,res)=>{
//     res.render('index',{
//         title:'weather app',
//         name:'kushagra agrawal'
//     })   //yh jo render hota hai yh hota hee dynamic ke liye hai toh path dene ki jaroort ni 
// });

// app.get('/about',(req,res)=>{
//     res.render('about',{
//         title:'about me',
//         name:'kushagra agrawal'  
//     })
// })

// app.get('/help',(req,res)=>{
//     res.render('help',{
//         help:'this is a helping text',
//         name:'kushagra',
//         title:'Help'
//     })
// })

// app.get('/weather',(req,res)=>{  
//     if(!req.query.address){
//         return res.send({error:'you must provide the address'});
//     }

//     console.log(req.query);
//     res.send({
//         forecast:'temp1',
//         location:'temp2',
//         address:req.query.address
//     });
// });

// app.get('/products',(req,res)=>{

//     if(!req.query.search){
//         return res.send({
//             error:'u must provide a search term'
//         })
//     }

//     console.log(req.query);
//     res.send({
//         product:[]
//     })
// })

// app.get('/help/*',(req,res)=>{
//     res.render('404',{
//         title:'help article not found'
//     })
// })

// app.get('/what',(req,res)=>{
//     res.render('404',{
//         error:'404',
//         title:'page not found'
//     });
// })

// app.listen(3000,()=>{
//     console.log('server is up on port 3000');
// });






// video -> 55
const path=require('path');          //paths mein add and substract krne ke liye hota hai
const express=require('express');
const hbs=require('hbs');
const geocode=require('./utils/geocode');
const forecast=require('./utils/forecast');
const { count } = require('console');


const app=express();

const publicdirectorypath=path.join(__dirname,'../public');
const viewspath=path.join(__dirname,'../templates/views');
const partialpaths=path.join(__dirname,'../templates/partials');

//setup handle bars engine and views location
app.set('view engine','hbs');  //yh hota hai bataane ke liye ki we are using hbs
app.set('views',viewspath);
hbs.registerPartials(partialpaths);

//setup static directory to serve
app.use(express.static(publicdirectorypath));

app.get('',(req,res)=>{
    res.render('index',{
        title:'weather app',
        name:'kushagra agrawal'
    })   //yh jo render hota hai yh hota hee dynamic ke liye hai toh path dene ki jaroort ni 
});

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'about me',
        name:'kushagra agrawal'  
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        help:'this is a helping text',
        name:'kushagra',
        title:'Help'
    })
})

app.get('/weather',(req,res)=>{  
    if(!req.query.address){    //address check 
        return res.send({error:'you must provide the address'});
    }

    geocode(req.query.address,(error,{longitude,latitude,country} = {})=>{
        if(error){                          // error check for geocode
            return res.send({error:error});
        }
    
        forecast(longitude,latitude,(error, forecastdata) => {
            if(error) return res.send({error:error});  // error check for forecast
    
            res.send({
                country:country,
                data:forecastdata,
                address:req.query.address
            })
        });
    
    });
    
});

app.get('/products',(req,res)=>{

    if(!req.query.search){
        return res.send({
            error:'u must provide a search term'
        })
    }

    console.log(req.query);
    res.send({
        product:[]
    })
})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:'help article not found'
    })
})

app.get('/what',(req,res)=>{
    res.render('404',{
        error:'404',
        title:'page not found'
    });
})

app.listen(3000,()=>{
    console.log('server is up on port 3000');
});
