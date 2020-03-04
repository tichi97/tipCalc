function calculate(){
    var bill = document.getElementById('bill').value;
    var service = document.getElementById('service').value;
    var people = document.getElementById('people').value;

    var tip = (bill*service/100)/people;
    console.log(tip);
    console.log('hi');
}
