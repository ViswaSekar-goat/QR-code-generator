const apiurl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
const img = document.querySelector(".img")

document.querySelector(".button").addEventListener("click",()=>{
  generate(document.querySelector(".input").value);
})

async function generate(val){
  img.src = apiurl+val;
}

generate();