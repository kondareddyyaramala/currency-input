import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'max-number-of-directives';
  public form: FormGroup;
  
  hideElement = false;

  constructor(){
    this.form = new FormGroup({
      price: new FormControl('1290')
    })

    this.form.valueChanges.subscribe(v => 
      console.log('Component ... ', v)
    );
  }

}
