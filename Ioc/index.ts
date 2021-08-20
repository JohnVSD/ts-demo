import { Container } from "./container";

const container = new Container();
const input = { x: 200 };

class BasicClass {}

// 注册 ClassProvider
container.addProvider({ provide: BasicClass, useClass: BasicClass });
// 注册 ValueProvider
container.addProvider({ provide: BasicClass, useValue: input });
// 注册 FactoryProvider
container.addProvider({ provide: BasicClass, useFactory: () => input });
