import { 
    Component, 
    Input, 
    SimpleChanges, 
    forwardRef, 
    ViewChildren, 
    QueryList, 
    ContentChildren, 
    ViewChild, 
    ComponentFactoryResolver,
    ViewContainerRef,
    ElementRef,
    OnInit
} from '@angular/core';

export default class Base implements OnInit {

    static componentProps = {
        template: `
            <ng-template #dynamic></ng-template>
        `
    }

    @ViewChild('dynamic') dynamic;

	constructor(
		private myElement: ElementRef, 
		private componentFactoryResolver: ComponentFactoryResolver, 
		private viewContainerRef: ViewContainerRef, 
    ) {
    }

    ngOnChanges(changes: SimpleChanges) {
        // debugger;
    }

    ngAfterViewInit() {
        // console.log('children', this.children);
    }

    ngOnInit() {
        console.log(this.constructor.name, this.dynamic);
        let cmp = document.createElement('div');
        cmp.innerHTML = this.constructor.name;
        this.componentFactoryResolver.resolveComponentFactory
        // this.myElement.nativeElement.appendChild(cmp);
    }

}
