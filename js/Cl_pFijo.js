import Cl_Profesor from "./Cl_Profesor.js";
export default class Cl_Fijo extends Cl_Profesor{
    constructor(n, b, sB){
        super(n, b);
        this.sueldoBase = sB;
    }
    set sueldoBase(sB){
        this._sueldoBase = sB;
    }
    get sueldoBase(){
        return this._sueldoBase;
    }
    sueldo(){
      return this._sueldoBase + this._bono;
    }

}