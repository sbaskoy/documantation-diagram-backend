# Time Tracker Type

```ts
export type TimeTrackerType = {
  times?: CustomTime[];
  currentProcess?: TimeProcess;
  currentTime?: TimeObject;
  timer?: any;
  timerName?: any;
  lastId?: string;
};
```

# [Custom Time Type](#customtime)


## CustomTime

```ts
export type CustomTime = {
  id?: string;
  lastId: string;
  rowId?: string;
  colId?: string;
  process: TimeProcess;
  user: {
    id?: string;
    fullName?: string;
    name?: string;
    lastName?: string;
    photo?: string;
  };
  time?: TimeObject;
  processTime: string;
};
```
