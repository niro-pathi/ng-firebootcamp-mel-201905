import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../company.service';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  // private comoanyService: CompanyService;

  constructor(private companySvc: CompanyService) {
    // this.comoanyService = companySvc;
  }

  companies: Company[];
  ngOnInit() {
     this.companySvc.getCompanies()
      .subscribe(c => this.companies = c);
  }
}
