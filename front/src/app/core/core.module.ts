import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { HeaderComponent } from "./components/header/header.component";
import { MatSidenavModule } from '@angular/material/sidenav'
import { RouterLink, RouterLinkActive } from "@angular/router";
import { provideHttpClient } from "@angular/common/http";

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        RouterLink,
        RouterLinkActive
    ],
    exports: [
        HeaderComponent
    ]
})
export class CoreModule { }