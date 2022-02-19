# Testes automatizados: Karma e Jasmine

## O que é Jasmine?

[Jasmine](https://jasmine.github.io/pages/getting_started.html) é um framework para escrever testes para códigos JS.

## O que é Karma?

[Karma](https://karma-runner.github.io/latest/index.html) é um test runner feito para o Angular. O principal objetivo do Karma é automatizar os testes em diversos navegadores.

## Padronização ao descrever o componente de teste

- Utilize o nome do componente.nome. Desta forma ao refatorar o nome do componente, a descrição do teste também é atualizado o nome.

exemplo:

```typescript
describe(UniqueIdService.name, () => {});
```

## Padronização ao escrever um teste unitário

- Utilize sempre template string em vez de strings padrões;

- Para nome de métodos, utilize o prototype, desta forma, ao refatorar o nome do método, não será necessário atualizar o teste unitário manualmente.

- Para indicar que a palavra é um método, utilize sempre <b>#</b> antes da palavra

- Adote a seguinte padronização para descrever o teste

* Caso o código seja em ingles: {description}+ SHOULD + {description}+ WHEN + {description}

  - Exemplo em inglês:

    ```typescript
    it(`#${LikeWidgetComponent.prototype.like.name}
    should trigger (@Output liked) when called`, () => {
      spyOn(component.liked, "emit");
      fixture.detectChanges();
      component.like();
      expect(component.liked.emit).toHaveBeenCalled();
    });
    ```

* Caso o código seja em português: {descrição}+ DEVE + {descrição} + QUANDO + {descrição}
  - Exemplo em português:
    ```typescript
    it(`#${LikeWidgetComponent.prototype.like.name}
    deve gerar id quando for chamado com prefixo`, () => {
      spyOn(component.liked, "emit");
      fixture.detectChanges();
      component.like();
      expect(component.liked.emit).toHaveBeenCalled();
    });
    ```

## Diferença entre ToBe, ToBeTrue e ToBeTruthy

```typescript
expect(true).toBeTrue(); //testa somente literal,ou seja, só considera primitivo
expect(true).toBe(true); //compara se os valores são iguais. literal - literal /// Objeto - Objeto. Compara referencias de memória.
true.toBeTruthy(); // é o mais genérico de todos . Funciona a partir das regras do Javascript
```

## Aprendendo a ler o reporter

- Statements - Estados que cada linha pode ter, exemplo é um if ternário
- Branches - Se todas as estruturas decisórias do código foram testados. Exemplo: If....Else
- Functions - Nome de funções e métodos que foram testados
- Lines -> linhas que passaram nos testes e foram atendidas
