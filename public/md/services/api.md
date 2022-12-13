# Services

## crudUsersParams

**Description**: Kullanıcılar ile ilgili parametreleri alır.



```ts
export const crudUsersParams = async (data: {
  userID?: string;
  parameter?: string;
  value?: string;
  list?: string;
  company?: string;
}) => {
  removeUndefined(data);
  const auth = getModule(AuthModule, store);
  var response = await http_client.addRequest("/crudUserParams", {
    token: auth.getToken,
    ...data,
  });
  return response;
};
```
