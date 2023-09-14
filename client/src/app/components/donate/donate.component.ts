import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {

  handler: any = null;
  builder = inject(FormBuilder);
  router = inject(Router);
  donateForm: FormGroup;

  ngOnInit(): void {
    this.loadStripe();
    this.donateForm = this.initializeForm();
  }

  initializeForm(): FormGroup {
    return this.builder.group({
      name: this.builder.control<string>('', [Validators.required, Validators.minLength(4)]),
      amount: this.builder.control<number>(1, [Validators.required])
    })
  }

  pay(amount: number) {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51Nq6rOKEeeyHE7LAQQBSkPlNZ9aLhAwN6kQngjGDDALpxnF1IyYHhpQ8dSwmk6oTrNcULTaxHaNd6jjrNdGg1q8w004RoCtV4u',
      locale: 'en',
      token: (token: any) => {
        this.router.navigate(['/donate/thanks']);
      }
    });

    handler.open({
      name: 'Commcat',
      description: 'Thank you for your donation!',
      amount: amount * 100
    });
  }

  loadStripe() {
    if (!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51Nq6rOKEeeyHE7LAQQBSkPlNZ9aLhAwN6kQngjGDDALpxnF1IyYHhpQ8dSwmk6oTrNcULTaxHaNd6jjrNdGg1q8w004RoCtV4u',
          locale: 'en',
          token: (token: any) => {
            this.router.navigate(['/donate/thanks']);
          }
        });
      }

      window.document.body.appendChild(s);
    }
  }

}