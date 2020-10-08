import { Component } from '@angular/core';
import { ApiService } from 'src/services/ApiService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CSRF Demo';
  returnedMessage: string;
  returnedPostMessage: string;
  isAuthenticated: boolean;

  constructor(private apiService: ApiService) {}

  async ngOnInit() {
    //this.isAuthenticated = await 
    let data = await this.apiService.sendGetRequest().toPromise();
    if (data != null) {
      this.returnedMessage = data.body;
      console.log(data.body)
      this.isAuthenticated = true;
    }

    this.apiService.sendPostRequest().subscribe((data: any)=> {
      console.log("Post Data=", data);
      this.returnedPostMessage = data;
    });
    if (this.isAuthenticated) {
        console.log("Authenticated = ", this.isAuthenticated);
    }
    
  }
/*
  async getHello() {
    this.apiService.sendGetRequest().subscribe((data: any)=>{
      this.returnedMessage = data.body;
      //console.log(data.body)
      this.isAuthenticated = true;
    });
    return true;
  } */
}
