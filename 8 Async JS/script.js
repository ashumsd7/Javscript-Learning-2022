"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
// setTimeout(() => {
//     console.log("I am timer");
// }, 5000);
// console.log(":d");

// const request= new XMLHttpRequest()
// request.open('GET','https://restcountries.com/v3.1/name/pakistan'
// )
// request.send();
//when send is completed it will send / emit a load event then
//call back function will run

// request.addEventListener('load',function(){
//     //this.responseText will only set after request comleted

// console.log(this.responseText);

// const [data]= JSON.parse(this.responseText)
// console.log(data.currencies);

// const html=` <article class="country">
// <img class="country__img" src="${data.flags.png}" />
// <div class="country__data">
//   <h3 class="country__name">${data.name.nativeName?.hin ?? 'Country Name'}</h3>
//   <h4 class="country__region">REGION</h4>
//   <p class="country__row"><span>👫</span>${(+data.population/ 1000000).toFixed(1)}</p>
//   <p class="country__row"><span>🗣️</span>${ data.languages.eng}</p>

// </div>
// </article>`

// countriesContainer.insertAdjacentHTML('beforeend',html)
// countriesContainer.style.opacity=1;
// })

// const request= new XMLHttpRequest()
// request.open('GET','https://restcountries.com/v3.1/name/pakistan'
// )
// request.send();

//SEND REQUEST USING FETCH

// function renderCountry(data) {
// //   const [data2] = JSON.parse(data);
// const [data2]= data;
//   data= data2;

//   const html = ` <article class="country">
// <img class="country__img" src="${data.flags.png}" />
// <div class="country__data">
//   <h3 class="country__name">${data.name.nativeName?.hin ?? "Country Name"}</h3>
//   <h4 class="country__region">REGION</h4>
//   <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
//     1
//   )}</p>
//   <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
 
// </div>
// </article>`;

//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   countriesContainer.style.opacity = 1;




// }

//  function getJSON(url,error='Something Went Wrong'){
//      return fetch(url).then(response=>{
//         if(!response.ok){
//             throw new Error(error + ' ' + response.status)
//         }
//         return  response.json()
//       })
// }

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response=>{
//         console.log(response);
//         if(!response.ok){
//             throw new Error('Country not found ' + response.status)
//         }
//         return  response.json()
//     }
//     )
//     .then( (data)=> renderCountry(data)).catch(err=>{
//         console.log(err);
//     })

//     // .finally((final)=>{
//     //     console.log(final);
//     // })
// };

// const getCountryData = function (country) {

//     getJSON(`https://restcountries.com/v3.1/name/${country}`,'Country not found' )





    // fetch(`https://restcountries.com/v3.1/name/${country}`)
    //   .then(response=>{
    //       console.log(response);
    //       if(!response.ok){
    //           throw new Error('Country not found ' + response.status)
    //       }
    //       return  response.json()
    //   }
    //   )
//       .then( (data)=> renderCountry(data)).catch(err=>{
//           console.log(err);
//       })
  
//       // .finally((final)=>{
//       //     console.log(final);
//       // })
//   };
  



// btn.addEventListener('click',()=>{
//     getCountryData("australia"); 
// })



// const lotteryPromise= new Promise((resolve , reject)=>{
//     console.log(resolve,reject);
//     resolve(' I am resolved')

// })


// lotteryPromise.then(res=>{
//     console.log(res);
// })

navigator.geolocation.getCurrentPosition(position=>{
    console.log(position), err=>{
        console.log(err);
    }
})


const getPosition= function(){
    return new Promise((res,rej)=>{
        navigator.geolocation.getCurrentPosition(position=>{
            res(position),
            err=>{
                rej(err)
            }
        })

    })
}