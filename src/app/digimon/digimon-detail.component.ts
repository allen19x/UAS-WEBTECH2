import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { DigimonService } from "./digimon.service";

@Component({
    selector: "ns-details",
    templateUrl: "./digimon-detail.component.html",
})
export class DigimonDetailComponent implements OnInit {
    digimon={
        nama:"",
        img:"",
        level:"",
    };
    name;

    constructor(private ds: DigimonService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.name = this.route.snapshot.params.name;
        this.ds.getDigimon(this.name).subscribe((response: any) => {
            this.digimon = {
                nama:response[0].name,
                img:response[0].img,
                level:response[0].level
            };
            console.log(this.digimon)
        });
    }
}
