const image = document.getElementById("img"),
      input = document.getElementById("inp"),
      button = document.getElementById("button");
      download = document.getAnimations("downlaod");

button.addEventListener("click" , ()=>{
    const qrcode = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
    image.src = qrcode;
});

image.addEventListener("click", async()=>{
    const responce = await fetch (image.src);
    const blob = await responce.blob();
    const downlaodlink = document.createElement("a");
    downlaodlink.href = URL.createObjectURL(blob);
    downlaodlink.download = "qrcode.jpg";
    downlaodlink.click();
});