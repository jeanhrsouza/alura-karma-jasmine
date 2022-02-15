import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LikeWidgetComponent } from './like-widget.component';
import { LikeWidgetModule } from './like-widget.module';

describe(LikeWidgetComponent.name, () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null;
  let component: LikeWidgetComponent = null;

  /**
   * Os testes são escritos em Jasmine e quem roda os testes é o Karma
   * ---------
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
  it('Should auto-generate ID during ngOnInit when (@Input id) is not assigned', () => {
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it('Should NOT auto-generate ID during ngOnInit when (@Input id) is assigned', () => {
    const someId = 'someId';
    component.id = someId;
    fixture.detectChanges();
    expect(component.id).toBe(someId);
  });

  /**
   * ---
   * Há o fixture.detectChange() no teste porque é onde dispara o ciclo de vida do angular ngOnInit().
   * ---
   * Spy (espião) é um 'carinha' que vai possuir o método e substituir esse. Entre a chamada de spy e o
   * metodo, há uma flag que avisa que foi chamado o método.
   */
  it(`#${LikeWidgetComponent.prototype.like.name}
   should trigger (@Output liked) when called`, () => {
    //sempre passar o objeto e o método que quer espionar.
    spyOn(component.liked, 'emit');
    fixture.detectChanges();
    component.like();
    expect(component.liked.emit).toHaveBeenCalled();
  });
});
