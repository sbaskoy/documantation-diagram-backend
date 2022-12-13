# Working Mode

**Description**: Kullanıcının mevcut çalışma durumu. **Yönetici** durumları güncelleyebilir. Uygulama başlatıldığı zaman [StatusModule](#/module_status.md) modülünde değerler set edilir.

```ts
export interface WorkingMode {
  id: string;
  icon: string;
  text: string;
}
```
