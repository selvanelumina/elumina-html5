import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAssemblerModule } from './form-assembler/form-assembler.module';

const routes: Routes = [
  {path: 'formbuilder', component: FormAssemblerModule },
  {path: '**', component: FormAssemblerModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }