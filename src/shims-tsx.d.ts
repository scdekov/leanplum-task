import Vue, { VNode } from 'vue'

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }

    // tslint:disable-next-line:interface-over-type-literal
    type LibraryManagedAttributes<C, P> = {
      [name: string]: any;
    };
  }
}
