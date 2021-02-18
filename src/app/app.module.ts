import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormAssemblerModule } from './form-assembler/form-assembler.module';
import { ControlsModule } from './controls/controls.module';
import { FormBuilderViewModule } from './form-builder-view/form-builder-view.module';
import { FormRendererModule } from './form-renderer/form-renderer.module';
import { PreviewModule } from './preview/preview.module';
import { FormAssemblerComponent } from './form-assembler/form-assembler.component';
import { ControlsComponent } from './controls/controls.component';

@NgModule({
  declarations: [
    AppComponent,
    FormAssemblerComponent,
    ControlsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  exports: [
    FormAssemblerModule,
    ControlsModule,
    FormBuilderViewModule,
    FormRendererModule,
    PreviewModule
  ],
  providers: [],
  bootstrap: [FormAssemblerComponent]
})
export class AppModule { }
