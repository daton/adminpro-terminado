import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable, Subscription } from "rxjs/Rx";

@Component({
  selector: "app-rxjs",
  templateUrl: "./rxjs.component.html",
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription:Subscription
  constructor() {


    this.subscription=this.regresaObservable()
      .subscribe(
        numero => {
          console.log("subs", numero);
        },
        error => {
          console.log("HUbo un error en el observador 2 veces");
        },
        () => {
          console.log("el observador termino");
        }
      );
  }

  ngOnInit() {}
  ngOnDestroy(){
this.subscription.unsubscribe();
  }
  regresaObservable(): Observable<any> {
    return new Observable(observer => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador += 1;
      let  salida={
         valor:contador
        }
        observer.next(salida);

      
        
      }, 500);
    }).retry(2).map((res:any)=>{
     return res.valor
    }).filter((valor, index)=>{
      if(valor%2===1){
   //par
   return true
      }else{
      //impar
      return false
      }
      console.log("valor ", valor, index)
    
    })
  }
}
