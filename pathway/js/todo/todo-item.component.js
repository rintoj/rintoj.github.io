System.register(['angular2/common', 'angular2/core', '../shared/pipes/truncate.pipe'], function(exports_1) {
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
    var common_1, core_1, truncate_pipe_1;
    var TodoItemComponent;
    return {
        setters:[
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (truncate_pipe_1_1) {
                truncate_pipe_1 = truncate_pipe_1_1;
            }],
        execute: function() {
            TodoItemComponent = (function () {
                function TodoItemComponent() {
                    this.editing = false;
                    this.deleteEmitter = new core_1.EventEmitter();
                    this.updateEmitter = new core_1.EventEmitter();
                }
                TodoItemComponent.prototype.delete = function (todo) {
                    this.deleteEmitter.emit(todo);
                };
                TodoItemComponent.prototype.update = function (todo) {
                    this.updateEmitter.emit(todo);
                };
                TodoItemComponent.prototype.submit = function (todo) {
                    this.update(todo);
                    this.toggleEditState();
                };
                TodoItemComponent.prototype.toggleEditState = function () {
                    this.editing = !this.editing;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TodoItemComponent.prototype, "todo", void 0);
                __decorate([
                    core_1.Output('delete'), 
                    __metadata('design:type', core_1.EventEmitter)
                ], TodoItemComponent.prototype, "deleteEmitter", void 0);
                __decorate([
                    core_1.Output('update'), 
                    __metadata('design:type', core_1.EventEmitter)
                ], TodoItemComponent.prototype, "updateEmitter", void 0);
                TodoItemComponent = __decorate([
                    core_1.Component({
                        selector: 'todo-item'
                    }),
                    core_1.View({
                        directives: [common_1.NgIf],
                        pipes: [truncate_pipe_1.TruncatePipe],
                        template: "\n\t\t<div class=\"row todo-item\" [ngClass]=\"{ completed: todo.completed }\">\n\t\t\t<div class=\"col-xs-1\">\n\t\t\t\t<input type=\"checkbox\" class=\"filled-in\" [(ngModel)]=\"todo.completed\" (click)=\"update(todo)\">\n\t\t\t</div>\n\n\t\t\t<div class=\"col-xs-8\">\n\t\t\t\t<span class=\"todo-item-text\" *ngIf=\"!editing\" (click)=\"toggleEditState()\">\n\t\t\t\t\t{{ todo.title | truncate:30:'...' }}\n\t\t\t\t</span>\n\n\t\t\t\t<form *ngIf=\"editing\" (ngSubmit)=\"submit(todo)\">\n\t\t\t\t\t<input type=\"text\" class=\"todo-item-input\" [(ngModel)]=\"todo.title\">\n\t\t\t\t</form>\n\t\t\t</div>\n\n\t\t\t<div class=\"col-xs-3\">\n\t\t\t\t<button class=\"btn btn-default waves-effect waves-light\" (click)=\"delete(todo)\">Delete</button>\n\t\t\t</div>\n\t\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoItemComponent);
                return TodoItemComponent;
            })();
            exports_1("TodoItemComponent", TodoItemComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG8vdG9kby1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBa0NBO2dCQUFBO29CQUNTLFlBQU8sR0FBWSxLQUFLLENBQUM7b0JBR2Ysa0JBQWEsR0FBd0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7b0JBQ3hELGtCQUFhLEdBQXdCLElBQUksbUJBQVksRUFBRSxDQUFDO2dCQWtCM0UsQ0FBQztnQkFoQkEsa0NBQU0sR0FBTixVQUFPLElBQVc7b0JBQ2pCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMvQixDQUFDO2dCQUVELGtDQUFNLEdBQU4sVUFBTyxJQUFXO29CQUNqQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDL0IsQ0FBQztnQkFFRCxrQ0FBTSxHQUFOLFVBQU8sSUFBVztvQkFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUN4QixDQUFDO2dCQUVELDJDQUFlLEdBQWY7b0JBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQzlCLENBQUM7Z0JBbkJEO29CQUFDLFlBQUssRUFBRTs7K0RBQUE7Z0JBQ1I7b0JBQUMsYUFBTSxDQUFDLFFBQVEsQ0FBQzs7d0VBQUE7Z0JBQ2pCO29CQUFDLGFBQU0sQ0FBQyxRQUFRLENBQUM7O3dFQUFBO2dCQWpDbEI7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsV0FBVztxQkFDckIsQ0FBQztvQkFDRCxXQUFJLENBQUM7d0JBQ0wsVUFBVSxFQUFFLENBQUMsYUFBSSxDQUFDO3dCQUNsQixLQUFLLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO3dCQUNyQixRQUFRLEVBQUUsNndCQW9CVDtxQkFDRCxDQUFDOztxQ0FBQTtnQkF3QkYsd0JBQUM7WUFBRCxDQXZCQSxBQXVCQyxJQUFBO1lBdkJELGlEQXVCQyxDQUFBIiwiZmlsZSI6InRvZG8vdG9kby1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdJZn0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7Q29tcG9uZW50LCBWaWV3LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5pbXBvcnQge0lUb2RvfSBmcm9tICcuL3RvZG8uaW50ZXJmYWNlJztcbmltcG9ydCB7VHJ1bmNhdGVQaXBlfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvdHJ1bmNhdGUucGlwZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3RvZG8taXRlbSdcbn0pXG5AVmlldyh7XG5cdGRpcmVjdGl2ZXM6IFtOZ0lmXSxcblx0cGlwZXM6IFtUcnVuY2F0ZVBpcGVdLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgY2xhc3M9XCJyb3cgdG9kby1pdGVtXCIgW25nQ2xhc3NdPVwieyBjb21wbGV0ZWQ6IHRvZG8uY29tcGxldGVkIH1cIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb2wteHMtMVwiPlxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJmaWxsZWQtaW5cIiBbKG5nTW9kZWwpXT1cInRvZG8uY29tcGxldGVkXCIgKGNsaWNrKT1cInVwZGF0ZSh0b2RvKVwiPlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb2wteHMtOFwiPlxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cInRvZG8taXRlbS10ZXh0XCIgKm5nSWY9XCIhZWRpdGluZ1wiIChjbGljayk9XCJ0b2dnbGVFZGl0U3RhdGUoKVwiPlxuXHRcdFx0XHRcdHt7IHRvZG8udGl0bGUgfCB0cnVuY2F0ZTozMDonLi4uJyB9fVxuXHRcdFx0XHQ8L3NwYW4+XG5cblx0XHRcdFx0PGZvcm0gKm5nSWY9XCJlZGl0aW5nXCIgKG5nU3VibWl0KT1cInN1Ym1pdCh0b2RvKVwiPlxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwidG9kby1pdGVtLWlucHV0XCIgWyhuZ01vZGVsKV09XCJ0b2RvLnRpdGxlXCI+XG5cdFx0XHRcdDwvZm9ybT5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLXhzLTNcIj5cblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCB3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHRcIiAoY2xpY2spPVwiZGVsZXRlKHRvZG8pXCI+RGVsZXRlPC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0YFxufSlcbmV4cG9ydCBjbGFzcyBUb2RvSXRlbUNvbXBvbmVudCB7XG5cdHByaXZhdGUgZWRpdGluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdEBJbnB1dCgpIHRvZG86IElUb2RvO1xuXHRAT3V0cHV0KCdkZWxldGUnKSBkZWxldGVFbWl0dGVyOiBFdmVudEVtaXR0ZXI8SVRvZG8+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCd1cGRhdGUnKSB1cGRhdGVFbWl0dGVyOiBFdmVudEVtaXR0ZXI8SVRvZG8+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdGRlbGV0ZSh0b2RvOiBJVG9kbyk6IHZvaWQge1xuXHRcdHRoaXMuZGVsZXRlRW1pdHRlci5lbWl0KHRvZG8pO1xuXHR9XG5cblx0dXBkYXRlKHRvZG86IElUb2RvKTogdm9pZCB7XG5cdFx0dGhpcy51cGRhdGVFbWl0dGVyLmVtaXQodG9kbyk7XG5cdH1cblxuXHRzdWJtaXQodG9kbzogSVRvZG8pOiB2b2lkIHtcblx0XHR0aGlzLnVwZGF0ZSh0b2RvKTtcblx0XHR0aGlzLnRvZ2dsZUVkaXRTdGF0ZSgpO1xuXHR9XG5cblx0dG9nZ2xlRWRpdFN0YXRlKCk6IHZvaWQge1xuXHRcdHRoaXMuZWRpdGluZyA9ICF0aGlzLmVkaXRpbmc7XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL1VzZXJzL3JpbnRvai9EYXRhL1Byb2plY3RzL1dlYi9wYXRod2F5L3NyYy9zY3JpcHRzIn0=
