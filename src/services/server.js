import { createServer, Factory, Model, hasMany, belongsTo } from 'miragejs';

export function makeServer({ environment = 'test' }) {
    createServer({
      environment, 
      models: {
          course: Model.extend({
            modules: hasMany(),
          }),
          module: Model.extend({
            classes: hasMany(),
            course: belongsTo(),
          }),
          class: Model.extend({
            module: belongsTo(),
          }),
      },
      factories: {
        course: Factory.extend({
            name(i) {
                return `Curso de ${(i % 2 === 0) ? "Svelte": "React"} ` + (i + 1)
            },
            description(i) {
                return `Um curso para introdução ao ${(i % 2 === 0) ? "Svelte": "React"} ${(i + 1)} com...`
            },
            startDate: new Date().toISOString(),
            endDate: new Date().toISOString(),
        }),
        module: Factory.extend({
            image: "/images/module-card.png"
        }),
        class: Factory.extend({
            name(i) {
                return `Aula ${i}`
            },
            description(i) {
                return `Descrição sobre o curso ${i}`
            }
        })
      },
      seeds(server) {
        server.create("course", { id: 1, duration: 10, image: "images/course1.png", enabled: true });
        server.create("course", { id: 2, duration: 10, image: "images/course1.png", enabled: true });
        server.create("course", { id: 3, duration: 10, image: "images/course2.png", enabled: false });

        // const classes = [
        //     {
        //         id: 1,
        //         name: "1. Primeira aula",
        //         description: "Curso de Svelte"
        //     },
        //     {
        //         id: 2,
        //         name: "2. Segunda aula",
        //         description: "Curso de Svelte"
        //     },
        //     {
        //         id: 3,
        //         name: "3. Terceira aula",
        //         description: "Curso de Svelte"
        //     },
        //     {
        //         id: 4,
        //         name: "4. Quarta aula",
        //         description: "Curso de Svelte"
        //     }
        // ]

        // const classes = server.createList("class", 5);

        server.create("module", { id: 1, name: "1. Introdução", description: "Introdução ao Svelte", status: true  })
        server.create("module", { id: 2, name: "2. Programação Funcional", description: "Introdução ao Svelte", status: true })
        server.create("module", { id: 3, name: "3. Rx.JS", description: "Introdução ao Svelte", status: false })
        server.create("module", { id: 4, name: "4. Finalização", description: "Introdução ao Svelte", status: true })

      },
      routes() {
        this.namespace = "api";

        this.schema.create("course");
        this.schema.create("module");
  
        this.get("/treinamentos", (schema) => {
            return schema.courses.all();
        });

        let newCourseId = 4;
        this.post("/treinamentos", (schema, request) => {
            const course = JSON.parse(request.requestBody);
            course.id = newCourseId++;
            course.image = "images/course1.png";
            schema.courses.create(course);
            return schema.courses.all();
        });

        this.put("/treinamentos/:id", (schema, request) => {
            const id = request.params.id;
            const course = JSON.parse(request.requestBody);
            schema.courses.find(id).update(course);
            return schema.courses.all();
        });

        this.delete("/treinamentos/:id", (schema, request) => {
            const id = request.params.id;
            const course = schema.find('course', +id);
            course?.destroy();
            return schema.all('course');
        });

        this.get("/modulos", (schema) => {
            return schema.modules.all();
        });
        
        let newModuleId = 5;
        this.post("/modulos", (schema, request) => {
            const module = JSON.parse(request.requestBody);
            module.id = newModuleId++;
            module.image = "images/module-card.png";
            module.status = true;
            schema.modules.create(module);
            return schema.modules.all();
        });

        this.put("/modulos/:id", (schema, request) => {
            const id = request.params.id;
            const module = JSON.parse(request.requestBody);
            schema.modules.find(id).update(module);
            return schema.modules.all();
        });

        this.delete("/modulos/:id", (schema, request) => {
            const id = request.params.id;
            const module = schema.find('module', id);
            module?.destroy();
            return schema.modules.all();
        });
      },
    })
  }