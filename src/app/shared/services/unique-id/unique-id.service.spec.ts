import { UniqueIdService } from './unique-id.service';

//Por padrão o angular CLI utiliza um framework de teste para executar os testes, o jasmine
//Estrutura sugerida pelo jasmine ' blablabla SHOULD blabalbal WHEN blabalbla
//pro tip: adicionar tralha na palavra para dizer que é um método. #generateUniqueIdWithPrefix
//A equipe do Angular faz a mesma coisa.

//Karma é um executor de testes criado pela prória equipe do Angular.
describe(UniqueIdService.name, () => {
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    const service = new UniqueIdService(); // criando uma instância do servico
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should not generate duplicated IDs when called multiple times`, () => {
    const service = new UniqueIdService();

    const ids = new Set(); //Set não aceita strings duplicadas
    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }

    expect(ids.size).toBe(50);

  });
});
