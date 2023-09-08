const getper = document.getElementById("getper");
const inpreq = document.getElementById("inpreq");
const yourper = document.getElementById("yourper");
const his = document.getElementById("his");
const her = document.getElementById("her");



getper.addEventListener("click", () => {

    if (his.value == "") {
        console.log("please input his name");
        inpreq.innerText = "please input his name";
        inpreq.style.color = "red"
    }

    else if (her.value == "") {
        console.log("please input her name");
        inpreq.innerText = "please input her name";
        inpreq.style.color = "red"
    }

    else {
        let x = Math.floor((Math.random() * 100) + 1);
        yourper.innerText = `hello ${his.value} & ${her.value} your love percentage is ${x}%. Congratulation !`

    }
})