import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TechBadge } from './tech-badge';

describe('TechBadge', () => {
  let component: TechBadge;
  let fixture: ComponentFixture<TechBadge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechBadge],
    }).compileComponents();

    fixture = TestBed.createComponent(TechBadge);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('tech', 'Angular');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the tech name', () => {
    const badge = fixture.nativeElement.querySelector('.badge');
    expect(badge.textContent).toContain('Angular');
  });
});
