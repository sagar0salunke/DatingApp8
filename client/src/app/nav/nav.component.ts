import { Component, inject } from '@angular/core';
import { AccountService } from '../account.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  accountService = inject(AccountService);
  model: any = {};
  private router = inject(Router)
  private toastr = inject(ToastrService);

  login() {
    this.accountService.login(this.model).subscribe({
      next: _ => {
        this.router.navigateByUrl('/members')
    },
      error: error => this.toastr.error(error.error)
  })
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}