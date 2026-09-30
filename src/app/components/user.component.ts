import { Component } from "@angular/core"
import { FormControl } from "@angular/forms";
import { myUser } from "./user";
import { FormsModule } from "@angular/forms";

@Component({
    selector:'app-user',
    templateUrl:'./user.html',
    imports:[FormsModule]
})

export class UserComponent {
    user: myUser = {
        name: '',
        email: '',
        password: '',
        dateOfBirth: undefined
    };
    onSubmit() {
        console.log('User submitted:', this.user);
    }
  
}