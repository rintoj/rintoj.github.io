System.register(['angular2/core', 'angular2/router', './header/header.component', './projectlog/projectlog.component', './about/about.component'], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, header_component_1, projectlog_component_1, about_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (projectlog_component_1_1) {
                projectlog_component_1 = projectlog_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Angular 2 Seed';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'pw-app',
                        providers: [
                            router_1.ROUTER_PROVIDERS
                        ]
                    }),
                    core_1.View({
                        directives: [header_component_1.HeaderComponent, router_1.ROUTER_DIRECTIVES],
                        template: "\n\t\t<pw-header></pw-header>\n\t\t<main>\n\t\t\t<router-outlet></router-outlet>\n\t\t</main>\n\t\t<footer>\n\t\t\tPathway\u2122 - Powered by Angular 2. \u00A9 2016 Copyright rintoj (Rinto Jose).\n\t\t</footer>\n\t"
                    }),
                    router_1.RouteConfig([
                        { path: '/log', name: 'Projectlog', component: projectlog_component_1.ProjectlogComponent, useAsDefault: true },
                        { path: '/about', name: 'About', component: about_component_1.AboutComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBNkJBO2dCQUFBO29CQVdTLFVBQUssR0FBRyxnQkFBZ0IsQ0FBQztnQkFDbEMsQ0FBQztnQkFsQ0Q7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsU0FBUyxFQUFFOzRCQUNULHlCQUFnQjt5QkFDakI7cUJBQ0YsQ0FBQztvQkFDRCxXQUFJLENBQUM7d0JBQ0osVUFBVSxFQUFFLENBQUMsa0NBQWUsRUFBRSwwQkFBaUIsQ0FBQzt3QkFDaEQsUUFBUSxFQUFFLHdOQVFWO3FCQUNELENBQUM7b0JBQ0Qsb0JBQVcsQ0FBQzt3QkFDWCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsMENBQW1CLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRTt3QkFDeEYsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7cUJBQzdELENBQUM7O2dDQUFBO2dCQWFGLG1CQUFDO1lBQUQsQ0FaQSxBQVlDLElBQUE7WUFaRCx1Q0FZQyxDQUFBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTLCBST1VURVJfUFJPVklERVJTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5pbXBvcnQge0hlYWRlckNvbXBvbmVudH0gZnJvbSAnLi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQge1Byb2plY3Rsb2dDb21wb25lbnR9IGZyb20gJy4vcHJvamVjdGxvZy9wcm9qZWN0bG9nLmNvbXBvbmVudCc7XG5pbXBvcnQge0Fib3V0Q29tcG9uZW50fSBmcm9tICcuL2Fib3V0L2Fib3V0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3B3LWFwcCcsXG4gIHByb3ZpZGVyczogW1xuICAgIFJPVVRFUl9QUk9WSURFUlNcbiAgXVxufSlcbkBWaWV3KHtcbiAgZGlyZWN0aXZlczogW0hlYWRlckNvbXBvbmVudCwgUk9VVEVSX0RJUkVDVElWRVNdLFxuICB0ZW1wbGF0ZTogYFxuXHRcdDxwdy1oZWFkZXI+PC9wdy1oZWFkZXI+XG5cdFx0PG1haW4+XG5cdFx0XHQ8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG5cdFx0PC9tYWluPlxuXHRcdDxmb290ZXI+XG5cdFx0XHRQYXRod2F54oSiIC0gUG93ZXJlZCBieSBBbmd1bGFyIDIuIMKpIDIwMTYgQ29weXJpZ2h0IHJpbnRvaiAoUmludG8gSm9zZSkuXG5cdFx0PC9mb290ZXI+XG5cdGBcbn0pXG5AUm91dGVDb25maWcoW1xuICB7IHBhdGg6ICcvbG9nJywgbmFtZTogJ1Byb2plY3Rsb2cnLCBjb21wb25lbnQ6IFByb2plY3Rsb2dDb21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZSB9LFxuICB7IHBhdGg6ICcvYWJvdXQnLCBuYW1lOiAnQWJvdXQnLCBjb21wb25lbnQ6IEFib3V0Q29tcG9uZW50IH1cbl0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblx0LyoqXG5cdCAqIFRoaXMgaXMgYSBkb2MgY29tbWVudCBmb3IgYHRpdGxlYC5cblx0ICogQGV4YW1wbGUgVGhpcyBpcyBhIGNhcHRpb24uXG5cdCAqIGBgYHRzXG5cdCAqIHZhciB3b3JsZDogU3RyaW5nID0gJ3dvcmxkJztcblx0ICogdmFyIGhlbGxvOiBTdHJpbmcgPSAnSGVsbG8gJyArIHdvcmxkO1xuXHQgKiBjb25zb2xlLmxvZyhoZWxsbyk7XG5cdCAqIGBgYFxuXHQgKiBAZGVwcmVjYXRlZCBUaGlzIGlzIGFuIGV4YW1wbGUgb2YgdGhlIGBkZXByZWNhdGVkYCBhbm5vdGF0aW9uIHRhZy5cblx0ICovXG4gIHB1YmxpYyB0aXRsZSA9ICdBbmd1bGFyIDIgU2VlZCc7XG59XG4iXSwic291cmNlUm9vdCI6Ii9Vc2Vycy9yaW50b2ovRGF0YS9Qcm9qZWN0cy9XZWIvcGF0aHdheS9zcmMvc2NyaXB0cyJ9
