import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog-customer-list',
  templateUrl: './catalog-customer-list.component.html',
  styleUrls: ['./catalog-customer-list.component.scss'],
})
export class CatalogCustomerListComponent implements OnInit {

  customerList: any;

  constructor() { }

  ngOnInit() {
    this.customerList = [
      {
      }
    ];
  }

}
