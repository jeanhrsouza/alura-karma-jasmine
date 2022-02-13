import { LikeWidgetModule } from './like-widget.module';
import {
  ComponentFixture,
  ComponentFixtureAutoDetect,
  TestBed,
} from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UniqueIdService } from './../../unique-id/unique-id.service';
import { LikeWidgetComponent } from './like-widget.component';

describe(LikeWidgetComponent.name, () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null;

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
  });

  it('Should create component', () => {
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('Should auto generate ID when id input property is missing', () => {
    //por padrão, o desenvolvedor é responsável por disparar a change detection.
    const component = fixture.componentInstance;
    fixture.detectChanges(); //detecta e passa pelo ngOnInit.
    expect(component.id).toBeTruthy();
  });

  it('Should not generate ID when id input property is present', () => {
    const component = fixture.componentInstance;
    const someId = 'someId';
    component.id = someId;
    fixture.detectChanges();
    expect(component.id).toBe(someId);
  });
});
