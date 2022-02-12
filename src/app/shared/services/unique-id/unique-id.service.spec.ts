import { UniqueIdService } from './unique-id.service';

//Por padrão o angular CLI utiliza um framework de teste para executar os testes, o jasmine
//Estrutura sugerida pelo jasmine ' blablabla SHOULD blabalbal WHEN blabalbla
//pro tip: adicionar tralha na palavra para dizer que é um método. #generateUniqueIdWithPrefix
  //A equipe do Angular faz a mesma coisa.
describe('UniqueIdService', () => {
  it('#generateUniqueIdWithPrefix should generate id when called with prefix', () => {
    const service = new UniqueIdService(); // criando uma instância do servico
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id).toContain('app-') //espero que o id passado contenha 'app-'
  });


  it('Segunda condição que queremos testar', () => {});
});
