import { createServer } from 'miragejs';

export function makeServer({ environment = 'test' }) {
    return createServer({
      environment, 
      routes() {
        this.namespace = "api"
  
        this.get('treinamentos', () => {
            return [
                {
                    id: 1,
                    name: "Curso de Svelte",
                    description: "Um curso para introdução ao Svelte com...",
                    duration: 10,
                    image: "images/course1.png",
                    startDate: '2022-01-19T02:24:11.657Z',
                    endDate: '2022-01-19T02:24:11.657Z',
                    enabled: true
                },
                {
                    id: 2,
                    name: "Curso de Svelte 2",
                    description: "Um curso para introdução ao Svelte com...",
                    duration: 10,
                    image: "images/course1.png",
                    startDate: '2022-01-19T02:24:11.657Z',
                    endDate: '2022-01-19T02:24:11.657Z',
                    enabled: true
                },                
                {
                    id: 3,
                    name: "Curso de React",
                    description: "Como criar aplicativos usando React...",
                    duration: 20,
                    image: "images/course2.png",
                    startDate: '2022-01-19T02:24:11.657Z',
                    endDate: '2022-01-19T02:24:11.657Z',
                    enabled: false
                },
                {
                    id: 4,
                    name: "Curso de React 2",
                    description: "Como criar aplicativos usando React...",
                    duration: 30,
                    image: "images/course2.png",
                    startDate: '2022-01-19T02:24:11.657Z',
                    endDate: '2022-01-19T02:24:11.657Z',
                    enabled: true
                }
            ];
        });

        this.get('modules', () => {
            return [
                {
                    id: 1,
                    name: "1. Introdução",
                    image: "/images/module-card.png",
                    description: "Introdução ao Svelte",
                    status: true,
                    classes: [
                        {
                            id: 1,
                            name: "1. Primeira aula",
                            description: "Curso de Svelte"
                        },
                        {
                            id: 2,
                            name: "2. Segunda aula",
                            description: "Curso de Svelte"
                        },
                        {
                            id: 3,
                            name: "3. Terceira aula",
                            description: "Curso de Svelte"
                        },
                        {
                            id: 4,
                            name: "4. Quarta aula",
                            description: "Curso de Svelte"
                        }
                    ]
                },
                {
                    id: 2,
                    name: "1. Programação Funcional",
                    image: "/images/module-card.png",
                    description: "Biblioteca Ramda e conceito",
                    status: true,
                    classes: [
                        {
                            id: 1,
                            name: "1. Primeira aula",
                            description: "Curso de Svelte"
                        },
                        {
                            id: 2,
                            name: "2. Segunda aula",
                            description: "Curso de Svelte"
                        },
                        {
                            id: 3,
                            name: "3. Terceira aula",
                            description: "Curso de Svelte"
                        },
                        {
                            id: 4,
                            name: "4. Quarta aula",
                            description: "Curso de Svelte"
                        }
                    ]
                },
                {
                    id: 3,
                    name: "1. Rx.JS",
                    image: "/images/module-card.png",
                    description: "Aprendendo sobre Rx.JS",
                    status: false,
                    classes: [
                        {
                            id: 1,
                            name: "1. Primeira aula",
                            description: "Curso de Svelte"
                        },
                        {
                            id: 2,
                            name: "2. Segunda aula",
                            description: "Curso de Svelte"
                        }
                    ]
                },
                {
                    id: 4,
                    name: "1. Finalização",
                    image: "/images/module-card.png",
                    description: "Finalizando o WebApp",
                    status: true,
                    classes: [
                        {
                            id: 1,
                            name: "1. Primeira aula",
                            description: "Curso de Svelte"
                        },
                        {
                            id: 2,
                            name: "2. Segunda aula",
                            description: "Curso de Svelte"
                        }
                    ]
                }
            ];
        });        
      },
    })
  }