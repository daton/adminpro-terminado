import { Component, OnInit } from '@angular/core';
import { reject } from 'q';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() { 
   
    this.contarTres().then(
     ()=>console.log("todo bien con al promesa")
    ).catch(error=>console.error("algo salio mal errroir"));
  }

  ngOnInit() {
  }
  contarTres():Promise<boolean>{
    return  new Promise((resolve, reject)=>{
      let contador=0;
    let intervalo=  setInterval(()=>{
       
       contador +=1;
       console.log(contador);
       if(contador===3){
         resolve(true);
         clearInterval(intervalo);
       }

      },1000)
    });

  }

}
