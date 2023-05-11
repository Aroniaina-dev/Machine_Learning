import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // username: string = 'admin@gmail.com';
  // password: string = 'password';

  username: string = '';
  password: string = '';
  wornguser: boolean = false;
  worngFormat: boolean = false;
  loader: boolean = false;
  data: any;
  formGroup !: FormGroup;
  user: User = new User();

  constructor(private authentificationService: AuthServiceService, private router: Router, private readonly fb: FormBuilder, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      username: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.formGroup.valid) {
      this.authentificationService.login(this.username, this.password).subscribe(response => {
        this.loader = true;
        this.data = response;
        if (response.isSuccess) {
          this.user.nom = "Aroniaina";
          this.user.prenom = "Manda";
          this.authentificationService.storeUserData(response.token,this.user);
          this.loader = false;
          this.router.navigate(['/web_service']);
        } else {
          this.wornguser = true;
        }
      });
    }
    else{
      this.toastr.error("Veuillez remplir les champs!!!");
    }
  }
}
