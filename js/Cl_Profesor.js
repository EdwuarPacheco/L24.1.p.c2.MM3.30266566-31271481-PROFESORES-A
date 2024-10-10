export default class Cl_Profesor{
    constructor(n, b){
        this.nombre = n;
        this.bono = b;
    }
    set nombre(n){
        this._nombre = n;
    }
    get nombre(){
        return this._nombre;
    }
    set bono(b){
        this._bono = b;
    }
    get bono(){
        return this._bono;
    }
}