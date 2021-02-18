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

@NgModule({
  declarations: [
    AppComponent,
    FormAssemblerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormAssemblerModule,
    ControlsModule,
    FormBuilderViewModule,
    FormRendererModule,
    PreviewModule
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
