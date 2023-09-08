const even = document.getElementById("even"),
plus = document.getElementById("plus"),
inp =  document.getElementById("inp"),
text = document.getElementById("text"),
text1 = document.getElementById("text1");


even.addEventListener("click" , ()=>{
  if (inp.value == "") {
      
  }
 else if (inp.value %2 == 0) {
      text.innerText = `${inp.value} is even number`;
      console.log("clicked")
  } else {
      text.innerText = `${inp.value} is odd number`;

  }
})

plus.addEventListener("click" , ()=>{
  if (inp.value == "") {
      
  }
 else if (inp.value >= 0) {
      text1.innerText = `${inp.value} is positive number`;
      console.log("clicked")
  } else {
      text1.innerText = `${inp.value} is negative number`;

  }
})