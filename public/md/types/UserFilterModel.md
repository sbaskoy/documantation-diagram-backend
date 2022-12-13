# UserFilterModel

```ts
export type UserFilterModel = {
  workFlowId: string;
  projectId?: string;
  selectedId?: string;
  workFLowFilters?: WorkFlowFilter[];
};
```

# WorkFlowFilter

```ts
export type WorkFlowFilter = {
  id: string;
  name?: string;
  filters?: IFilterModel[];
  colorFilters?: IFilterModel[];
  searchText: string;
  userFilter?: IFilterModel[];
  order?: OrderModel;
  rowHeight?: number;
};
```

[IFilterModel](#/interfaces_IFilterModel.md)

[IFilterModel](#/interfaces_IFilterModel.md)
