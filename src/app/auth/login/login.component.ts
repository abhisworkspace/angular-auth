import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/_services/auth.service';

interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService],
})
export class LoginComponent implements OnInit {
  cities: City[] | undefined;

  selectedCity: City | undefined;

  loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSignIn() {
    if (!this.loginForm.valid) {
      return;
    }
    const apiParamData = this.loginForm.value;

    this.authService.signIn(apiParamData).subscribe(
      (response: any) => {
        if (response) {
          localStorage.setItem('token', response.token);
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'You are logged in successfully.',
          });
          this.router.navigate(['/dashboard']);
        }
      },
      (error: any) => {
        this.messageService.add({
          severity: 'error',
          summary: error.error.error,
          detail: 'Please check your login Credentials.',
        });
      }
    );
  }
}
