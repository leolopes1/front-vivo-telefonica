import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes }   from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { AppRoutingModule } from './app-routing.module';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { MatDividerModule } from '@angular/material/divider';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { QuemSomosAdminComponent } from './admin-pages/quem-somos-admin/quem-somos-admin.component';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DataService } from './data.service';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { ControleUsuarioComponent } from './admin-pages/controle-usuario/controle-usuario.component';
import { FiquePorDentroComponent } from './fique-por-dentro/fique-por-dentro.component';
import { GerenciadorUsuarioComponent } from './admin-pages/gerenciador-usuario/gerenciador-usuario.component';
import { CriacaoUsuarioComponent } from './admin-pages/criacao-usuario/criacao-usuario.component';
import { MaterialModule } from './material/material.module';
import { ProjetosComponent } from './admin-projetos/projetos/projetos.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjetosDetalheComponent } from './admin-projetos/projetos-detalhe/projetos-detalhe.component';
import { CriarProjetoComponent } from './admin-projetos/criar-projeto/criar-projeto.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CriacaoQuemSomosComponent } from './quem-somos-adm/criacao-quem-somos/criacao-quem-somos.component';
import { ProjetosDuvidaComponent } from './admin-projetos/projetos-duvida/projetos-duvida.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { MissaoComponent } from './quem-somos/missao/missao.component';
import { EquipeComponent } from './quem-somos/equipe/equipe.component';
import { ResponsabilidadesComponent } from './quem-somos/responsabilidades/responsabilidades.component';
import { NossoProcessoComponent } from './quem-somos/responsabilidades/nosso-processo/nosso-processo.component';
import { AnaliseReceitasComponent } from './quem-somos/responsabilidades/analise-receitas/analise-receitas.component';
import { ProjetosResponsabilidadesComponent } from './quem-somos/responsabilidades/projetos-responsabilidades/projetos-responsabilidades.component';
import { ProcessosComponent } from './processos/processos.component';
import { BibliotecaComponent } from './processos/biblioteca/biblioteca.component';
import { ChatComponent } from './chat/chat.component';
import { HistoricoReleaseComponent } from './fique-por-dentro/historico-release/historico-release.component';
import { CalendarioReceitasComponent } from './calendario/calendario-receitas/calendario-receitas.component';
import { CalendarioProjetosComponent } from './calendario/calendario-projetos/calendario-projetos.component';
import { AvisosComponent } from './fique-por-dentro/avisos/avisos.component';


@NgModule({
  declarations: [ 
    AppComponent,
    MainScreenComponent,
    QuemSomosAdminComponent,
    UserAdminComponent,
    LoginComponent,
    QuemSomosComponent,
    ControleUsuarioComponent,
    FiquePorDentroComponent,
    GerenciadorUsuarioComponent,
    CriacaoUsuarioComponent,
    ProjetosComponent,
    ProjetosDetalheComponent,
    CriarProjetoComponent,
    CriacaoQuemSomosComponent,
    ProjetosDuvidaComponent,
    CalendarioComponent,
    MissaoComponent,
    EquipeComponent,
    ResponsabilidadesComponent,
    NossoProcessoComponent,
    AnaliseReceitasComponent,
    ProjetosResponsabilidadesComponent,
    ProcessosComponent,
    BibliotecaComponent,
    ChatComponent,
    HistoricoReleaseComponent,
    CalendarioReceitasComponent,
    CalendarioProjetosComponent,
    AvisosComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatNativeDateModule,
    MatDatepickerModule,
    CarouselModule,
    MatIconModule,
    MatFormFieldModule, // Add MatFormFieldModule to the imports array
    MatSelectModule, // Add MatSelectModule to the imports array
    MatListModule,
    MatButtonToggleModule,
    MatTableModule,
    MatInputModule,
    RouterModule,
    MatRadioModule,
    MatDividerModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatTabsModule,
    MatTooltipModule,
    MatCardModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    CarouselModule,
    MatSortModule,
    RouterModule.forRoot([])
  ],
  providers: [DataService, AuthService,AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } 