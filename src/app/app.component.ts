import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'peopleskills-front';

  constructor() {
  }

  displayAppUser(event: any){
    console.log(event);
  }


}//end
