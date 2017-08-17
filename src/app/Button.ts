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

@Component({
  selector: 'x-button',
  providers: [{ provide: Base, useExisting: forwardRef(() => Button) }],
  ...Base.componentProps
})
export default class Button extends Base {
  	constructor(eRef:ElementRef, resolver:ComponentFactoryResolver, vcRef:ViewContainerRef) {
        super(eRef, resolver, vcRef);
    }
}
