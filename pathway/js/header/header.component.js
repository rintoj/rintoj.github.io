System.register(['angular2/core'], function(exports_1) {
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
    var core_1;
    var HeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent() {
                    this.title = 'Pathway';
                    this.selectedProject = '--select project--';
                    this.showDropdown = false;
                    this.showMenu = false;
                    this.projects = ['Mobile in web', 'Angular 2', 'TCS SwaS', 'dreamUP', 'TCS data Tootle'];
                }
                HeaderComponent.prototype.toggleDropdown = function () {
                    this.showDropdown = !this.showDropdown;
                };
                HeaderComponent.prototype.toggleMenu = function () {
                    this.showMenu = !this.showMenu;
                };
                HeaderComponent.prototype.selectProject = function (event) {
                    this.selectedProject = event.target.innerText;
                };
                HeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'pw-header'
                    }),
                    core_1.View({
                        template: "\n\t\t<div class=\"nav-wrapper\" [class.open]=\"showMenu\">\n\t\t\t<a class=\"title\">\n\t\t\t\t<img src=\"images/logo.svg\" width=\"48\">\n\t\t\t\t<span href=\"#\">{{title}}</span>\n\t\t\t</a>\n\n\t\t\t<span class=\"right visible-sm\">\n\t\t\t\t<i class=\"fa fa-bars\" (click)=\"toggleMenu()\"></i>\n\t\t\t</span>\n\n\t\t\t<span class=\"menu right visible-lg\" [class.open]=\"showMenu\">\n\t\t\t\t<span class=\"dropdown inline\" (click)=\"toggleDropdown()\" [class.open]=\"showDropdown\">\n\t\t\t\t\t<button class=\"dropdown-btn\">\n\t\t\t\t\t\t<i class=\"fa fa-home\"></i> {{selectedProject}} <i class=\"fa fa-chevron-down\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t\t<div class=\"dropdown-menu\">\n\t\t\t\t\t\t<button class=\"dropdown-item\" type=\"button\"  *ngFor=\"#project of projects\"\n\t\t\t\t\t\t (click)=\"selectProject($event)\"><i class=\"fa fa-home\"></i> {{project}}</button>\n\t\t\t\t\t   <div class=\"dropdown-divider\"></div>\n\t\t\t\t\t\t <button class=\"dropdown-item\" type=\"button\"><i class=\"fa fa-plus\"></i> Create</button>\n\t\t\t\t\t</div>\n\t\t\t\t</span>\n\n\t\t\t\t<span class=\"icons\">\n\t\t\t\t\t<a class=\"fa fa-user\"></a>\n\t\t\t\t\t<a class=\"fa fa-bell\" badge=\"10\"></a>\n\t\t\t\t\t<a class=\"fa fa-cog\"></a>\n\t\t\t\t</span>\n\t\t\t</span>\n\n    </div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeaderComponent);
                return HeaderComponent;
            })();
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF3Q0E7Z0JBUUU7b0JBUE8sVUFBSyxHQUFHLFNBQVMsQ0FBQztvQkFFakIsb0JBQWUsR0FBVyxvQkFBb0IsQ0FBQztvQkFDL0MsaUJBQVksR0FBWSxLQUFLLENBQUM7b0JBQzlCLGFBQVEsR0FBWSxLQUFLLENBQUM7b0JBSWhDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxlQUFlLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztnQkFDM0YsQ0FBQztnQkFFRCx3Q0FBYyxHQUFkO29CQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUN6QyxDQUFDO2dCQUVELG9DQUFVLEdBQVY7b0JBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ2pDLENBQUM7Z0JBRUQsdUNBQWEsR0FBYixVQUFjLEtBQVU7b0JBQ3RCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7Z0JBQ2hELENBQUM7Z0JBNURIO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLFdBQVc7cUJBQ3RCLENBQUM7b0JBQ0QsV0FBSSxDQUFDO3dCQUNKLFFBQVEsRUFBRSxreENBZ0NWO3FCQUNELENBQUM7O21DQUFBO2dCQXdCRixzQkFBQztZQUFELENBdkJBLEFBdUJDLElBQUE7WUF2QkQsNkNBdUJDLENBQUEiLCJmaWxlIjoiaGVhZGVyL2hlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld30gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3B3LWhlYWRlcidcbn0pXG5AVmlldyh7XG4gIHRlbXBsYXRlOiBgXG5cdFx0PGRpdiBjbGFzcz1cIm5hdi13cmFwcGVyXCIgW2NsYXNzLm9wZW5dPVwic2hvd01lbnVcIj5cblx0XHRcdDxhIGNsYXNzPVwidGl0bGVcIj5cblx0XHRcdFx0PGltZyBzcmM9XCJpbWFnZXMvbG9nby5zdmdcIiB3aWR0aD1cIjQ4XCI+XG5cdFx0XHRcdDxzcGFuIGhyZWY9XCIjXCI+e3t0aXRsZX19PC9zcGFuPlxuXHRcdFx0PC9hPlxuXG5cdFx0XHQ8c3BhbiBjbGFzcz1cInJpZ2h0IHZpc2libGUtc21cIj5cblx0XHRcdFx0PGkgY2xhc3M9XCJmYSBmYS1iYXJzXCIgKGNsaWNrKT1cInRvZ2dsZU1lbnUoKVwiPjwvaT5cblx0XHRcdDwvc3Bhbj5cblxuXHRcdFx0PHNwYW4gY2xhc3M9XCJtZW51IHJpZ2h0IHZpc2libGUtbGdcIiBbY2xhc3Mub3Blbl09XCJzaG93TWVudVwiPlxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cImRyb3Bkb3duIGlubGluZVwiIChjbGljayk9XCJ0b2dnbGVEcm9wZG93bigpXCIgW2NsYXNzLm9wZW5dPVwic2hvd0Ryb3Bkb3duXCI+XG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImRyb3Bkb3duLWJ0blwiPlxuXHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJmYSBmYS1ob21lXCI+PC9pPiB7e3NlbGVjdGVkUHJvamVjdH19IDxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1kb3duXCI+PC9pPlxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51XCI+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIHR5cGU9XCJidXR0b25cIiAgKm5nRm9yPVwiI3Byb2plY3Qgb2YgcHJvamVjdHNcIlxuXHRcdFx0XHRcdFx0IChjbGljayk9XCJzZWxlY3RQcm9qZWN0KCRldmVudClcIj48aSBjbGFzcz1cImZhIGZhLWhvbWVcIj48L2k+IHt7cHJvamVjdH19PC9idXR0b24+XG5cdFx0XHRcdFx0ICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWRpdmlkZXJcIj48L2Rpdj5cblx0XHRcdFx0XHRcdCA8YnV0dG9uIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIHR5cGU9XCJidXR0b25cIj48aSBjbGFzcz1cImZhIGZhLXBsdXNcIj48L2k+IENyZWF0ZTwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L3NwYW4+XG5cblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJpY29uc1wiPlxuXHRcdFx0XHRcdDxhIGNsYXNzPVwiZmEgZmEtdXNlclwiPjwvYT5cblx0XHRcdFx0XHQ8YSBjbGFzcz1cImZhIGZhLWJlbGxcIiBiYWRnZT1cIjEwXCI+PC9hPlxuXHRcdFx0XHRcdDxhIGNsYXNzPVwiZmEgZmEtY29nXCI+PC9hPlxuXHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHQ8L3NwYW4+XG5cbiAgICA8L2Rpdj5cblx0YFxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQge1xuICBwdWJsaWMgdGl0bGUgPSAnUGF0aHdheSc7XG5cbiAgcHJpdmF0ZSBzZWxlY3RlZFByb2plY3Q6IHN0cmluZyA9ICctLXNlbGVjdCBwcm9qZWN0LS0nO1xuICBwcml2YXRlIHNob3dEcm9wZG93bjogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIHNob3dNZW51OiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgcHJvamVjdHM6IEFycmF5PHN0cmluZz47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wcm9qZWN0cyA9IFsnTW9iaWxlIGluIHdlYicsICdBbmd1bGFyIDInLCAnVENTIFN3YVMnLCAnZHJlYW1VUCcsICdUQ1MgZGF0YSBUb290bGUnXTtcbiAgfVxuXG4gIHRvZ2dsZURyb3Bkb3duKCkge1xuICAgIHRoaXMuc2hvd0Ryb3Bkb3duID0gIXRoaXMuc2hvd0Ryb3Bkb3duO1xuICB9XG5cbiAgdG9nZ2xlTWVudSgpIHtcbiAgICB0aGlzLnNob3dNZW51ID0gIXRoaXMuc2hvd01lbnU7XG4gIH1cblxuICBzZWxlY3RQcm9qZWN0KGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLnNlbGVjdGVkUHJvamVjdCA9IGV2ZW50LnRhcmdldC5pbm5lclRleHQ7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL1VzZXJzL3JpbnRvai9EYXRhL1Byb2plY3RzL1dlYi9wYXRod2F5L3NyYy9zY3JpcHRzIn0=
