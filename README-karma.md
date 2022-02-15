# Testes automatizados: Karma e Jasmine

## O que é Jasmine?

## O que é Karma?

## Padronização ao escrever um teste unitário

- Sempre utilize template string

- Para nome de métodos, utilize o prototype, assim, ao refatorar o nome do método, não será necessário trocar manualmente o nome do seu teste

- Para indicar que a palavra é um método, utilize sempre um # antes da palavra

- Adote a seguinte padronização para descrever o teste

* Caso o código seja em ingles: {description}+ SHOULD + {description}+WHEN + {description}

  - Exemplo em inglês:

    ```typescript
    it(`#${LikeWidgetComponent.prototype.like.name}
    should trigger (@Output liked) when called`, () => {
      //sempre passar o objeto e o método que quer espionar.
      spyOn(component.liked, "emit");
      fixture.detectChanges();
      component.like();
      expect(component.liked.emit).toHaveBeenCalled();
    });
    ```

* Caso o código seja em português: {descrição}+DEVE+{descrição}+QUANDO+ {descrição}
  - Exemplo em português:
    ```typescript
    it(`#${LikeWidgetComponent.prototype.like.name}
    deve gerar id quando for chamado com prefixo`, () => {
      //sempre passar o objeto e o método que quer espionar.
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
