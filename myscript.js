let result = document.getElementById("result");
    
        function insertValue(value) {
        result.value += value;
        }
    
        function clearResult() {
        result.value = "";
        }
    
        function calculate() {
        let expression = result.value;
        let answer = eval(expression);
        result.value = answer;
        }