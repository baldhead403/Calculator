function myCalculator(id) {
    document.calc.display.value +=id
    
}
function clearScr() {
    document.calc.display.value=""
}
function modNum() {
    
    document.calc.display.value +="%"

}
function calculate() {
    
        input = eval(document.calc.display.value)
        document.calc.display.value = input
      
}
