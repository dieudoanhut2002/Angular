import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import {HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http'
import { Observable } from 'rxjs';
import {FormsModule } from '@angular/forms'
import { LoginModel } from '../../login/login-model';
import { response } from 'express';
import { of } from 'rxjs'; // Import `of` từ RxJS để trả về Observable trong trường hợp có lỗi
import { catchError } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'Application/json'
  })
}

const loginUrl = 'https://localhost:44351/api/v1/Manager/Token/Create';
let loginToken = '';
@Component({
  selector: 'app-login',
  imports: [RouterLink,FormsModule, HttpClientModule],
  template: `
  <div class="login-container">
  <h2>Login</h2>
  <h5>
    <a routerLink="/services">Services</a>
  </h5>
  <form (ngSubmit)="onLogin()">
    <div>
      <label for="username">Username</label>
      <input
        type="text"
        id="username"
        [(ngModel)]="username" 
        name="username"
        required
      />
    </div>
    <div>
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
         [(ngModel)]="password"
        name="password"
        required
      />
    </div>
    <button type="submit">Login</button>
  </form>
</div>

  `,
  styles: `.login-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.login-container h2 {
  text-align: center;
  margin-bottom: 20px;
}

.login-container form div {
  margin-bottom: 15px;
}

.login-container label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.login-container input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.login-container button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.login-container button:hover {
  background-color: #0056b3;
}
`
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  token: string = '';

  constructor(private httpClient: HttpClient) {}

  // Phương thức gọi API
  getAll(username: string, password: string): Observable<LoginModel> {
    const body = { username, password }; // Tạo object chứa thông tin body
    return this.httpClient.post<LoginModel>(loginUrl, body).pipe(
      catchError(error => {
        console.error('Error occurred:', error.error.userMessage); // Log lỗi chi tiết
        alert('Login failed! Error details: ' + error.message);
        return of({ status: 'error', userMessage: 'Login failed' } as LoginModel); // Trả về observable giả trong trường hợp lỗi
      })
    );;
  }

  // Xử lý khi người dùng đăng nhập
  onLogin() {
    console.log('Logging in with:', this.username, this.password);

    // Gọi API và xử lý phản hồi
    this.getAll(this.username, this.password).subscribe({
      next: (response) => {
        try{
          
          loginToken = JSON.stringify(response.data); // Lưu token nhận được
          console.log('Login successful, token:', loginToken);
          alert(response.userMessage);
        }
        catch(error){
          console.error('Failed to parse response:', error);
          alert('Invalid response format!' + response.userMessage);
        }
        
      },
      error: (err) => {
        console.error('Login failed:');
        alert('Login failed! Please check your credentials.');
      }
    });
  }
}

