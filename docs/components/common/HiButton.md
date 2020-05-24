# 组件

这里将介绍各个组件的具体用法。

## HiButton 按钮

常用的操作按钮。

### 基础用法

基础的按钮用法。

```demo
<template>
  <div style="flex: 1; padding: 25px 35px;">
    <hi-button text="关注" type="primary"></hi-button><br>
  </div>
</template>
<script>
  module.exports = {
    data() {
      return {};
    }
  }
</script>
```

<!-- <img src="../img/button1.jpeg" style="width:400px;">Button 组件</HiButton> -->

* 示例代码

```html
<HiButton type="primary">Button 组件</HiButton>
<HiButton type="regular">Button 组件</HiButton>
<HiButton type="info">Button 组件</HiButton>
<HiButton>Button 组件</HiButton>

```


### 禁用状态

按钮不可用状态。

<!-- <img src="../img/button2.jpeg" style="width:400px;">Button 组件</HiButton> -->

* 示例代码

```html
<HiButton :disable="true" type="primary">Button 组件</HiButton>
<HiButton type="regular" :disable="true">Button 组件</HiButton>
<HiButton type="info" :disable="true">Button 组件</HiButton>
```



### 按钮尺寸

按钮不可用状态。

<!-- <img src="../img/button3.jpeg" style="width:400px;">Button 组件</HiButton> -->

* 示例代码

```html
<HiButton size="s" type="primary">Button 组件</HiButton>
<HiButton size="m" type="primary">Button 组件</HiButton>
<HiButton size="l" type="primary">Button 组件</HiButton>
<HiButton size="xl" type="primary">Button 组件</HiButton>
```

## 属性


| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   s / m / l / xl            |    m     |
| type     | 类型   | string    |   default / primary / regular / info  |     default    |
| disable  | 是否禁用状态    | boolean   | —   | false   |
| onTouchablePress | 点击 |



