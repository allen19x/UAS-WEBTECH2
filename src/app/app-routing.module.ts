import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { DigimonComponent } from "./digimon/digimon.component";
import { DigimonDetailComponent } from "./digimon/digimon-detail.component";
import { LoginComponent } from "./login/login.component";
import { ShellComponent } from "./shell/shell.component";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    // shell component akan membungkus semua halaman yang menggunakan sidedrawer
    {
        path: "",
        component: ShellComponent,
        children: [
            { path: "digimon", component: DigimonComponent },
            { path: "digimon/:name", component: DigimonDetailComponent },
            { path: "about", component: AboutComponent },
        ],
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}