import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { DigimonList } from "./digimon";

@Injectable({
    providedIn: "root",
})
export class DigimonService {
    baseUrl = `https://digimon-api.herokuapp.com/api`;
  
    constructor(private http: HttpClient) { }

    getDigimons(): Observable<DigimonList[]> {
        return this.http.get<DigimonList[]>(`${this.baseUrl}/digimon`);
    }

    getDigimon(name: string) {
        return this.http.get(`${this.baseUrl}/digimon/name/${name}`);
    }
}
