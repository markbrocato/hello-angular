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
    ElementRef
} from '@angular/core';

import Base from './Base';
import Button from './Button';

@Component({
    selector: 'x-toolbar',
    providers: [{ provide: Base, useExisting: forwardRef(() => ToolBar) }],
    ...Base.componentProps
})
export default class ToolBar extends Base {
    @ContentChildren(Base, { read: Base }) children: QueryList<Base>;

	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
        super(eRef, resolver, vcRef);
    }

    ngAfterContentInit() {
        console.log('children', this.children);
    }
}