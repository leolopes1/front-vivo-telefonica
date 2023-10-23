import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { QuemSomosAdminComponent } from './admin-pages/quem-somos-admin/quem-somos-admin.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { FiquePorDentroComponent } from './fique-por-dentro/fique-por-dentro.component';
import { ControleUsuarioComponent } from './admin-pages/controle-usuario/controle-usuario.component';
import { GerenciadorUsuarioComponent } from './admin-pages/gerenciador-usuario/gerenciador-usuario.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { ProjetosDetalheComponent } from './projetos-detalhe/projetos-detalhe.component';



const routes: Routes = [
  { path: '', component: QuemSomosComponent, canActivate: [AuthGuard] }, 
  { path: 'quem-somos', component: QuemSomosComponent, canActivate: [AuthGuard] }, 
  { path: 'homepage', component: FiquePorDentroComponent,canActivate: [AuthGuard] },
  { path: 'user-admin', component: UserAdminComponent,canActivate: [AuthGuard]},
  { path: 'update-quem-somos', component: QuemSomosAdminComponent,canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent},
  { path: 'gerenciador-usuarios', component:GerenciadorUsuarioComponent, canActivate: [AuthGuard]},
  { path: 'projetos', component:ProjetosComponent, },
  { path: 'projetos/:id', component: ProjetosDetalheComponent, }

  

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }