import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PersonProvider } from '../../providers/person/person';
import { PerformanceDataProvider } from '../../providers/performance-data/performance-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  user: any = {};

  constructor(
    public navCtrl: NavController,
    public person: PersonProvider,
    public performanceData: PerformanceDataProvider
    ) {
    this.user = { age: 20, gender: 'female', distance: 1000 };
    }
    
    calculate() {
      this.person.age = this.user.age;
      this.person.gender = this.user.gender;
      this.person.doAssessment(this.user.distance);
      // this.performanceData
      //   .saveData({ performance_data: { data: { message: this.person.assessmentMessage } } })
      //   .subscribe(data => console.log(data));
    }

    saveDataTwo() {
      this.performanceData
        .saveData({ performance_data: { data: { message: this.person.assessmentMessage } } })
        .subscribe(data => console.log(data));
    }
};