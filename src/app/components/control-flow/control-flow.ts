import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule, CommonModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {

  isOffer: boolean = false;

  companyName: string = '';

  companyList: string[] = ['TATA', 'Wipro', 'Infosys', 'HCL', 'Cognizant'];

  tableHeaders: string[] = ['ID', 'Name', 'Age', 'Company', 'Status'];
   employeeList: any[] = [
    { id:'123', name:'Amar', age:25, company:'LTI', status:true},
    { id:'124', name:'Akbar', age:26, company:'TCS', status:false},
    { id:'125', name:'Anthony', age:27, company:'Wipro', status:true},
    { id:'126', name:'Rahul', age:28, company:'Infosys', status:true},
    { id:'127', name:'Sonu', age:29, company:'HCL', status:false},
    { id:'128', name:'Monu', age:30, company:'Cognizant', status:true},
   ];

  setOffer(flag: boolean): void {
    this.isOffer = flag;
  }

  


}
