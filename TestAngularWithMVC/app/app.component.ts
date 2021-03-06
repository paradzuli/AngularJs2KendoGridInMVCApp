import { Component } from '@angular/core';
import {products} from './products';

@Component({
    selector: 'my-app',
    template:`
            <kendo-grid [data]="gridData" [height]="370">
            <kendo-grid-column field="ProductID" title="ID" width="40"></kendo-grid-column>
            <kendo-grid-column field="ProductName" title="Name" width="250"></kendo-grid-column>
            <kendo-grid-column field="Category.CategoryName" title="Category"></kendo-grid-column>
            <kendo-grid-column field="UnitPrice" title="Price" width="80"></kendo-grid-column>
            <kendo-grid-column field="UnitsInStock" title="In stock" width="80"></kendo-grid-column>
            <kendo-grid-column field="Discontinued" title="Discontinued" width="120">
                <template kendoGridCellTemplate let-dataItem>
                    <input type="checkbox" [checked]="dataItem.Discontinued" disabled />
                </template>
            </kendo-grid-column>
            </kendo-grid>
            `,
})
export class AppComponent  {
    name = 'Angular';
    private gridData: any[] = products;
}
