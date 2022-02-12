import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UniqueIdService {
  //Serve para gerar servicos unicos e dizer quantos serviços foram ids foram gerados durante a aplicação.

  private numberOfGeneratedIds = 0;

  public generateUniqueIdWithPrefix(prefix: string): string {
    //Tratamento chamado de fail fast. Se não tiver prefixo, o metodo falha.
    if (!prefix) {
      throw Error('Prefix can not be empty!');
    }
    const uniqueId = this.generateUniqueId();
    this.numberOfGeneratedIds++;
    return `${prefix}-${uniqueId}`;
  }

  public getNumberOfGeneratedUniqueIds(): number {
    return this.numberOfGeneratedIds;
  }

  private generateUniqueId(): string {
    return uuidv4();
  }
}
