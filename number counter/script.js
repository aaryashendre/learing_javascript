const display = document.getElementById("display")
const upvalue = document.getElementById("up")
const downvalue = document.getElementById("down")

let data = 0;
  
//creation of increment function
function up() {
    data = data + 1;
    // 0 = 0 + 1;
    display.innerHTML = data
    console.log(data)
}
//creation of decrement function
function down() {
    data = data - 1;
    display.innerHTML = data
    console.log(data)
}