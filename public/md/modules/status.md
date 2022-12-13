# Status Module

**Description**: Uygulamadaki **durumlar** ve kullanıcı **WorkingMode** değerleri burada yönetilir.

```ts
    private _emptyStatusItem: IStatusItem = constants.emptyStatusItem;
    private _noStatusItem: IStatusItem = constants.noStatusItem;
    private _doneStatusItem: IStatusItem = constants.doneStatusItem;
    private _waitingStatusItem: IStatusItem = constants.waitingStatusItem;
    private _workingOnStatusItem: IStatusItem = constants.workingOnStatusItem;

    private _statusItems: IStatusItem[] = [
        this._waitingStatusItem,
        this._workingOnStatusItem,
        this._doneStatusItem,
        this._emptyStatusItem,
    ]
    private _workingModes: WorkingMode[] = []

```

[WorkingMode](#/interfaces/WorkingMode.md)

## İlgili Metotlar

`deleteStatusItem(item: IStatusItem) => boolean` verilen [IStatusItem](#/interfaces_IStatusItem.md) siler. İşlem başarılıysa `true` döndürür.

`deleteWorkingMode(workingMode: WorkingMode) => boolean` verilen [WorkingMode](#/interfaces_WorkingMode.md) siler. İşlem başarılıysa `true` döndürür.

` async getItems() => void` Uygulama ilk başladığı anda [crudUsersParams](#/services_api.md/#crudUsersParams) metodundan kullanıcı değerleri alır. Ver module içerisinde ilgili yerlere `set` eder

İlgili 

[UserFilterModule](#/modules_UserFilterModule.md)
