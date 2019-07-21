import { Component } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent{
  previewText = 'Font Tester';
  
    changeText(value) {
		if(value != "")
		{
			this.previewText = value;
		}
		else
		{
			this.previewText = "Font Tester";	
		}
  }
}
