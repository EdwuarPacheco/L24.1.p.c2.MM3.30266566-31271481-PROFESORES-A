import Cl_Profesor from "./Cl_Profesor.js";
export default class Cl_pContratado extends Cl_Profesor{
    constructor(n,b,hT){
        super(n, b);
        this.horasTraba = hT;
    }
    set horasTraba(hT){
        this._horasTraba = hT;
    }
    get horasTraba(){
        return this._horasTraba;
    }
    pagoHoras(){
        this._horasTraba*10 + this._bono;
    }
}