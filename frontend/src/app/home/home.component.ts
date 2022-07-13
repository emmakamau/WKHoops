import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from 'src/app/user-authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UserAuthenticationService]
})
export class HomeComponent implements OnInit {
  constructor(private service: UserAuthenticationService) { }

  handler: any = null;
  ngOnInit() {
    this.loadStripe();
  }

  // userSubscribe(data:any): void{
  //   if(data) {
  //     let jsonData = JSON.stringify(data)
  //     console.log(jsonData)
  //     this.service.userSubscription(JSON.stringify(jsonData)).subscribe(response => {
  //       console.log(response)
  //       this.service.showSuccessBar('Subscription Successful', '')
  //     })
  //     this.service.showFailureBar('Unsuccessful, Please try again', 'OK')
  //   }
  // }

  payFreeTrial(amount: any) {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51HxRkiCumzEESdU2Z1FzfCVAJyiVHyHifo0GeCMAyzHPFme6v6ahYeYbQPpD9BvXbAacO2yFQ8ETlKjo4pkHSHSh00qKzqUVK9',
      locale: 'auto',
      token: function (token: any) {
        userSubscribe(token)
      }
    });
    
    // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        // let useremail = token.email
        // let SubscriptionToken = token.id
        // let SubscriptionName = "7 Day Trial"
        // this.data = { "user_email": useremail, "sub_plan_name": SubscriptionName, "sub_payment_token": SubscriptionToken }
        // //console.log(JSON.stringify(data))
        // let jsonData = JSON.stringify(this.data)
        // return jsonData

    const userSubscribe = (token : any) => {
      let useremail = token.email
      let SubscriptionToken = token.id
      let SubscriptionName = "7 Day Trial"
      let data = { "user_email": useremail, "sub_plan_name": SubscriptionName, "sub_payment_token": SubscriptionToken }
      //let jsonData = JSON.stringify(data)
      //console.log(jsonData)
      this.service.userSubscription(data).subscribe(response => {
        console.log(response)
        this.service.showSuccessBar('Subscription Successful', '')
      }),
      this.service.showFailureBar('Unsuccessful, Please try again', 'OK')
    }

    handler.open({
      name: 'KWHoops',
      description: 'Free Subscription',
      amount: amount * 100
    });
  }

  payMonthlyTrial(amount: any) {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51HxRkiCumzEESdU2Z1FzfCVAJyiVHyHifo0GeCMAyzHPFme6v6ahYeYbQPpD9BvXbAacO2yFQ8ETlKjo4pkHSHSh00qKzqUVK9',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.

        alert('Token Created!!');
      }
    });

    handler.open({
      name: 'KWHoops',
      description: 'Monthly Subscription',
      amount: amount * 100
    });

  }

  payAnnualTrial(amount: any) {

    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51HxRkiCumzEESdU2Z1FzfCVAJyiVHyHifo0GeCMAyzHPFme6v6ahYeYbQPpD9BvXbAacO2yFQ8ETlKjo4pkHSHSh00qKzqUVK9',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        console.log()
        alert('Token Created!!');
      }
    });

    handler.open({
      name: 'KWHoops',
      description: 'Annual Subscription',
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
          key: 'pk_test_51LKm1CGv6dMJUVkRO8K7ONZZnyale2qB5CyxTKCUHo2lvUMqzmbDOvg2ZhYiM8cOtCVryLkGSWozyDR19iNrLHs700EVEotck4',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!');
          }
        });
      }

      window.document.body.appendChild(s);
    }
  }
}

