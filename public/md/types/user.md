# User

```ts
export type User = {
  id: string;
  name: string;
  lastName?: string;
  userPhoto?: string;
  fullName?: string;
  type: UserType;
  isMe: boolean;
  workingMode?: WorkingMode;
  title?: string;
  phone?: string;
  location?: string;
  birthday?: string;
  working_start_date?: string;
  email?: string;
  teams?: IUserTeam[];
  last_activity?: string;
  invited?: {
    last_name?: string;
    name?: string;
    userPhoto?: string;
  };
};
```

[WorkingMode](#/interfaces_WorkingMode.md)

[IUserTeam](#/interfaces_IUserTeam.md)

[UserType](#/enums_UserType.md)
