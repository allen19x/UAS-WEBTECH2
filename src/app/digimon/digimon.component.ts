import { Component, OnInit } from "@angular/core";

import { DigimonService } from "./digimon.service";
import { BehaviorSubject } from "rxjs";
import { DigimonList } from "./digimon"

@Component({
    selector: "ns-items",
    templateUrl: "./digimon.component.html",
})
export class DigimonComponent implements OnInit {
    // $digimons: BehaviorSubject<Array<any>>;
  
    // level = "In Training"

    constructor(private ds: DigimonService) {
        // this.$digimons = new BehaviorSubject([]);
    }

      listDigimon: DigimonList[]
      

    ngOnInit(): void {
        this.ds.getDigimons().subscribe(
                (data : any) => {
                    this.listDigimon = data;
                    // console.log(this.listDigimon);
                });
    }

    loadMore() {
        // console.log("called");
        // if (this.level = 'In Training') return;
        // this.level = "Rookie";
        // this.ps.getDigimons(this.level).subscribe((response: any) => {
        //     if (response.results) {
        //         this.digimons.push(...response.results);
        //         this.$digimons.next(this.digimons);
        //     }
        // });
    }
}
