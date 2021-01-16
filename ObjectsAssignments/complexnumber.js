function Complex(realPart, imaginaryPart){
    this.realPart = realPart;
    this.imaginaryPart = imaginaryPart;
    this.addition = function(obj){
        return this.realPart + obj.realPart +'+' +obj.imaginaryPart + this.imaginaryPart + 'i';
    };
    this.subtraction = function(obj){
        return this.realPart - obj.realPart +'+' +obj.imaginaryPart - this.imaginaryPart + 'i';
    };
    this.multiplication = function(obj){
        return this.realPart * obj.realPart +'+' +obj.imaginaryPart * this.imaginaryPart + 'i';
    };
    this.division = function(obj){
        return parseInt(this.realPart / obj.realPart) +'+' +parseInt(obj.imaginaryPart / this.imaginaryPart) + 'i';
    };
}

complex1 = new Complex(4,6);
complex2 = new Complex(1,2);
console.log(complex2.addition(complex1));
console.log(complex2.division(complex1));