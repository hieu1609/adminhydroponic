import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EntitiesRoutingModule } from "./entities-routing.module";
import { EntitiesComponent } from "./entities.component";
import { AdminModule } from "./admin/admin.module";

@NgModule({
  declarations: [EntitiesComponent],
  exports: [EntitiesComponent],
  imports: [CommonModule, EntitiesRoutingModule, AdminModule]
})
export class EntitiesModule {}
