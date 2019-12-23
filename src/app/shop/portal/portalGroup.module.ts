import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BootstrapModuleGroup } from 'src/app/bootstrapGroup/bootstrap-modules.module';
import { PortalComponent } from './portal.component';
import { PanelLeftComponent } from './panel-left/panel-left.component';
import { PanelMiddleComponent } from './panel-middle/panel-middle.component';
import { PanelRightComponent } from './panel-right/panel-right.component';
import { PortalRoutingModule } from './portal-routing.module';




@NgModule({
  declarations: [
    PortalComponent,
    PanelLeftComponent,
    PanelMiddleComponent,
    PanelRightComponent,
  ],
  imports: [
    CommonModule,
    BootstrapModuleGroup,
    FormsModule,
    PortalRoutingModule
  ]
})

export class PortalGroupModule { }
