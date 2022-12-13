## General app button

```ts
interface ButtonProps {
  buttonText: string;
  buttonClass?: string;
  showHover?: boolean;
}
```

> `buttonText`: Butonda yazmasını istediğimiz text

> `buttonClass`:Butonun class isimleri. **optional** > `showHover`: true gönderirse mouse üzerine gelince `button-without-border-active-theme` class'ını ekler

### Default values

```ts
withDefaults(defineProps<ButtonProps>(), {
  buttonClass: "app-button",
});
```

### Slots

```vue
<slot name="left"></slot>
{{ text }}
<slot name="right"></slot>
```

### Example

```html
<GeneralAppButton
  buttonText="Example Button"
  @click="()=>{console.log('clicked')}"
>
  <template #left>
    <i class="example-icon"></i>
  </template>
  <template #right>
    <i class="example-icon"></i>
  </template>
</GeneralAppButton>
```
