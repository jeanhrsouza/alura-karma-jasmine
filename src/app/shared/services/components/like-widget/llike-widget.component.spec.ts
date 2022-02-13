import { TestBed } from '@angular/core/testing';
import { LikeWidgetComponent } from './like-widget.component';

describe(LikeWidgetComponent.name, () => {
  let component: LikeWidgetComponent = null;

  beforeEach(async () => {
    //TestBed, em suma, é uma solução para o programador não precisar ficar instanciando os componentes;
    await TestBed.configureTestingModule({
      declarations: [LikeWidgetComponent],
    }).compileComponents();
    //o compileComponents() vai aguardar a compilação do TS + template.
    //Desta forma, estamo blindando o código no sentido de tornar o código 'Feature Proof'
  });

  it('', () => {});
});
