import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LikeWidgetComponent } from './like-widget.component';
import { LikeWidgetModule } from './like-widget.module';

describe(LikeWidgetComponent.name, () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null;
  let component: LikeWidgetComponent = null;

  beforeEach(async () => {
    //TestBed, em suma, é uma solução para o programador não precisar ficar instanciando os componentes;
    await TestBed.configureTestingModule({
      imports: [LikeWidgetModule],
      // providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }], //provê para o component a detecção automática de detectChanges();
      //o compileComponents() vai aguardar a compilação do TS + template.
      //Desta forma, estamo blindando o código no sentido de tornar o código 'Feature Proof'
    }).compileComponents();

    //Component Fixture
    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  it('Should auto generate ID when id input property is missing', () => {
    //por padrão, o desenvolvedor é responsável por disparar a change detection.
    fixture.detectChanges(); //detecta e passa pelo ngOnInit.
    expect(component.id).toBeTruthy();
  });

  it('Should not generate ID when id input property is present', () => {
    const someId = 'someId';
    component.id = someId;
    fixture.detectChanges();
    expect(component.id).toBe(someId);
  });

  it(`${LikeWidgetComponent.prototype.like.name}
   should trigger emission when called`, () => {
    fixture.detectChanges(); //disparar o ciclo de vida do angular.

    // ↓↓↓↓é possivel utilizar um subscribe pelo fato do liked ser um observable.
    component.liked.subscribe(() => {
      expect(true).toBe(true); //só quero saber se realmente foi chamado o liked
    });
    component.like();
  });
});
