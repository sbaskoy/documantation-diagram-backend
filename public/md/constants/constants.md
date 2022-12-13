# Constants

```ts

class Constants {
  noStatusItem = {
    id: "5",
    type: StatusItemType.noStatusColumn,
    color: "#FA2FB5",
    text: "Durumsuz",
    selected: false,
  };
  emptyStatusItem = {
    id: "4",
    type: StatusItemType.empty,
    color: "#6b7280",
    text: "Boş",
    selected: false,
  };
  doneStatusItem = {
    id: "3",
    type: StatusItemType.done,
    color: "#22c55e",
    text: "Tamamlanmış",
    selected: false,
  };
  waitingStatusItem = {
    id: "1",
    type: StatusItemType.waiting,
    color: "#ef4444",
    text: "Takılmış",
    selected: false,
  };
  workingOnStatusItem = {
    id: "2",
    type: StatusItemType.workingOn,
    color: "#eab308",
    text: "Üzerinde çalışılıyor",
    selected: false,
  };
  statusItems = [
    this.waitingStatusItem,
    this.workingOnStatusItem,
    this.doneStatusItem,
    this.emptyStatusItem,
  ];
  allColumnTypes: Array<IColumn> = [
    {
      id: "1",
      type: ColumnType.status,
      text: "Durum",
      statusItem: [...this.statusItems],
      show: true,
      editors: { users: [], teams: [] },
      viewers: { users: [], teams: [] },
      viewable: true,
    },
    {
      id: "2",
      type: ColumnType.text,
      text: "Metin",
      show: true,
      editors: { users: [], teams: [] },
      viewers: { users: [], teams: [] },
      viewable: true,
    },
    {
      id: "3",
      type: ColumnType.uuid,
      text: "UUID",
      show: true,
      editors: { users: [], teams: [] },
      viewers: { users: [], teams: [] },
      viewable: true,
    },

    {
      id: "4",
      type: ColumnType.number,
      text: "Sayı",
      show: true,
      editors: { users: [], teams: [] },
      viewers: { users: [], teams: [] },
      viewable: true,
    },
    {
      id: "5",
      type: ColumnType.date,
      text: "Tarih",
      show: true,
      editors: { users: [], teams: [] },
      viewers: { users: [], teams: [] },
      viewable: true,
    },
    {
      id: "6",
      type: ColumnType.dateRange,
      text: "Tarih Aralıgı",
      show: true,
      editors: { users: [], teams: [] },
      viewers: { users: [], teams: [] },
      viewable: true,
    },
    {
      id: "7",
      type: ColumnType.percent,
      text: "Yüzde",
      show: true,
      unit: "%",
      editors: { users: [], teams: [] },
      viewers: { users: [], teams: [] },
      viewable: true,
    },
    {
      id: "8",
      type: ColumnType.percent,
      text: "Para",
      show: true,
      unit: "tl",
      editors: { users: [], teams: [] },
      viewers: { users: [], teams: [] },
      viewable: true,
    },
    {
      id: "9",
      type: ColumnType.user,
      text: "Kişi",
      show: true,
      editors: { users: [], teams: [] },
      viewers: { users: [], teams: [] },
      viewable: true,
    },
    {
      id: "10",
      type: ColumnType.timeFollow,
      text: "Zaman Takibi",
      show: true,
      editors: { users: [], teams: [] },
      viewers: { users: [], teams: [] },
      viewable: true,
    },
    {
      id: "11",
      type: ColumnType.file,
      text: "Dosya",
      show: true,
      editors: { users: [], teams: [] },
      viewers: { users: [], teams: [] },
      viewable: true,
    },
    {
      id: "12",
      type: ColumnType.formula,
      text: "Formül",
      show: true,
      editors: { users: [], teams: [] },
      viewers: { users: [], teams: [] },
      viewable: true,
    },
    {
      id: "13",
      type: ColumnType.progress,
      text: "Progress",
      show: true,
      editors: { users: [], teams: [] },
      viewers: { users: [], teams: [] },
      viewable: true,
    },
    {
      id: "14",
      type: ColumnType.timeInput,
      text: "Süre",
      show: true,
      editors: { users: [], teams: [] },
      viewers: { users: [], teams: [] },
      viewable: true,
    },
    {
      id: "15",
      type: ColumnType.comboBox,
      text: "Veri seti",
      show: true,
      editors: { users: [], teams: [] },
      viewers: { users: [], teams: [] },
      viewable: true,
    },
    {
      id: "16",
      type: ColumnType.tag,
      text: "Etiketler",
      show: true,
      editors: { users: [], teams: [] },
      viewers: { users: [], teams: [] },
      viewable: true,
    },
    {
      id: "17",
      type: ColumnType.rate,
      text: "Rating",
      show: true,
      editors: { users: [], teams: [] },
      viewers: { users: [], teams: [] },
      viewable: true,
    },
    {
      id: "18",
      type: ColumnType.score,
      text: "Skor",
      show: true,
      editors: { users: [], teams: [] },
      viewers: { users: [], teams: [] },
      viewable: true,
    },
    {
      id: "19",
      type: ColumnType.createdDate,
      text: "Ol. Tarihi",
      show: true,
      editors: { users: [], teams: [] },
      viewers: { users: [], teams: [] },
      viewable: true,
    },
    {
      id: "20",
      type: ColumnType.connectedBoard,
      text: "Connect",
      show: true,
      editors: { users: [], teams: [] },
      viewers: { users: [], teams: [] },
      viewable: true,
    },
    {
      id: "21",
      type: ColumnType.createdUser,
      text: "Oluşturan",
      show: true,
      editors: { users: [], teams: [] },
      viewers: { users: [], teams: [] },
      viewable: true,
    },
    {
      id: "22",
      type: ColumnType.location,
      text: "Konum",
      show: true,
      editors: { users: [], teams: [] },
      viewers: { users: [], teams: [] },
      viewable: true,
    },
  ];

  defaultWeekOfDays = weekDays.map((i) => {
    return {
      text: i.day,
      isStartDay: i.index == 1,
      index: i.index,
      longText: i.day,
      workingHours: [
        {
          id: "1",
          start: "08:00",
          end: "13:00",
        },
        {
          id: "2",
          start: "14:00",
          end: "16:00",
        },
      ],
    };
  });
}
export default new Constants();

export const showedColorCount = 30;
```
