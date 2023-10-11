console.log("client side javascript file is ready !!");

// fetch('https://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data);
//     })
// });

// fetch('http://localhost:3000/weather?address=Boston').then((response)=>{
//     response.json().then((data)=>{

//         if(data.error){
//             console.log(data.error);
//         }
//         else{
//             console.log(data.country);
//             console.log(data.data);
//        
//     })
// })

const weatherform=document.querySelector('form');
const search=document.querySelector('input');
const messageone=document.querySelector('#message-1');
const messagetwo=document.querySelector('#message-2');

weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()    //isse vo default action prevent krlenge
    const location=search.value;
    console.log(search.value);

    messageone.textContent='Loading !!';
    messagetwo.textContent='';           // isko empty krenge kyonki pichle waala text save naa ho isliye

    fetch('http://localhost:3000/weather?address='+encodeURIComponent(location)).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                messageone.textContent=data.error;
            }
            else{
                messageone.textContent=data.country;
                messagetwo.textContent=data.data;
            }
        })
    })

})



