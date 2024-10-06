import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'data-binding';
  firstName = "Siddharth Singh"
  imageThumbsUp = "assets/images/thumbs-up.png";
  imageScene = "../assets/images/scene.jpg";
  passValueToComponent(e:any){
    console.log("Value  ", e.target.value);
  }
}
