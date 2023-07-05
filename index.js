// function appendNumber(numb)

// {
// var numb=numb

// function add()

// {
// var res=0

// res+=numb;
// console.log(res)
// return res

// }

// function sub()

// {
// res-=numb;
// console.log(res)
// return res

// }


// function mul()

// {
// res*=numb;
// console.log(res)
// return res

// }


// function div(numb1, numb2)

// {
// return numb1/numb2

// }

// function percent()

// {
// return numb/100

// }


// function sqRoot()
// {
// return Math.sqrt(numb);
// }

// document.getElementById("result").textContent=numb
// }
   var display = document.getElementById("display");
    var expression = "";

    function handleInput(value) {
      expression += value;
      display.value = expression;
    }

    function handleDecimal() {
      if (expression.indexOf(".") === -1) {
        expression += ".";
        display.value = expression;
      }
    }

    function handleOperator(operator) {
      expression += " " + operator + " ";
      display.value = expression;
    }

    function calculate() {
      try {
        var result = eval(expression);
        display.value = result;
        expression = result;
      } catch (error) {
        display.value = "Error";
      }
    }

    function clearInput() {
      expression = "";
      display.value = "";
    }
  




