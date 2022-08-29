import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
const ModulesOfMaterial=
[
 MatButtonModule,
 MatIconModule,

];



@NgModule({
  declarations: [],
  imports: [ModulesOfMaterial ],
  exports:[ModulesOfMaterial]
})
export class MaterialModule { }
