# NestJS Framework Overview

NestJS is an open-source Node.js framework for building efficient, scalable server-side apps and APIs.

### Some of the main features:

- Modular application structure through [modules](https://docs.nestjs.com/modules). Each part of the app can be split into self-contained modules. This makes the code more organized and maintainable.

- Dependency injection built into the framework core. Nest manages dependencies automatically through the `@Injectable()` decorator.

- [OpenAPI (Swagger)](https://www.openapis.org/): This makes it easy to document the API and test it.

- [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API): This makes it easy to implement real-time communication.

- [GraphQL](https://graphql.org/): This makes it easy to implement GraphQL APIs.

- Built-in support for RxJS observables out of the box. Async code is simplified and promises are avoided.

- Database tools like [TypeORM](https://typeorm.io/) for entity management and CRUD operations. Connectors are available for MongoDB, PostgreSQL etc.

- Validation and sanitation features using classes-transformer and class-validator. Input is validated easily.

- Routing system similar to Express with controller class routing handling HTTP requests.

- Built-in utilities like [guards](https://docs.nestjs.com/guards), [pipes](https://docs.nestjs.com/pipes), [interceptors](https://docs.nestjs.com/interceptors) and exception filters for cross-cutting concerns like security, loggin, error handling, etc.

- Proper support for [REST APIs](https://restfulapi.net/)  with abstract classes like Services, [Controllers](https://docs.nestjs.com/interceptors), etc.

## NestJS vs Express

| NestJS | Express |
| --- | --- |
| NestJS follows more of an MVC architecture pattern with clear separation of concerns between controllers, services and repositories. | Express is more loosely coupled and focused only on routing functionality.|
| NestJS has dependency injection built into its core using decorators. | Express does not have built-in DI, requiring external libraries like Inversify.|
| NestJS encourages building modular applications using modules that group related functionality together.| Express takes more of a monolithic approach.|
| NestJS uses class-based routing where controllers define routes.| Express uses more lightweight function-based route handlers.|
| NestJS includes classes for validation/sanitization out of the box. | Express does not have built-in validation/sanitization.|
| NestJS provides things like Guards, Interceptors, Pipes out of the box. | Express relies on middleware for cross-cutting concerns.|
| NestJS integrates ORMs seamlessly via modules.| Express requires manual queries usually.|

So NestJS abstracts away boilerplate and provides structure, while Express provides raw routing capabilities. NestJS can be viewed as a higher-level framework built upon the lower-level Express.

---
## Helpful Links:
- [NestJS Official Docs](https://docs.nestjs.com/)
- [NestJS Official Code Sample](https://github.com/nestjs/nest/tree/master/sample)