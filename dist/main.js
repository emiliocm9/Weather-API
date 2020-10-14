(()=>{"use strict";var e={300:(e,t)=>{var n=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("unable to locate global object")}();e.exports=t=n.fetch,n.fetch&&(t.default=n.fetch.bind(n)),t.Headers=n.Headers,t.Request=n.Request,t.Response=n.Response}},t={};function n(c){if(t[c])return t[c].exports;var s=t[c]={exports:{}};return e[c](s,s.exports,n),s.exports}(()=>{const e=e=>fetch("https://source.unsplash.com/1600x900?"+e,{method:"get"}),t=n(300),c=document.getElementById("search"),s=document.getElementById("fahrenheit"),a=document.getElementById("celsius"),o=document.querySelector("#image-body"),i=document.querySelector("#icon-image");s.addEventListener("click",(()=>r()));const r=async()=>{try{const e=document.getElementById("city-title").textContent;await l("imperial",e)}catch{alert("Error: there's no informationa available yet.")}};a.addEventListener("click",(()=>d()));const d=async()=>{try{const e=document.getElementById("city-title").textContent;await l("metric",e)}catch{alert("Error: there's no informationa available yet.")}};c.addEventListener("click",(async()=>{try{const e=document.getElementById("inlineFormInputName2").value;await m(e),await l("metric",e),document.getElementById("inlineFormInputName2").value=""}catch{alert("Sorry: we couldn't find your city")}}));const m=async t=>{let n=await e(t);o.classList.replace("d-none","d-block"),o.src=n.url},l=async(e,n)=>{let c=await t(`https://api.openweathermap.org/data/2.5/weather?q=${n}&units=${e}&appid=590be985d863c65642e5fbf9e410de56`),s=await c.json();return y(s,e)},u=e=>"imperial"==e?"°F":"°C",y=(e,t)=>{var n=new Date(1e3*e.sys.sunrise),c=new Date(1e3*e.sys.sunset);(e=>{"imperial"==e?(s.classList.replace("btn-secondary","btn-success"),a.classList.replace("btn-success","btn-secondary")):(a.classList.replace("btn-secondary","btn-success"),s.classList.replace("btn-success","btn-secondary"))})(t),(e=>{i.src=`http://openweathermap.org/img/w/${e.weather[0].icon}.png`,i.classList.replace("d-none","d-block")})(e),document.getElementById("city-title").textContent=`${e.name}, ${e.sys.country}`,document.getElementById("city-temp").textContent=`${e.main.temp} ${u(t)}`,document.getElementById("city-description").textContent=e.weather[0].description,document.getElementById("city-humidity").textContent=e.main.humidity,document.getElementById("city-pressure").textContent=e.main.pressure,document.getElementById("city-tempmin").textContent=`${e.main.temp_min} ${u(t)}`,document.getElementById("city-tempmax").textContent=`${e.main.temp_max} ${u(t)}`,document.getElementById("sunrise-time").textContent=`${n.getHours()}:${n.getMinutes()}:${n.getSeconds()} UTC`,document.getElementById("sunset-time").textContent=`${c.getHours()}:${c.getMinutes()}:${c.getSeconds()} UTC`}})()})();