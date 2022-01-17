import { createServer, Factory, Model, hasMany, belongsTo, RestSerializer  } from 'miragejs';

const AppSerializer = RestSerializer.extend({
    embed: true
})

export function makeServer({ environment = 'test' }) {
    createServer({
        environment, 
        models: {
            course: Model.extend({
                modules: hasMany('module'),
            }),
            module: Model.extend({
                classes: hasMany('class'),
                course: belongsTo(),
            }),
            class: Model.extend({
                module: belongsTo(),
            }),
        },
        serializers: {
            application: AppSerializer,
            module: AppSerializer.extend({
                include: ['classes'],
            })
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
                id(i) {
                    return i + 1;
                },
                image: "/images/module-card.png"
            }),
            class: Factory.extend({
                id(i) {
                    return i + 1;
                },
                name(i) {
                    return `Aula ${i + 1}`
                },
                description(i) {
                    return `Descrição sobre o curso ${i + 1}`
                }
            })
        },
        seeds(server) {
            server.create("course", { id: 1, duration: 10, image: "images/course1.png", enabled: true });
            server.create("course", { id: 2, duration: 10, image: "images/course1.png", enabled: true });
            server.create("course", { id: 3, duration: 10, image: "images/course2.png", enabled: false });

            server.create("module", { courseId: 1, name: "1. Introdução", description: "Introdução ao Svelte", status: true  })
            server.create("module", { courseId: 1, name: "2. Programação Funcional", description: "Introdução ao Svelte", status: true })
            server.create("module", { courseId: 1, name: "3. Rx.JS", description: "Introdução ao Svelte", status: false })
            server.create("module", { courseId: 1, name: "4. Finalização", description: "Introdução ao Svelte", status: true })
            server.create("module", { courseId: 2, name: "1. Introdução", description: "Introdução ao Svelte", status: true  })
            server.create("module", { courseId: 2, name: "2. Programação Funcional", description: "Introdução ao Svelte", status: true })
            server.create("module", { courseId: 2, name: "3. Rx.JS", description: "Introdução ao Svelte", status: false })
            server.create("module", { courseId: 3, name: "1. Introdução", description: "Introdução ao React", status: true  })
            server.create("module", { courseId: 3, name: "4. Finalização", description: "Introdução ao React", status: true })

            server.create("class", { moduleId: 1, status: true })
            server.create("class", { moduleId: 1, status: true })
            server.create("class", { moduleId: 1, status: true })
            server.create("class", { moduleId: 2, status: true })
            server.create("class", { moduleId: 3, status: false })
            server.create("class", { moduleId: 4, status: true })
            server.create("class", { moduleId: 4, status: true })
            server.create("class", { moduleId: 5, status: true })
            server.create("class", { moduleId: 5, status: true })
            server.create("class", { moduleId: 5, status: true })
            server.create("class", { moduleId: 6, status: true })
            server.create("class", { moduleId: 6, status: true })
            server.create("class", { moduleId: 7, status: true })
            server.create("class", { moduleId: 8, status: false })
            server.create("class", { moduleId: 8, status: true })
            server.create("class", { moduleId: 8, status: false })
            server.create("class", { moduleId: 9, status: true })
            server.create("class", { moduleId: 9, status: true })

        },
        routes() {
            this.namespace = "api";
    
            this.get("/treinamentos", (schema) => {
                return schema.courses.all();
            });

            this.get("/treinamentos/:id", (schema, request) => {
                const id = request.params.id;
                return schema.modules.where({courseId: id});
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
                delete module.classes;
                schema.modules.find(id).update(module);
                return schema.modules.all();
            });

            this.delete("/modulos/:id", (schema, request) => {
                const id = request.params.id;
                const module = schema.find('module', id);
                module?.destroy();
                return schema.modules.all();
            });

            let newClassId = 6;
            this.post("/aulas", (schema, request) => {
                const classe = JSON.parse(request.requestBody);
                classe.id = newClassId++;
                classe.moduleId = 1;
                schema.classes.create(classe);
                return schema.modules.all();
            });

            this.put("/aulas/:id", (schema, request) => {
                const id = request.params.id;
                const classe = JSON.parse(request.requestBody);
                schema.classes.find(id).update(classe);
                return schema.modules.all();
            });

            this.delete("/aulas/:id", (schema, request) => {
                const id = request.params.id;
                const module = schema.find('module', id);
                module?.destroy();
                return schema.modules.all();
            });
        },
    })
  }