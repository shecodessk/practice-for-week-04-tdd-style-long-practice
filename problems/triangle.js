class Triangle{
    constructor(length, width, height){
        this.length = length;
        this.width = width;
        this.height = height;
        this.isValid = null;
    }

    getPerimeter(){
       return this.length + this.width + this.height;
    }

    hasValidSideLengths(){
        return this.length < this.width + this.height && this.width < this.length + this.height && this.height < this.width + this.length ? true : false
    }
    validate(){
        return (this.hasValidSideLengths()) ? this.isValid = true : this.isValid = false;
    }
}





class Scalene extends Triangle{
    constructor(length, width, height){
        super(length, width, height);
        this.isValidTriangle = this.hasValidSideLengths();
        this.isValidScalene = null;
    }
    
    isScalene(){
        return (this.length !== this.width && this.length !== this.height) ? true : false
    }
    validate(){
        return (this.isScalene()) ? this.isValidScalene = true : this.isValidScalene = false;
    }

}
class Isosceles extends Triangle{
    constructor(length, width, height){
        super(length, width, height);
        this.isValidTriangle = this.hasValidSideLengths();
        this.isValidIsosceles = null;
    } 
    isIsosceles(){
        return (this.length === this.width || this.length === this.height || this.width === this.height ) ? true : false
    }
    validate(){
        return (this.isIsosceles()) ? this.isValidIsosceles = true : this.isValidIsosceles = false;
    }
}
module.exports = {Triangle, Scalene, Isosceles}