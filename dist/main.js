(()=>{var e={300:(e,t)=>{"use strict";var n=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("unable to locate global object")}();e.exports=t=n.fetch,n.fetch&&(t.default=n.fetch.bind(n)),t.Headers=n.Headers,t.Request=n.Request,t.Response=n.Response}},t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}(()=>{const e=n(300);document.querySelector(".texto"),document.getElementById("search").addEventListener("click",(async e=>{const n=document.getElementById("inlineFormInputName2").value,o=await t(n);console.log(o),document.getElementById("inlineFormInputName2").value=""}));const t=async t=>{let n=await e(`https://api.openweathermap.org/data/2.5/weather?q=${t}&units=metric&appid=590be985d863c65642e5fbf9e410de56`),i=await n.json();return o(i)},o=e=>{var t=new Date(1e3*e.sys.sunrise),n=new Date(1e3*e.sys.sunset);document.getElementById("city-title").textContent=`${e.name}, ${e.sys.country}`,document.getElementById("city-temp").textContent=e.main.temp,document.getElementById("city-description").textContent=e.weather[0].description,document.getElementById("city-humidity").textContent=e.main.humidity,document.getElementById("city-pressure").textContent=e.main.pressure,document.getElementById("city-tempmin").textContent=e.main.temp_min,document.getElementById("city-tempmax").textContent=e.main.temp_max,document.getElementById("sunrise-time").textContent=`${t.getHours()}:${t.getMinutes()}:${t.getSeconds()} UTC`,document.getElementById("sunset-time").textContent=`${n.getHours()}:${n.getMinutes()}:${n.getSeconds()} UTC`}})()})();