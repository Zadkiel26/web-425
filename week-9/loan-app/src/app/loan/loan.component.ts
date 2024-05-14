/**
 * Title: loan.component.ts
 * Author: Zadkiel Rodriguez Alvarado
 * Date: 5/11/2024
 * Description: Loan component
 */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss']
})
export class LoanComponent implements OnInit {

  loanForm: FormGroup;
  loanAmount: number;
  interestRate: number;
  loanTerm: number;
  monthlyPayment: number = 0;
  interestPaid: number = 0;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loanForm = this.fb.group({
      loanAmount: ['', Validators.required],
      interestRate: ['', Validators.required],
      loanTerm: ['', Validators.required]
    });
  }

  get form() {
    return this.loanForm.controls;
  }

  calculatePayment(loanAmount: number, interestRate: number, loanTerm: number) {
    // Calculate monthly payment and interest paid
    let monthlyInterestRate = (interestRate / 100) / 12;
    let numberOfPayments = loanTerm * 12;
    let monthlyPayment = (loanAmount * (Math.pow(1 + monthlyInterestRate, numberOfPayments)) * monthlyInterestRate) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    // Display monthly payment and interest paid
    this.monthlyPayment = parseFloat(monthlyPayment.toFixed(2));

    let totalInterestPaid = this.monthlyPayment * numberOfPayments;
    this.interestPaid = parseFloat((totalInterestPaid - loanAmount).toFixed(2));
  }

}
