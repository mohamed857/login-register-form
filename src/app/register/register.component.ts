import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
constructor(public _shared: SharedService){};
  user={
    name: '',
    latsName: '',
    age: 0,
    email: '',
    password: ''
  }

  createUser=(name:any,latsName:any,email:any,password:any)=>{
    this.user={
      name: name,
      latsName: latsName,
      age: 22,
      email: email,
      password: password
    }
    console.log("hellowwwwwwwwwwwwwwwwwwwwww: "+ name)
    this._shared.createUser(this.user).subscribe(
      res=>{
        console.log('created : '+this.user );
        this.user={
          name: '',
          latsName: '',
          age: 0,
          email: '',
          password: ''
        }
      },
      err=>{
        console.error("error in creation : "+err);
        
      }
    )
  }

}
