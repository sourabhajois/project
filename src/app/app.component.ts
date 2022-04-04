import { Component,OnInit } from '@angular/core';
import { Employee,Certification,Project } from './model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  employees: Employee[] = [
    new Employee('100','Sourabh','SED','L1',[
      new Project('11','Employee management','12/08/2020','22/12/2020'),
      new Project('15','Speech detection','12/10/2020','22/01/2021')
    ],[
      new Certification('1','Machine learning','12/12/2020'),
      new Certification('4','C++ programing','25/12/2020')
    ]),
    new Employee('101','Samartha','SED','L1',[
      new Project('41','React navigation','11/02/2020','21/11/2020'),
      new Project('95','Speech detection','12/10/2020','22/01/2021')
    ],[
      new Certification('5','JAVA','02/09/2020'),
      new Certification('4','C++ programing','25/11/2020')
    ]),
    new Employee('120','Kavi','QA','L2',[],[]),
    new Employee('151','Dwithi','QA','L1',[],[]),
    new Employee('110','Darshan','UI','L2',[],[]),
    new Employee('115','Shuba','UI','L3',[],[])
  ];
  selectedEmployee: Employee = this.employees[0]
  constructor(){}
  ngOnInit(){
    
  }
  selectEmployee(employee: Employee){
    this.selectedEmployee=employee
  }
}
