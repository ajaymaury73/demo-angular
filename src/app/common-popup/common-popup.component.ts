import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-popup',
  templateUrl: './common-popup.component.html',
  styleUrls: ['./common-popup.component.css']
})
export class CommonPopupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  // openSignupPage(customer: Customer) {
  //   let dialogRef = this.dialog.open(CommonPopupComponent, {
  //     height: 'auto',
  //     width: '600px',
  //     position: { top: '10%', left: '37%' },
  //     disableClose: true,
  //     data: {
  //       popupType: 'customer',
  //       customer: customer ? customer : new Customer(),
  //     }
  //   });

  //   dialogRef.afterClosed().subscribe((result: Customer) => {
  //     if (result) {


  //       this.service.saveUserDetais(result).subscribe(
  //         (response) => {

  //           console.log("Product saved successfully!", response);
  //         },
  //         (error) => {
  //           console.error("Error saving product:", error);
  //         }
  //       );
  //     } else {
  //       console.log("Dialog closed without saving.");
  //     }
  //   });
  // }

  openSignUpPopup(){
    
  }
  

}
