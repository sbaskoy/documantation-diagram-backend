# IFilterModel

**Description**: Kullanıcı filtresinin tutulduğu modeldir. Secilen tablo sütunu ve ilgili bilgileri tutar.

```ts
export interface IFilterModel {
  id: string;
  column?: IColumn;
  filterType: EFilterType;
  value: any;
  connect: EConnectType;
  color?: string;
}
```

[IColumn](#/interfaces_IColumn.md)

[EFilterType](#/enum_EFilterType.md)

[EConnectType](#/enum_EConnectType.md)
