System.register(['angular2/core', '../loader/loader.component'], function(exports_1) {
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
    var core_1, loader_component_1;
    var ProjectlogComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (loader_component_1_1) {
                loader_component_1 = loader_component_1_1;
            }],
        execute: function() {
            ProjectlogComponent = (function () {
                function ProjectlogComponent() {
                    this.selectAllOn = false;
                    this.loading = false;
                    this.logs = [{
                            id: '02332',
                            selected: false,
                            title: 'User must be able to login to system as engineer',
                            description: 'The navigation drawer on the right is a live demo of a temporary navigation drawer.',
                            status: 'new'
                        }, {
                            id: '02333',
                            selected: false,
                            title: 'User must be able to logout from the system',
                            description: 'The navigation drawer on the right is a live demo of a temporary navigation drawer.' +
                                ' Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily' +
                                ' above all other content until a section is selected.' +
                                ' Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily' +
                                ' above all other content until a section is selected.' +
                                ' Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily' +
                                ' above all other content until a section is selected.' +
                                ' Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily' +
                                ' above all other content until a section is selected.' +
                                ' Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily',
                            status: 'new'
                        }, {
                            id: '02334',
                            selected: true,
                            title: 'User must be able to see login page when trying to relogin after logout',
                            description: 'The navigation drawer on the right is a live demo of a temporary navigation drawer.' +
                                ' Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily' +
                                ' above all other content until a section is selected.' +
                                ' Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily' +
                                ' above all other content until a section is selected.' +
                                ' Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily' +
                                ' above all other content until a section is selected.' +
                                ' Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily' +
                                ' above all other content until a section is selected.' +
                                ' Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily' +
                                ' above all other content until a section is selected.',
                            status: 'done'
                        }, {
                            id: '02334',
                            selected: false,
                            title: 'User must be able to see login page when trying to relogin after logout',
                            description: 'The navigation drawer on the right is a live demo of a temporary navigation drawer.' +
                                ' Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily' +
                                ' Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily' +
                                ' above all other content until a section is selected.' +
                                ' Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily' +
                                ' above all other content until a section is selected.' +
                                ' Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily' +
                                ' above all other content until a section is selected.' +
                                ' Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily' +
                                ' above all other content until a section is selected.' +
                                ' Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily' +
                                ' above all other content until a section is selected.' +
                                ' Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily' +
                                ' above all other content until a section is selected.' +
                                ' Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily' +
                                ' above all other content until a section is selected.' +
                                ' Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily' +
                                ' above all other content until a section is selected.' +
                                ' Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily' +
                                ' above all other content until a section is selected.' +
                                ' Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily' +
                                ' above all other content until a section is selected.' +
                                ' Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily' +
                                ' above all other content until a section is selected.',
                            status: 'done'
                        }, {
                            id: '02334',
                            selected: false,
                            title: 'User must be able to see login page when trying to relogin after logout',
                            description: 'The navigation drawer on the right is a live demo of a temporary navigation drawer.' +
                                ' Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily' +
                                ' above all other content until a section is selected.' +
                                ' Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily' +
                                ' above all other content until a section is selected.' +
                                ' Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily' +
                                ' above all other content until a section is selected.' +
                                ' Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily' +
                                ' above all other content until a section is selected.' +
                                ' Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily' +
                                ' above all other content until a section is selected.' +
                                ' Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily' +
                                ' above all other content until a section is selected.',
                            status: 'doing'
                        }, {
                            id: '02334',
                            selected: false,
                            title: 'A user must be able to see login page when trying to relogin after logout',
                            description: 'The navigation drawer on the right is a live demo of a temporary navigation drawer.' +
                                ' Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily' +
                                ' above all other content until a section is selected.' +
                                ' Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily' +
                                ' above all other content until a section is selected.' +
                                ' Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily' +
                                ' above all other content until a section is selected.' +
                                ' Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily' +
                                ' above all other content until a section is selected.',
                            status: 'doing'
                        }];
                }
                ProjectlogComponent.prototype.toggleAll = function () {
                    this.selectAllOn = !this.selectAllOn;
                    for (var _i = 0, _a = this.logs; _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.selected = this.selectAllOn;
                    }
                };
                ProjectlogComponent.prototype.toggleSelection = function (item, event) {
                    event.stopPropagation();
                    item.selected = !item.selected;
                    this.updateSelectAllToggle();
                };
                ProjectlogComponent.prototype.toggleCurrent = function (current) {
                    current.open = !current.open;
                    if (this.currentItem && current !== this.currentItem) {
                        this.currentItem.open = false;
                    }
                    this.currentItem = current;
                    this.updateSelectAllToggle();
                };
                ProjectlogComponent.prototype.updateSelectAllToggle = function () {
                    for (var _i = 0, _a = this.logs; _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.selected === false) {
                            this.selectAllOn = false;
                            return;
                        }
                    }
                    this.selectAllOn = true;
                };
                ProjectlogComponent.prototype.deleteSelected = function () {
                    this.logs = this.logs.filter(function (item) { return item.selected === false; });
                };
                ProjectlogComponent = __decorate([
                    core_1.Component({
                        selector: 'pw-projectlog'
                    }),
                    core_1.View({
                        directives: [loader_component_1.LoaderComponent],
                        template: "\n\n\t\t<!-- action buttons -->\n\t\t<div class=\"actions\">\n\t\t\t<a class=\"fa fa-plus\" tooltip=\"Add story\"></a>\n\t\t\t<a class=\"fa fa-trash\" tooltip=\"Delete stories\" (click)=\"deleteSelected()\"></a>\n\t\t\t<a class=\"fa fa-check\" tooltip=\"Toggle selection\" (click)=\"toggleAll()\" [class.selected]=\"selectAllOn\"></a>\n\t\t\t<a class=\"fa fa-refresh\" tooltip=\"Toggle spinner\" (click)=\"loading=!loading\"></a>\n\t\t</div>\n\n\t\t<div class=\"separator\"></div>\n\n\t\t<!-- the list -->\n\t\t<div class=\"list\" [class.loading]=\"loading\">\n\n\t\t\t<!-- the list item-->\n\t\t\t<div class=\"list-item\" *ngFor=\"#item of logs\" [class.selected-item]=\"item.selected\" [class.open]=\"item.open\"\n\t\t\t (click)=\"toggleCurrent(item)\">\n\t\t\t\t<div class=\"avatar fa\" (click)=\"toggleSelection(item, $event)\">{{item.title.substr(0, 1).toUpperCase()}}</div>\n\t\t\t\t<div class=\"content\">\n\t\t\t\t\t<div class=\"heading-row\">\n\t\t\t\t\t\t<div class=\"id\">{{item.id}}</div>\n\t\t\t\t\t\t<div class=\"heading\">{{item.title}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"text\">\n\t\t\t\t\t<div class=\"status\" [class.grey-text]=\"item.status==='done'\" [class.green-text]=\"item.status==='doing'\"\n\t\t\t\t\t [class.yellow-text]=\"item.status==='new'\">{{item.status}}</div>\n\n\t\t\t\t\t{{item.description}}</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"action-bar\">\n\t\t\t\t\t<a class=\"fa fa-edit\"></a>\n\t\t\t\t\t<a class=\"fa fa-trash\"></a>\n\t\t\t\t</div>\n\t\t\t</div> <!-- end of list item -->\n\n\t\t\t<!-- list loader -->\n\t\t\t<div class=\"list-item loader\">\n\t\t\t\t<pw-loader></pw-loader>\n\t\t\t</div>\n\n\t\t</div> <!-- end of list -->\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProjectlogComponent);
                return ProjectlogComponent;
            })();
            exports_1("ProjectlogComponent", ProjectlogComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Rsb2cvcHJvamVjdGxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXFEQTtnQkFPRTtvQkFKUSxnQkFBVyxHQUFZLEtBQUssQ0FBQztvQkFLbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQzs0QkFDWCxFQUFFLEVBQUUsT0FBTzs0QkFDWCxRQUFRLEVBQUUsS0FBSzs0QkFDZixLQUFLLEVBQUUsa0RBQWtEOzRCQUN6RCxXQUFXLEVBQUUscUZBQXFGOzRCQUNsRyxNQUFNLEVBQUUsS0FBSzt5QkFDZCxFQUFFOzRCQUNDLEVBQUUsRUFBRSxPQUFPOzRCQUNYLFFBQVEsRUFBRSxLQUFLOzRCQUNmLEtBQUssRUFBRSw2Q0FBNkM7NEJBQ3BELFdBQVcsRUFBRSxxRkFBcUY7Z0NBQ2xHLDBHQUEwRztnQ0FDMUcsdURBQXVEO2dDQUN2RCwwR0FBMEc7Z0NBQzFHLHVEQUF1RDtnQ0FDdkQsMEdBQTBHO2dDQUMxRyx1REFBdUQ7Z0NBQ3ZELDBHQUEwRztnQ0FDMUcsdURBQXVEO2dDQUN2RCwwR0FBMEc7NEJBQzFHLE1BQU0sRUFBRSxLQUFLO3lCQUNkLEVBQUU7NEJBQ0QsRUFBRSxFQUFFLE9BQU87NEJBQ1gsUUFBUSxFQUFFLElBQUk7NEJBQ2QsS0FBSyxFQUFFLHlFQUF5RTs0QkFDaEYsV0FBVyxFQUFFLHFGQUFxRjtnQ0FDbEcsMEdBQTBHO2dDQUMxRyx1REFBdUQ7Z0NBQ3ZELDBHQUEwRztnQ0FDMUcsdURBQXVEO2dDQUN2RCwwR0FBMEc7Z0NBQzFHLHVEQUF1RDtnQ0FDdkQsMEdBQTBHO2dDQUMxRyx1REFBdUQ7Z0NBQ3ZELDBHQUEwRztnQ0FDMUcsdURBQXVEOzRCQUN2RCxNQUFNLEVBQUUsTUFBTTt5QkFDZixFQUFFOzRCQUNELEVBQUUsRUFBRSxPQUFPOzRCQUNYLFFBQVEsRUFBRSxLQUFLOzRCQUNmLEtBQUss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QUssQ0FBQyxDQUFDLENBQUM7NEJBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDOzRCQUN6QixNQUFNLENBQUM7d0JBQ1QsQ0FBQztxQkFDRjtvQkFFRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztnQkFDMUIsQ0FBQztnQkFFRCw0Q0FBYyxHQUFkO29CQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFnQixJQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxRixDQUFDO2dCQW5NSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxlQUFlO3FCQUMxQixDQUFDO29CQUNELFdBQUksQ0FBQzt3QkFDSixVQUFVLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO3dCQUM3QixRQUFRLEVBQUUsNnBEQTBDVjtxQkFDRCxDQUFDOzt1Q0FBQTtnQkFvSkYsMEJBQUM7WUFBRCxDQW5KQSxBQW1KQyxJQUFBO1lBbkpELHFEQW1KQyxDQUFBIiwiZmlsZSI6InByb2plY3Rsb2cvcHJvamVjdGxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld30gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1Byb2plY3Rsb2d9IGZyb20gJy4vcHJvamVjdGxvZyc7XG5pbXBvcnQge0xvYWRlckNvbXBvbmVudH0gZnJvbSAnLi4vbG9hZGVyL2xvYWRlci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwdy1wcm9qZWN0bG9nJ1xufSlcbkBWaWV3KHtcbiAgZGlyZWN0aXZlczogW0xvYWRlckNvbXBvbmVudF0sXG4gIHRlbXBsYXRlOiBgXG5cblx0XHQ8IS0tIGFjdGlvbiBidXR0b25zIC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJhY3Rpb25zXCI+XG5cdFx0XHQ8YSBjbGFzcz1cImZhIGZhLXBsdXNcIiB0b29sdGlwPVwiQWRkIHN0b3J5XCI+PC9hPlxuXHRcdFx0PGEgY2xhc3M9XCJmYSBmYS10cmFzaFwiIHRvb2x0aXA9XCJEZWxldGUgc3Rvcmllc1wiIChjbGljayk9XCJkZWxldGVTZWxlY3RlZCgpXCI+PC9hPlxuXHRcdFx0PGEgY2xhc3M9XCJmYSBmYS1jaGVja1wiIHRvb2x0aXA9XCJUb2dnbGUgc2VsZWN0aW9uXCIgKGNsaWNrKT1cInRvZ2dsZUFsbCgpXCIgW2NsYXNzLnNlbGVjdGVkXT1cInNlbGVjdEFsbE9uXCI+PC9hPlxuXHRcdFx0PGEgY2xhc3M9XCJmYSBmYS1yZWZyZXNoXCIgdG9vbHRpcD1cIlRvZ2dsZSBzcGlubmVyXCIgKGNsaWNrKT1cImxvYWRpbmc9IWxvYWRpbmdcIj48L2E+XG5cdFx0PC9kaXY+XG5cblx0XHQ8ZGl2IGNsYXNzPVwic2VwYXJhdG9yXCI+PC9kaXY+XG5cblx0XHQ8IS0tIHRoZSBsaXN0IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJsaXN0XCIgW2NsYXNzLmxvYWRpbmddPVwibG9hZGluZ1wiPlxuXG5cdFx0XHQ8IS0tIHRoZSBsaXN0IGl0ZW0tLT5cblx0XHRcdDxkaXYgY2xhc3M9XCJsaXN0LWl0ZW1cIiAqbmdGb3I9XCIjaXRlbSBvZiBsb2dzXCIgW2NsYXNzLnNlbGVjdGVkLWl0ZW1dPVwiaXRlbS5zZWxlY3RlZFwiIFtjbGFzcy5vcGVuXT1cIml0ZW0ub3BlblwiXG5cdFx0XHQgKGNsaWNrKT1cInRvZ2dsZUN1cnJlbnQoaXRlbSlcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImF2YXRhciBmYVwiIChjbGljayk9XCJ0b2dnbGVTZWxlY3Rpb24oaXRlbSwgJGV2ZW50KVwiPnt7aXRlbS50aXRsZS5zdWJzdHIoMCwgMSkudG9VcHBlckNhc2UoKX19PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImhlYWRpbmctcm93XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaWRcIj57e2l0ZW0uaWR9fTwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImhlYWRpbmdcIj57e2l0ZW0udGl0bGV9fTwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0ZXh0XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInN0YXR1c1wiIFtjbGFzcy5ncmV5LXRleHRdPVwiaXRlbS5zdGF0dXM9PT0nZG9uZSdcIiBbY2xhc3MuZ3JlZW4tdGV4dF09XCJpdGVtLnN0YXR1cz09PSdkb2luZydcIlxuXHRcdFx0XHRcdCBbY2xhc3MueWVsbG93LXRleHRdPVwiaXRlbS5zdGF0dXM9PT0nbmV3J1wiPnt7aXRlbS5zdGF0dXN9fTwvZGl2PlxuXG5cdFx0XHRcdFx0e3tpdGVtLmRlc2NyaXB0aW9ufX08L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJhY3Rpb24tYmFyXCI+XG5cdFx0XHRcdFx0PGEgY2xhc3M9XCJmYSBmYS1lZGl0XCI+PC9hPlxuXHRcdFx0XHRcdDxhIGNsYXNzPVwiZmEgZmEtdHJhc2hcIj48L2E+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+IDwhLS0gZW5kIG9mIGxpc3QgaXRlbSAtLT5cblxuXHRcdFx0PCEtLSBsaXN0IGxvYWRlciAtLT5cblx0XHRcdDxkaXYgY2xhc3M9XCJsaXN0LWl0ZW0gbG9hZGVyXCI+XG5cdFx0XHRcdDxwdy1sb2FkZXI+PC9wdy1sb2FkZXI+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdDwvZGl2PiA8IS0tIGVuZCBvZiBsaXN0IC0tPlxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIFByb2plY3Rsb2dDb21wb25lbnQge1xuXG4gIHByaXZhdGUgbG9nczogQXJyYXk8UHJvamVjdGxvZz47XG4gIHByaXZhdGUgc2VsZWN0QWxsT246IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBjdXJyZW50SXRlbTogUHJvamVjdGxvZztcbiAgcHJpdmF0ZSBsb2FkaW5nOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMubG9ncyA9IFt7XG4gICAgICBpZDogJzAyMzMyJyxcbiAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICAgIHRpdGxlOiAnVXNlciBtdXN0IGJlIGFibGUgdG8gbG9naW4gdG8gc3lzdGVtIGFzIGVuZ2luZWVyJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIG5hdmlnYXRpb24gZHJhd2VyIG9uIHRoZSByaWdodCBpcyBhIGxpdmUgZGVtbyBvZiBhIHRlbXBvcmFyeSBuYXZpZ2F0aW9uIGRyYXdlci4nLFxuICAgICAgc3RhdHVzOiAnbmV3J1xuICAgIH0sIHtcbiAgICAgICAgaWQ6ICcwMjMzMycsXG4gICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICAgICAgdGl0bGU6ICdVc2VyIG11c3QgYmUgYWJsZSB0byBsb2dvdXQgZnJvbSB0aGUgc3lzdGVtJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgbmF2aWdhdGlvbiBkcmF3ZXIgb24gdGhlIHJpZ2h0IGlzIGEgbGl2ZSBkZW1vIG9mIGEgdGVtcG9yYXJ5IG5hdmlnYXRpb24gZHJhd2VyLicgK1xuICAgICAgICAnIFRlbXBvcmFyeSBuYXZpZ2F0aW9uIGRyYXdlcnMgY2FuIHRvZ2dsZSBvcGVuIG9yIGNsb3NlZC4gQ2xvc2VkIGJ5IGRlZmF1bHQsIHRoZSBkcmF3ZXIgb3BlbnMgdGVtcG9yYXJpbHknICtcbiAgICAgICAgJyBhYm92ZSBhbGwgb3RoZXIgY29udGVudCB1bnRpbCBhIHNlY3Rpb24gaXMgc2VsZWN0ZWQuJyArXG4gICAgICAgICcgVGVtcG9yYXJ5IG5hdmlnYXRpb24gZHJhd2VycyBjYW4gdG9nZ2xlIG9wZW4gb3IgY2xvc2VkLiBDbG9zZWQgYnkgZGVmYXVsdCwgdGhlIGRyYXdlciBvcGVucyB0ZW1wb3JhcmlseScgK1xuICAgICAgICAnIGFib3ZlIGFsbCBvdGhlciBjb250ZW50IHVudGlsIGEgc2VjdGlvbiBpcyBzZWxlY3RlZC4nICtcbiAgICAgICAgJyBUZW1wb3JhcnkgbmF2aWdhdGlvbiBkcmF3ZXJzIGNhbiB0b2dnbGUgb3BlbiBvciBjbG9zZWQuIENsb3NlZCBieSBkZWZhdWx0LCB0aGUgZHJhd2VyIG9wZW5zIHRlbXBvcmFyaWx5JyArXG4gICAgICAgICcgYWJvdmUgYWxsIG90aGVyIGNvbnRlbnQgdW50aWwgYSBzZWN0aW9uIGlzIHNlbGVjdGVkLicgK1xuICAgICAgICAnIFRlbXBvcmFyeSBuYXZpZ2F0aW9uIGRyYXdlcnMgY2FuIHRvZ2dsZSBvcGVuIG9yIGNsb3NlZC4gQ2xvc2VkIGJ5IGRlZmF1bHQsIHRoZSBkcmF3ZXIgb3BlbnMgdGVtcG9yYXJpbHknICtcbiAgICAgICAgJyBhYm92ZSBhbGwgb3RoZXIgY29udGVudCB1bnRpbCBhIHNlY3Rpb24gaXMgc2VsZWN0ZWQuJyArXG4gICAgICAgICcgVGVtcG9yYXJ5IG5hdmlnYXRpb24gZHJhd2VycyBjYW4gdG9nZ2xlIG9wZW4gb3IgY2xvc2VkLiBDbG9zZWQgYnkgZGVmYXVsdCwgdGhlIGRyYXdlciBvcGVucyB0ZW1wb3JhcmlseScsXG4gICAgICAgIHN0YXR1czogJ25ldydcbiAgICAgIH0sIHtcbiAgICAgICAgaWQ6ICcwMjMzNCcsXG4gICAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgICAgICB0aXRsZTogJ1VzZXIgbXVzdCBiZSBhYmxlIHRvIHNlZSBsb2dpbiBwYWdlIHdoZW4gdHJ5aW5nIHRvIHJlbG9naW4gYWZ0ZXIgbG9nb3V0JyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgbmF2aWdhdGlvbiBkcmF3ZXIgb24gdGhlIHJpZ2h0IGlzIGEgbGl2ZSBkZW1vIG9mIGEgdGVtcG9yYXJ5IG5hdmlnYXRpb24gZHJhd2VyLicgK1xuICAgICAgICAnIFRlbXBvcmFyeSBuYXZpZ2F0aW9uIGRyYXdlcnMgY2FuIHRvZ2dsZSBvcGVuIG9yIGNsb3NlZC4gQ2xvc2VkIGJ5IGRlZmF1bHQsIHRoZSBkcmF3ZXIgb3BlbnMgdGVtcG9yYXJpbHknICtcbiAgICAgICAgJyBhYm92ZSBhbGwgb3RoZXIgY29udGVudCB1bnRpbCBhIHNlY3Rpb24gaXMgc2VsZWN0ZWQuJyArXG4gICAgICAgICcgVGVtcG9yYXJ5IG5hdmlnYXRpb24gZHJhd2VycyBjYW4gdG9nZ2xlIG9wZW4gb3IgY2xvc2VkLiBDbG9zZWQgYnkgZGVmYXVsdCwgdGhlIGRyYXdlciBvcGVucyB0ZW1wb3JhcmlseScgK1xuICAgICAgICAnIGFib3ZlIGFsbCBvdGhlciBjb250ZW50IHVudGlsIGEgc2VjdGlvbiBpcyBzZWxlY3RlZC4nICtcbiAgICAgICAgJyBUZW1wb3JhcnkgbmF2aWdhdGlvbiBkcmF3ZXJzIGNhbiB0b2dnbGUgb3BlbiBvciBjbG9zZWQuIENsb3NlZCBieSBkZWZhdWx0LCB0aGUgZHJhd2VyIG9wZW5zIHRlbXBvcmFyaWx5JyArXG4gICAgICAgICcgYWJvdmUgYWxsIG90aGVyIGNvbnRlbnQgdW50aWwgYSBzZWN0aW9uIGlzIHNlbGVjdGVkLicgK1xuICAgICAgICAnIFRlbXBvcmFyeSBuYXZpZ2F0aW9uIGRyYXdlcnMgY2FuIHRvZ2dsZSBvcGVuIG9yIGNsb3NlZC4gQ2xvc2VkIGJ5IGRlZmF1bHQsIHRoZSBkcmF3ZXIgb3BlbnMgdGVtcG9yYXJpbHknICtcbiAgICAgICAgJyBhYm92ZSBhbGwgb3RoZXIgY29udGVudCB1bnRpbCBhIHNlY3Rpb24gaXMgc2VsZWN0ZWQuJyArXG4gICAgICAgICcgVGVtcG9yYXJ5IG5hdmlnYXRpb24gZHJhd2VycyBjYW4gdG9nZ2xlIG9wZW4gb3IgY2xvc2VkLiBDbG9zZWQgYnkgZGVmYXVsdCwgdGhlIGRyYXdlciBvcGVucyB0ZW1wb3JhcmlseScgK1xuICAgICAgICAnIGFib3ZlIGFsbCBvdGhlciBjb250ZW50IHVudGlsIGEgc2VjdGlvbiBpcyBzZWxlY3RlZC4nLFxuICAgICAgICBzdGF0dXM6ICdkb25lJ1xuICAgICAgfSwge1xuICAgICAgICBpZDogJzAyMzM0JyxcbiAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgICB0aXRsZTogJ1VzZXIgbXVzdCBiZSBhYmxlIHRvIHNlZSBsb2dpbiBwYWdlIHdoZW4gdHJ5aW5nIHRvIHJlbG9naW4gYWZ0ZXIgbG9nb3V0JyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgbmF2aWdhdGlvbiBkcmF3ZXIgb24gdGhlIHJpZ2h0IGlzIGEgbGl2ZSBkZW1vIG9mIGEgdGVtcG9yYXJ5IG5hdmlnYXRpb24gZHJhd2VyLicgK1xuICAgICAgICAnIFRlbXBvcmFyeSBuYXZpZ2F0aW9uIGRyYXdlcnMgY2FuIHRvZ2dsZSBvcGVuIG9yIGNsb3NlZC4gQ2xvc2VkIGJ5IGRlZmF1bHQsIHRoZSBkcmF3ZXIgb3BlbnMgdGVtcG9yYXJpbHknICtcbiAgICAgICAgJyBUZW1wb3JhcnkgbmF2aWdhdGlvbiBkcmF3ZXJzIGNhbiB0b2dnbGUgb3BlbiBvciBjbG9zZWQuIENsb3NlZCBieSBkZWZhdWx0LCB0aGUgZHJhd2VyIG9wZW5zIHRlbXBvcmFyaWx5JyArXG4gICAgICAgICcgYWJvdmUgYWxsIG90aGVyIGNvbnRlbnQgdW50aWwgYSBzZWN0aW9uIGlzIHNlbGVjdGVkLicgK1xuICAgICAgICAnIFRlbXBvcmFyeSBuYXZpZ2F0aW9uIGRyYXdlcnMgY2FuIHRvZ2dsZSBvcGVuIG9yIGNsb3NlZC4gQ2xvc2VkIGJ5IGRlZmF1bHQsIHRoZSBkcmF3ZXIgb3BlbnMgdGVtcG9yYXJpbHknICtcbiAgICAgICAgJyBhYm92ZSBhbGwgb3RoZXIgY29udGVudCB1bnRpbCBhIHNlY3Rpb24gaXMgc2VsZWN0ZWQuJyArXG4gICAgICAgICcgVGVtcG9yYXJ5IG5hdmlnYXRpb24gZHJhd2VycyBjYW4gdG9nZ2xlIG9wZW4gb3IgY2xvc2VkLiBDbG9zZWQgYnkgZGVmYXVsdCwgdGhlIGRyYXdlciBvcGVucyB0ZW1wb3JhcmlseScgK1xuICAgICAgICAnIGFib3ZlIGFsbCBvdGhlciBjb250ZW50IHVudGlsIGEgc2VjdGlvbiBpcyBzZWxlY3RlZC4nICtcbiAgICAgICAgJyBUZW1wb3JhcnkgbmF2aWdhdGlvbiBkcmF3ZXJzIGNhbiB0b2dnbGUgb3BlbiBvciBjbG9zZWQuIENsb3NlZCBieSBkZWZhdWx0LCB0aGUgZHJhd2VyIG9wZW5zIHRlbXBvcmFyaWx5JyArXG4gICAgICAgICcgYWJvdmUgYWxsIG90aGVyIGNvbnRlbnQgdW50aWwgYSBzZWN0aW9uIGlzIHNlbGVjdGVkLicgK1xuICAgICAgICAnIFRlbXBvcmFyeSBuYXZpZ2F0aW9uIGRyYXdlcnMgY2FuIHRvZ2dsZSBvcGVuIG9yIGNsb3NlZC4gQ2xvc2VkIGJ5IGRlZmF1bHQsIHRoZSBkcmF3ZXIgb3BlbnMgdGVtcG9yYXJpbHknICtcbiAgICAgICAgJyBhYm92ZSBhbGwgb3RoZXIgY29udGVudCB1bnRpbCBhIHNlY3Rpb24gaXMgc2VsZWN0ZWQuJyArXG4gICAgICAgICcgVGVtcG9yYXJ5IG5hdmlnYXRpb24gZHJhd2VycyBjYW4gdG9nZ2xlIG9wZW4gb3IgY2xvc2VkLiBDbG9zZWQgYnkgZGVmYXVsdCwgdGhlIGRyYXdlciBvcGVucyB0ZW1wb3JhcmlseScgK1xuICAgICAgICAnIGFib3ZlIGFsbCBvdGhlciBjb250ZW50IHVudGlsIGEgc2VjdGlvbiBpcyBzZWxlY3RlZC4nICtcbiAgICAgICAgJyBUZW1wb3JhcnkgbmF2aWdhdGlvbiBkcmF3ZXJzIGNhbiB0b2dnbGUgb3BlbiBvciBjbG9zZWQuIENsb3NlZCBieSBkZWZhdWx0LCB0aGUgZHJhd2VyIG9wZW5zIHRlbXBvcmFyaWx5JyArXG4gICAgICAgICcgYWJvdmUgYWxsIG90aGVyIGNvbnRlbnQgdW50aWwgYSBzZWN0aW9uIGlzIHNlbGVjdGVkLicgK1xuICAgICAgICAnIFRlbXBvcmFyeSBuYXZpZ2F0aW9uIGRyYXdlcnMgY2FuIHRvZ2dsZSBvcGVuIG9yIGNsb3NlZC4gQ2xvc2VkIGJ5IGRlZmF1bHQsIHRoZSBkcmF3ZXIgb3BlbnMgdGVtcG9yYXJpbHknICtcbiAgICAgICAgJyBhYm92ZSBhbGwgb3RoZXIgY29udGVudCB1bnRpbCBhIHNlY3Rpb24gaXMgc2VsZWN0ZWQuJyArXG4gICAgICAgICcgVGVtcG9yYXJ5IG5hdmlnYXRpb24gZHJhd2VycyBjYW4gdG9nZ2xlIG9wZW4gb3IgY2xvc2VkLiBDbG9zZWQgYnkgZGVmYXVsdCwgdGhlIGRyYXdlciBvcGVucyB0ZW1wb3JhcmlseScgK1xuICAgICAgICAnIGFib3ZlIGFsbCBvdGhlciBjb250ZW50IHVudGlsIGEgc2VjdGlvbiBpcyBzZWxlY3RlZC4nICtcbiAgICAgICAgJyBUZW1wb3JhcnkgbmF2aWdhdGlvbiBkcmF3ZXJzIGNhbiB0b2dnbGUgb3BlbiBvciBjbG9zZWQuIENsb3NlZCBieSBkZWZhdWx0LCB0aGUgZHJhd2VyIG9wZW5zIHRlbXBvcmFyaWx5JyArXG4gICAgICAgICcgYWJvdmUgYWxsIG90aGVyIGNvbnRlbnQgdW50aWwgYSBzZWN0aW9uIGlzIHNlbGVjdGVkLicgK1xuICAgICAgICAnIFRlbXBvcmFyeSBuYXZpZ2F0aW9uIGRyYXdlcnMgY2FuIHRvZ2dsZSBvcGVuIG9yIGNsb3NlZC4gQ2xvc2VkIGJ5IGRlZmF1bHQsIHRoZSBkcmF3ZXIgb3BlbnMgdGVtcG9yYXJpbHknICtcbiAgICAgICAgJyBhYm92ZSBhbGwgb3RoZXIgY29udGVudCB1bnRpbCBhIHNlY3Rpb24gaXMgc2VsZWN0ZWQuJyxcbiAgICAgICAgc3RhdHVzOiAnZG9uZSdcbiAgICAgIH0sIHtcbiAgICAgICAgaWQ6ICcwMjMzNCcsXG4gICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICAgICAgdGl0bGU6ICdVc2VyIG11c3QgYmUgYWJsZSB0byBzZWUgbG9naW4gcGFnZSB3aGVuIHRyeWluZyB0byByZWxvZ2luIGFmdGVyIGxvZ291dCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIG5hdmlnYXRpb24gZHJhd2VyIG9uIHRoZSByaWdodCBpcyBhIGxpdmUgZGVtbyBvZiBhIHRlbXBvcmFyeSBuYXZpZ2F0aW9uIGRyYXdlci4nICtcbiAgICAgICAgJyBUZW1wb3JhcnkgbmF2aWdhdGlvbiBkcmF3ZXJzIGNhbiB0b2dnbGUgb3BlbiBvciBjbG9zZWQuIENsb3NlZCBieSBkZWZhdWx0LCB0aGUgZHJhd2VyIG9wZW5zIHRlbXBvcmFyaWx5JyArXG4gICAgICAgICcgYWJvdmUgYWxsIG90aGVyIGNvbnRlbnQgdW50aWwgYSBzZWN0aW9uIGlzIHNlbGVjdGVkLicgK1xuICAgICAgICAnIFRlbXBvcmFyeSBuYXZpZ2F0aW9uIGRyYXdlcnMgY2FuIHRvZ2dsZSBvcGVuIG9yIGNsb3NlZC4gQ2xvc2VkIGJ5IGRlZmF1bHQsIHRoZSBkcmF3ZXIgb3BlbnMgdGVtcG9yYXJpbHknICtcbiAgICAgICAgJyBhYm92ZSBhbGwgb3RoZXIgY29udGVudCB1bnRpbCBhIHNlY3Rpb24gaXMgc2VsZWN0ZWQuJyArXG4gICAgICAgICcgVGVtcG9yYXJ5IG5hdmlnYXRpb24gZHJhd2VycyBjYW4gdG9nZ2xlIG9wZW4gb3IgY2xvc2VkLiBDbG9zZWQgYnkgZGVmYXVsdCwgdGhlIGRyYXdlciBvcGVucyB0ZW1wb3JhcmlseScgK1xuICAgICAgICAnIGFib3ZlIGFsbCBvdGhlciBjb250ZW50IHVudGlsIGEgc2VjdGlvbiBpcyBzZWxlY3RlZC4nICtcbiAgICAgICAgJyBUZW1wb3JhcnkgbmF2aWdhdGlvbiBkcmF3ZXJzIGNhbiB0b2dnbGUgb3BlbiBvciBjbG9zZWQuIENsb3NlZCBieSBkZWZhdWx0LCB0aGUgZHJhd2VyIG9wZW5zIHRlbXBvcmFyaWx5JyArXG4gICAgICAgICcgYWJvdmUgYWxsIG90aGVyIGNvbnRlbnQgdW50aWwgYSBzZWN0aW9uIGlzIHNlbGVjdGVkLicgK1xuICAgICAgICAnIFRlbXBvcmFyeSBuYXZpZ2F0aW9uIGRyYXdlcnMgY2FuIHRvZ2dsZSBvcGVuIG9yIGNsb3NlZC4gQ2xvc2VkIGJ5IGRlZmF1bHQsIHRoZSBkcmF3ZXIgb3BlbnMgdGVtcG9yYXJpbHknICtcbiAgICAgICAgJyBhYm92ZSBhbGwgb3RoZXIgY29udGVudCB1bnRpbCBhIHNlY3Rpb24gaXMgc2VsZWN0ZWQuJyArXG4gICAgICAgICcgVGVtcG9yYXJ5IG5hdmlnYXRpb24gZHJhd2VycyBjYW4gdG9nZ2xlIG9wZW4gb3IgY2xvc2VkLiBDbG9zZWQgYnkgZGVmYXVsdCwgdGhlIGRyYXdlciBvcGVucyB0ZW1wb3JhcmlseScgK1xuICAgICAgICAnIGFib3ZlIGFsbCBvdGhlciBjb250ZW50IHVudGlsIGEgc2VjdGlvbiBpcyBzZWxlY3RlZC4nLFxuICAgICAgICBzdGF0dXM6ICdkb2luZydcbiAgICAgIH0sIHtcbiAgICAgICAgaWQ6ICcwMjMzNCcsXG4gICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICAgICAgdGl0bGU6ICdBIHVzZXIgbXVzdCBiZSBhYmxlIHRvIHNlZSBsb2dpbiBwYWdlIHdoZW4gdHJ5aW5nIHRvIHJlbG9naW4gYWZ0ZXIgbG9nb3V0JyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgbmF2aWdhdGlvbiBkcmF3ZXIgb24gdGhlIHJpZ2h0IGlzIGEgbGl2ZSBkZW1vIG9mIGEgdGVtcG9yYXJ5IG5hdmlnYXRpb24gZHJhd2VyLicgK1xuICAgICAgICAnIFRlbXBvcmFyeSBuYXZpZ2F0aW9uIGRyYXdlcnMgY2FuIHRvZ2dsZSBvcGVuIG9yIGNsb3NlZC4gQ2xvc2VkIGJ5IGRlZmF1bHQsIHRoZSBkcmF3ZXIgb3BlbnMgdGVtcG9yYXJpbHknICtcbiAgICAgICAgJyBhYm92ZSBhbGwgb3RoZXIgY29udGVudCB1bnRpbCBhIHNlY3Rpb24gaXMgc2VsZWN0ZWQuJyArXG4gICAgICAgICcgVGVtcG9yYXJ5IG5hdmlnYXRpb24gZHJhd2VycyBjYW4gdG9nZ2xlIG9wZW4gb3IgY2xvc2VkLiBDbG9zZWQgYnkgZGVmYXVsdCwgdGhlIGRyYXdlciBvcGVucyB0ZW1wb3JhcmlseScgK1xuICAgICAgICAnIGFib3ZlIGFsbCBvdGhlciBjb250ZW50IHVudGlsIGEgc2VjdGlvbiBpcyBzZWxlY3RlZC4nICtcbiAgICAgICAgJyBUZW1wb3JhcnkgbmF2aWdhdGlvbiBkcmF3ZXJzIGNhbiB0b2dnbGUgb3BlbiBvciBjbG9zZWQuIENsb3NlZCBieSBkZWZhdWx0LCB0aGUgZHJhd2VyIG9wZW5zIHRlbXBvcmFyaWx5JyArXG4gICAgICAgICcgYWJvdmUgYWxsIG90aGVyIGNvbnRlbnQgdW50aWwgYSBzZWN0aW9uIGlzIHNlbGVjdGVkLicgK1xuICAgICAgICAnIFRlbXBvcmFyeSBuYXZpZ2F0aW9uIGRyYXdlcnMgY2FuIHRvZ2dsZSBvcGVuIG9yIGNsb3NlZC4gQ2xvc2VkIGJ5IGRlZmF1bHQsIHRoZSBkcmF3ZXIgb3BlbnMgdGVtcG9yYXJpbHknICtcbiAgICAgICAgJyBhYm92ZSBhbGwgb3RoZXIgY29udGVudCB1bnRpbCBhIHNlY3Rpb24gaXMgc2VsZWN0ZWQuJyxcbiAgICAgICAgc3RhdHVzOiAnZG9pbmcnXG4gICAgICB9XTtcbiAgfVxuXG4gIHRvZ2dsZUFsbCgpIHtcbiAgICB0aGlzLnNlbGVjdEFsbE9uID0gIXRoaXMuc2VsZWN0QWxsT247XG4gICAgZm9yICh2YXIgaXRlbSBvZiB0aGlzLmxvZ3MpIHtcbiAgICAgIGl0ZW0uc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdEFsbE9uO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVNlbGVjdGlvbihpdGVtOiBQcm9qZWN0bG9nLCBldmVudDogYW55KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaXRlbS5zZWxlY3RlZCA9ICFpdGVtLnNlbGVjdGVkO1xuICAgIHRoaXMudXBkYXRlU2VsZWN0QWxsVG9nZ2xlKCk7XG4gIH1cblxuICB0b2dnbGVDdXJyZW50KGN1cnJlbnQ6IFByb2plY3Rsb2cpIHtcbiAgICBjdXJyZW50Lm9wZW4gPSAhY3VycmVudC5vcGVuO1xuICAgIGlmICh0aGlzLmN1cnJlbnRJdGVtICYmIGN1cnJlbnQgIT09IHRoaXMuY3VycmVudEl0ZW0pIHtcbiAgICAgIHRoaXMuY3VycmVudEl0ZW0ub3BlbiA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuY3VycmVudEl0ZW0gPSBjdXJyZW50O1xuICAgIHRoaXMudXBkYXRlU2VsZWN0QWxsVG9nZ2xlKCk7XG4gIH1cblxuICB1cGRhdGVTZWxlY3RBbGxUb2dnbGUoKSB7XG4gICAgZm9yICh2YXIgaXRlbSBvZiB0aGlzLmxvZ3MpIHtcbiAgICAgIGlmIChpdGVtLnNlbGVjdGVkID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLnNlbGVjdEFsbE9uID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdEFsbE9uID0gdHJ1ZTtcbiAgfVxuXG4gIGRlbGV0ZVNlbGVjdGVkKCkge1xuICAgIHRoaXMubG9ncyA9IHRoaXMubG9ncy5maWx0ZXIoKGl0ZW06IFByb2plY3Rsb2cpID0+IHsgcmV0dXJuIGl0ZW0uc2VsZWN0ZWQgPT09IGZhbHNlOyB9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvVXNlcnMvcmludG9qL0RhdGEvUHJvamVjdHMvV2ViL3BhdGh3YXkvc3JjL3NjcmlwdHMifQ==
