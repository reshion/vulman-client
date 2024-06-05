import { Component, Inject, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AsyncPipe, DOCUMENT, NgIf } from '@angular/common';
import { StorageKey } from '../shared/enums/storage-key.enum';
import { StorageService } from '../shared/services/storage/storage.service';
import { ThemeKey } from '../shared/enums/theme-key.enum';
import { SidenavService } from '../shared/services/sidenav/sidenav.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent
{

  isExpanded = false;

  ThemeKey = ThemeKey;
  currentTheme: ThemeKey = this.storageService.getItem<ThemeKey>(StorageKey.THEME);
  theme: ThemeKey = this.currentTheme == ThemeKey.DARK ? ThemeKey.LIGHT : ThemeKey.DARK;


  constructor(
    public sidenavService: SidenavService,
    public storageService: StorageService,
    @Inject(DOCUMENT) private document: Document,
  )
  {

    this.setTheme(this.currentTheme);
  }

  collapse()
  {
    this.isExpanded = false;
  }

  toggle()
  {
    this.isExpanded = !this.isExpanded;
  }

  /**
   * Switch theme.
   * @param theme theme
   */
  switchTheme(theme: ThemeKey)
  {
    this.theme = theme == ThemeKey.DARK ? ThemeKey.LIGHT : ThemeKey.DARK;
    this.setTheme(theme);
  }

  /**
   * Save and set theme.
   * @param storedTheme stored theme
   */
  setTheme(storedTheme: string)
  {
    const oldTheme = this.storageService.getItem<string>(StorageKey.THEME);
    this.document.body.classList.remove(oldTheme);

    this.storageService.setItem(StorageKey.THEME, storedTheme);
    this.document.body.classList.add(storedTheme);
  }
}
