import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { signal } from "@angular/core";
@Component({
    selector:'app-index',
    templateUrl:'./index1.html',
    imports:[RouterOutlet]
})
export class IndexComponent{
    alertMessage(){
        alert('Hello from index component');
    }  
     protected readonly title = signal('my-angular-app');            
}
