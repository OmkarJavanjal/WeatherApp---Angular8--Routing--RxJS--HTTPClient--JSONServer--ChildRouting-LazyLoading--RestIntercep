import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { GenericServiceService } from "./../shared/services/generic-service.service";
import { env } from "src/environments/environment-loader";

@Component({
  selector: "app-select-city",
  templateUrl: "./select-city.component.html",
  styleUrls: ["./select-city.component.scss"]
})
export class SelectCityComponent implements OnInit {
  public cityList;
  @Output() cityName = new EventEmitter<string>();
  constructor(private genericService: GenericServiceService) {}

  ngOnInit() {
    this.getCityList();
  }

  getCityList() {
    this.genericService
      .getServiceResponse(env.cityList.getcities)
      .subscribe(data => {
        console.log("city data", data);
        this.cityList = data;
      });
  }

  onCitySelect(cityName) {
    console.log(cityName);
    this.cityName.emit(cityName);
  }
}
