import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  users:any[]
  constructor(private data: DataService) {}

  ngOnInit(): void {
   this.loadData();
  }



  loadData(){
    this.data.getTestData().subscribe((result:any)=>{
      this.users=result;
    });
  }


  exportToExcel() {
    this.data.exportToExcel(this.users, 'Users');
  }
 

}
