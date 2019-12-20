


//accordion


let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}





// Calculator


let month = document.getElementById('month');
let sum_credit = document.getElementById("sum_credit");
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
let rng = document.getElementById('myRange');
let div = document.getElementById('test');
output.innerHTML = slider.value;


slider.oninput = function () {
    output.innerHTML = this.value;
    div.style.width = (rng.value-500000)/85000  + '%';
    output2.innerHTML = slider.value/100*10;
    slider2.min = slider.value/100*10;
    slider2.max = slider.value/100*99;
    slider2.value = slider.value/100*10;
    div2.style.width = (slider2.value-slider2.min) /(slider2.max/110) + '%';


        function sum(a, b) {
        return a - b;
    }
    function allSum(v,g,c) {
        let i = c/100/12;

        return v*(i+(i/(Math.pow((1+i),(g*12))-1)))
    }
    let result  = allSum((slider.value - slider2.value), slider4.value, slider3.value);
    month.innerHTML = Math.round(result)+ ' ' + 'сом';
    sum_credit.innerHTML = sum(slider.value, slider2.value) + 'сом';
};

let slider2 = document.getElementById("myRange2");
let output2 = document.getElementById("demo2");
let div2 = document.getElementById('test2');
output2.innerHTML = slider.value/100*10;
sum_credit.innerHTML = slider.value-slider2.value+ ' ' + 'сом';

slider2.oninput = function () {
    output2.innerHTML = this.value;
    slider2.max = slider.value/100*99;
    div2.style.width = (slider2.value-slider2.min) /(slider2.max/110) + '%';

    function sum(a, b) {
        return a - b;
    }
    function allSum(v,g,c) {
        let i = c/100/12;

        return v*(i+(i/(Math.pow((1+i),(g*12))-1)))
    }
    let result  = allSum((slider.value - slider2.value), slider4.value, slider3.value);
    console.log(result);
    month.innerHTML = Math.round(result)+ ' ' + 'сом';
    sum_credit.innerHTML = sum(slider.value, slider2.value) + 'сом';
};

let slider3 = document.getElementById("myRange3");
let output3 = document.getElementById("demo3");
let rng3 = document.getElementById('myRange3');
let div3 = document.getElementById('test3');
let credit = document.getElementById("credit");
output3.innerHTML = slider3.value;
credit.innerHTML = slider3.value + '%';

slider3.oninput = function () {
    output3.innerHTML = this.value;
    credit.innerHTML = this.value + '%';
    div3.style.width = (rng3.value-6) *12.1 + '%';
    function allSum(v,g,c) {
        let i = c/100/12;

        return v*(i+(i/(Math.pow((1+i),(g*12))-1)))
    }
    let result  = allSum((slider.value - slider2.value), slider4.value, slider3.value);
    console.log(result);
    month.innerHTML = Math.round(result)+ ' ' + 'сом';

};

let slider4 = document.getElementById("myRange4");
let output4 = document.getElementById("demo4");
let rng4 = document.getElementById('myRange4');
let div4 = document.getElementById('test4');
output4.innerHTML = slider4.value;

slider4.oninput = function () {
    output4.innerHTML = this.value;
        div4.style.width = (rng4.value-5)*9.9 + '%';
    function allSum(v,g,c) {
        let i = c/100/12;

        return v*(i+(i/(Math.pow((1+i),(g*12))-1)))
    }
    let result  = allSum((slider.value - slider2.value), slider4.value, slider3.value);
    console.log(result);
    month.innerHTML = Math.round(result)+ ' ' + 'сом';

};

function allSum(v,g,c) {
    let i = c/100/12;

    return v*(i+(i/(Math.pow((1+i),(g*12))-1)))
}
let result  = allSum((slider.value - slider2.value), slider4.value, slider3.value);
console.log(result);
month.innerHTML = Math.round(result) + ' ' + 'сом';







