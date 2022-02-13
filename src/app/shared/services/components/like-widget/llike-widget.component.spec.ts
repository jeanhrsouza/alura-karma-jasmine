import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LikeWidgetComponent } from './like-widget.component';
import { LikeWidgetModule } from './like-widget.module';

describe(LikeWidgetComponent.name, () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null;
  let component: LikeWidgetComponent = null;

  /**
   * TestBed, em suma, é uma solução para o programador não precisar ficar instanciando os componentes;
   * ---------
   * providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }], //provê para o component a detecção automática de detectChanges();
   * ------------
   * O compileComponents() vai aguardar a compilação do TS + template.
   * Desta forma, estamo blindando o código no sentido de tornar o código 'Feature Proof'
   */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeWidgetModule],
    }).compileComponents();
    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Por padrão, o desenvolvedor é responsável por disparar a change detection.
   * Isso é uma recomendação da equipe do Angular para que evite problemas ao iniciar o ciclo do Angular
   * pelo ngOnInit.
   */
  it('Should auto generate ID when id input property is missing', () => {
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it('Should not generate ID when id input property is present', () => {
    const someId = 'someId';
    component.id = someId;
    fixture.detectChanges();
    expect(component.id).toBe(someId);
  });

  /**
   * Quando houver um subscribe, é interessante considerar uma função async ter o done como parâmetro.
   * Desse modo, é mais fácil de avisar se falhou ou não o teste.
   * ---
   * Há o fixture.detectChange() no teste porque é onde dispara o ciclo de vida do angular ngOnInit().
   * ---
   */
  it(`#${LikeWidgetComponent.prototype.like.name}
   should trigger emission when called`, (done) => {
    fixture.detectChanges();
    // ↓↓↓↓ é possivel utilizar um subscribe pelo fato do liked ser um observable.
    component.liked.subscribe(() => {
      expect(true).toBe(true); //Serve para saber se realmente foi chamado o liked
      done();
    });
    component.like();
  });
});
