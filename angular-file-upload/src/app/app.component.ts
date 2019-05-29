import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  uploadedFiles: Array<File>;
  label = 'Choose file';

  constructor(private http: HttpClient) {

  }

  ngOnInit() {

  }

  fileChange(element) {
    this.uploadedFiles = element.target.files;
    this.label = '';
    for (const i of this.uploadedFiles) {
      this.label += i.name + ',';
    }
  }

  upload() {
    const formData = new FormData();
    for (const i of this.uploadedFiles) {
      formData.append('uploads[]', i, i.name);
    }
    formData.forEach((a) => {
      console.log(a);
    });
    this.http.post(environment.backendURL + 'api/upload', formData)
      .subscribe((response) => {
        console.log('response received is ', response);
        console.log(formData);
      });
  }

}