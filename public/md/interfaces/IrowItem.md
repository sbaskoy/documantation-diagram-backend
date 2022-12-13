### IRowItem


 **Description** : Tablonun her bir cell sınıfı. **ColumnType** değerine değerler değişir




```ts
export interface IRowItem {
  id: string; // required
  type: ColumnType;
  statusItem?: IStatusItem;
  text?: string;
  show: boolean;
  color?: string;
  users?: Array<User>;
  files?: IUploadedFile[];
  dates?: string[];
  timeTracker?: {
    [id: string]: TimeTrackerType;
  };
  column_id?: string;
  table_col_id?: string;
  column_related_id?: string;
  column_related_table_id?: string;
  column_project_id?: string;
  column_task_id?: string;
  subTableCount?: string | undefined;
  order?: number;
  editable?: string;
  formula?: string;
  comboData?: any;
  scores?: IScoreModel[];
  tags?: ITag[];
  viewable: boolean;
  project_name?: string;
  selfStatusItems?: IStatusItem[];
  connectedTasks?: IConnectedTask[];
  doneDate?: string;
}
```

[ColumnType](#/enums_ColumnType.md)

[IStatusItem](#/interfaces_IStatusItem.md)

**Description** : `type==ColumnType.status` ise bu alan, hücrenin değeri bu alandan kontrol edilir. Eger bir durum seçilmemişse bu alan [`Constants.emptyStatusItem`](#/constants_constants.md) olacaktır. Eğer yönetici *yönetici panelinden* sabit durum atadıysa `Constants` değerler `StatusModule` içerisinde `api`'den gelen değerler ile değiştirir.






[User](#/types_User.md)

[IUploadedFile](#/interfaces_IUploadedFile.md)

[TimeTrackerType](#/types_TimeTrackerType.md)


