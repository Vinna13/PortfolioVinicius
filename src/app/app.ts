import { Component } from '@angular/core';
import { url } from 'inspector';

interface Project {
  name: string;
  description: string;
  stack: string[];
  github: string;
  demo?: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly name = 'Vinícius Lima';
  readonly role = 'Desenvolvedor de software em formação';
  readonly intro =
    'Me chamo Vinícius Lima, tenho 20 anos, sou de Sorocaba e estou no 4º semestre de Análise e Desenvolvimento de Sistemas na Unifacens. Também tenho formação em Administração pela FIEC. Tenho conhecimentos em Java, back-end, front-end, HTML, CSS e MySQL, e venho construindo projetos para evoluir cada vez mais';

  readonly email = 'vi_lima.06@outlook.com';
  readonly whatsappDisplay = '(15) 98115-4591';
  private readonly whatsappNumber = '5515981154591';
  get whatsappUrl(): string {
    const msg = 'Olá, Vinícius! Vi seu portfólio e gostaria de conversar.';
    return 'https://wa.me/' + this.whatsappNumber + '?text=' + encodeURIComponent(msg);
  }

  readonly links = [
    { label: 'GitHub', url: 'https://github.com/Vinna13' },
    {label: 'linkedin', url : 'https://www.linkedin.com/in/vinicius-lima-331a43423?utm_source=share_via&utm_content=profile&utm_medium=member_ios'}
  ];

  readonly projects: Project[] = [
    {
      name: 'LocHyster',
      description:
        'Sistema desenvolvido para ajudar a localizar e liberar maquinas na empresa onde trabalho',
        stack: ['Java', 'Spring Boot','API rest','JavaScript'],
        github: 'https://github.com/Vinna13/ProjetoHyster',
    },
    {
      name: 'SystemERP',
      description: 'Sistema de controle Financeiro para Micro Empresas,com dashboard e entrada e saida de mercadoria.',
      stack:['Java','JavaScript','HTML','CSS'],
      github: 'https://github.com/Vinna13/SystemERP',
    },
  ];

  readonly skills = [
    { group: 'Backend', items: ['Java', 'Spring Boot', 'APIs REST','JavaScript'] },
    { group: 'Dados', items: ['SQL', 'Modelagem', 'BI'] },
    { group: 'Front-end e design', items: ['Angular', 'TypeScript', 'UX','UI'] },
  ];
}