import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage),
  },
  {
    path: 'medicamentos',
    loadComponent: () => import('./medicamentos/medicamentos.page').then(m => m.MedicamentosPage)
  },
  {
    path: 'alimentos',
    loadComponent: () => import('./alimentos/alimentos.page').then(m => m.AlimentosPage)
  },
  {
    path: 'citas',
    loadComponent: () => import('./citas/citas.page').then(m => m.CitasPage)
  },
  {
    path: 'novedades',
    loadComponent: () => import('./novedades/novedades.page').then(m => m.NovedadesPage)
  },
  {
    path: 'historial',
    loadComponent: () => import('./historial/historial.page').then(m => m.HistorialPage)
  },
  {
    path: 'registro-medicamentos',
    loadComponent: () => import('./registro-medicamentos/registro-medicamentos.page').then(m => m.RegistroMedicamentosPage)
  },
  {
    path: 'consulta-medicamentos',
    loadComponent: () => import('./consulta-medicamentos/consulta-medicamentos.page').then(m => m.ConsultaMedicamentosPage)
  },
  {
    path: 'compra-alimentos',
    loadComponent: () => import('./compra-alimentos/compra-alimentos.page').then( m => m.CompraAlimentosPage)
  },
  {
    path: 'consulta-alimentos-disponibles',
    loadComponent: () => import('./consulta-alimentos-disponibles/consulta-alimentos-disponibles.page').then( m => m.ConsultaAlimentosDisponiblesPage)
  },
  {
    path: 'consultar-cita',
    loadComponent: () => import('./consultar-cita/consultar-cita.page').then( m => m.ConsultarCitaPage)
  },
  {
    path: 'registrar-cita',
    loadComponent: () => import('./registrar-cita/registrar-cita.page').then( m => m.RegistrarCitaPage)
  },
  {
    path: 'nueva-novedad',
    loadComponent: () => import('./nueva-novedad/nueva-novedad.page').then( m => m.NuevaNovedadPage)
  },
  {
    path: 'consultar-novedades',
    loadComponent: () => import('./consultar-novedades/consultar-novedades.page').then( m => m.ConsultarNovedadesPage)
  },
  {
    path: 'registro-usuario',
    loadComponent: () => import('./registro-usuario/registro-usuario.page').then( m => m.RegistroUsuarioPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
];
