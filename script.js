let imgBox = document.getElementById('imgBox');
let qrImage = document.getElementById('qrImage');
let button = document.getElementById('btn');

button.addEventListener("click",()=>{
  let qrText = document.getElementById('qrText');
  imgBox.classList.add("showImg");
  qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
  button.innerHTML = "Reload";
  button.addEventListener("click",()=>{
    location.reload();
  })
})

let qrText = document.getElementById('qrText');

qrText.addEventListener("keypress",function(event){
  if(event.key === "k"){
    event.preventDefault();
    button.click();
  }
})