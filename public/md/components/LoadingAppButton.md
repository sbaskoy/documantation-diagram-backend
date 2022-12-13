## Loading App Button

`buttonText` required props

`buttonClick` must be `async` method

> Verilen `async` method tamamlana kadar **loading** icon gösterir

```ts
interface Props {
  buttonClick: (payload?: MouseEvent) => Promise<void>;
  buttonText: string;
  buttonCss?: string;
}
```

### Default values

```ts
const props = withDefaults(defineProps<Props>(), {
  buttonClick: async () => {},
  buttonCss: "",
});
```

### Example

```ts
<template>
    <LoadingAppButton buttonText='Click' :buttonClick="click" />

</template>
<script lang="ts" setup>

const click=async()=>{
    console.log("Clicked");
}
</script>
```
