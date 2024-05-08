import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagetwoPage } from './pagetwo.page';

describe('PagetwoPage', () => {
  let component: PagetwoPage;
  let fixture: ComponentFixture<PagetwoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PagetwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
