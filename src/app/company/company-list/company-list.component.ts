import { Component, OnInit } from '@angular/core';
import { Company } from '../company';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  constructor() { }

  companies: Company[] = [
    {
      name: 'SSW',
      phone: 4930390,
      email: 'info@ssw.com.au'
    },
    {
      name: 'test',
      phone: 390786756,
      email: 'info@stest.com'
    },
    {
      name: 'Comany 2',
      phone: 46785677,
      email: 'info@company2.com.au'
    }
  ];
  ngOnInit() {
  }

}
