# EFilterType

**Description**:  Secilen filtrenin karşılaştırma operatörü. Her birine göre işlemler değişir.

```ts
export enum EFilterType {
  is = "Eşittir",
  isNot = "Eşit değil",
  contains = "İçerir",
  noContains = "İçermez",
  startLike = "İle başlar",
  endLike = "İle biter",
  assigned = "Atanmış",
  noAssigned = "Atanmamış",
  between = "Arasında",
  noBetween = "Arasında değil",
  after = "Sonrasında",
  before = "Öncesinde",
  empty = "Boş",
  noEmpty = "Boş değil",
  only = "Sadece",
  uploaded = "Yüklendi",
  noUpload = "Yüklenmedi",
  isBig = "Büyüktür",
  isSmall = "Küçüktür",
  today = "Bugün",
  yesterday = "Dün",
  tomorrow = "Yarın",

  all = "All",
}
```
