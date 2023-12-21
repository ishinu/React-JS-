import React from 'react';
import ReactDOM from 'react-dom/client';


class car {
  constructor(name){
    this.brand = name;
  }
  present(){
    return 'I have a '+ this.brand;
  }
}

class Model extends car{
  constructor(name,mod){
    super(name);
    this.model=mod;
  }
  show(){
    return this.present() + ', it is a '+ this.model
  }
}

const mycar = new Model('Ford','Mustang');
console.log(mycar.show());
