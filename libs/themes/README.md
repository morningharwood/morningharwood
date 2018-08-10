### Theme Module
Use a `:root` set of css variables to manage themes. Manage a full suite
of a theme and be able to switch out those values for new values which map
to the same keys.

##### TODO:
- Make a directive to put on a component similar to sundial.
- Fill out one entire theme.
- Design a ui widget to manage the switching.
- Switch Theme based on type of day/weather.
- Add back in konami code.

#### Research:
[https://medium.com](https://medium.com/@amcdnl/theming-angular-with-css-variables-3c78a5b20b24)

#### Useage:
```
export class ThemeDirective {
    @Input() initTheme: ENUM;
    constructor(db: AngularFirestore,
              app: ApplicationRef,
              private htmlThemeService: HtmlThemeService) {}

    ngOnInit() {
      this.htmlThemeService.setTheme();
    }
}
```
