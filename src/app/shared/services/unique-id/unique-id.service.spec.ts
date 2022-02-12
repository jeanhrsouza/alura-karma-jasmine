import { UniqueIdService } from './unique-id.service';

//Por padrão o angular CLI utiliza um framework de teste para executar os testes, o jasmine
//Estrutura sugerida pelo jasmine ' blablabla SHOULD blabalbal WHEN blabalbla
//pro tip: adicionar tralha na palavra para dizer que é um método. #generateUniqueIdWithPrefix
//A equipe do Angular faz a mesma coisa.

//Karma é um executor de testes criado pela prória equipe do Angular.

describe(UniqueIdService.name, () => {
  let service: UniqueIdService = null;
  beforeEach(() => {
    service = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should not generate duplicated IDs when called multiple times`, () => {
    const ids = new Set(); //Set não aceita strings duplicadas
    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(50);
  });

  it(`${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} should return the number of generatedIds when called`, () => {
    service.generateUniqueIdWithPrefix('app');
    service.generateUniqueIdWithPrefix('app');
    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });
});
