class Form{
    constructor(field){
        this.field = field
    }
    isValid(){
        return this.field.map(f => f.isValid()).every(f => f)
    }
}