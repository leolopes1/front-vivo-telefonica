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
import { ProjetosComponent } from './admin-projetos/projetos/projetos.component';
import { ProjetosDetalheComponent } from './admin-projetos/projetos-detalhe/projetos-detalhe.component';
import { CriarProjetoComponent } from './admin-projetos/criar-projeto/criar-projeto.component';
import { CriacaoQuemSomosComponent } from './quem-somos-adm/criacao-quem-somos/criacao-quem-somos.component';
import { ProjetosDuvidaComponent } from './admin-projetos/projetos-duvida/projetos-duvida.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { MissaoComponent } from './quem-somos/missao/missao.component';
import { EquipeComponent } from './quem-somos/equipe/equipe.component';
import { ResponsabilidadesComponent } from './quem-somos/responsabilidades/responsabilidades.component';
import { ProcessosComponent } from './processos/processos.component';
import { BibliotecaComponent } from './processos/biblioteca/biblioteca.component';
import { HistoricoReleaseComponent } from './fique-por-dentro/historico-release/historico-release.component';
import { AvisosComponent } from './fique-por-dentro/avisos/avisos.component';



const routes: Routes = [
  { path: '', component: LoginComponent},

  { path: 'quem-somos', component: QuemSomosComponent,canActivate: [AuthGuard] }, 
  { path: 'quem-somos/missao', component: MissaoComponent, canActivate: [AuthGuard] }, 
  { path: 'quem-somos/equipe', component: EquipeComponent, canActivate: [AuthGuard] }, 
  { path: 'quem-somos/responsabilidades', component: ResponsabilidadesComponent, canActivate: [AuthGuard] }, 
  { path: 'homepage', component: FiquePorDentroComponent, canActivate: [AuthGuard]},
  { path: 'user-admin', component: UserAdminComponent,canActivate: [AuthGuard]},
  { path: 'update-quem-somos', component: QuemSomosAdminComponent, canActivate: [AuthGuard]},
  { path: 'gerenciador-usuarios', component:GerenciadorUsuarioComponent, canActivate: [AuthGuard]},
  { path: 'projetos', component:ProjetosComponent, canActivate: [AuthGuard] },
  { path: 'projetos/:id', component: ProjetosDetalheComponent, canActivate: [AuthGuard] },
  { path: 'criar-projeto', component: CriarProjetoComponent, canActivate: [AuthGuard] },
  { path: 'criar-biografia', component: CriacaoQuemSomosComponent, canActivate: [AuthGuard]},
  { path: 'projeto-duvida', component: ProjetosDuvidaComponent, canActivate: [AuthGuard]},
  { path: 'calendario', component: CalendarioComponent,canActivate: [AuthGuard] },
  { path: 'processos', component: ProcessosComponent,canActivate: [AuthGuard] },
  { path: 'biblioteca', component: BibliotecaComponent, canActivate: [AuthGuard] },
  { path: 'release', component: HistoricoReleaseComponent, canActivate: [AuthGuard] },
  { path: 'fique-por-dentro/avisos', component: AvisosComponent,canActivate: [AuthGuard] }
  

  

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }