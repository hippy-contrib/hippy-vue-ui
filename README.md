

# hippy Vue UI 库

## 通用组件

* HiButton 按钮
* HiText 文本
* HiTag 标签
* HiImage 图片
* HiNavigator 导航
* HiSplitLine 分割线
* HiListItem 列表项
* HiTabs 标签页
* HiActionSheet 分享面板
* HiRedDot 小红点
* HiCheckbox 多选框

## 引入



```js
<script>
import Vue from "vue";
import { HiText } from "hippy-vue-ui";

export default {
  name: "HiTextDemo",
  components: {
    HiText
  }
};
</script>
```

##  `scripts` 字段说明

- `doc`: 浏览本地文档 Server
- `dev`: 调试

## 如何使用

### HiText

```js
// template中使用
<HiText type="SmallRegularBrand">HiText 组件</HiText>
<HiText type="SmallRegularSecondary">HiText 组件</HiText>
<HiText type="SmallRegularBrand">HiText 组件</HiText>
<HiText type="SmallBoldPrimary">HiText 组件</HiText>
<HiText type="SmallBoldSecondary">HiText 组件</HiText>
<HiText type="SmallBoldBrand">HiText 组件</HiText>
```

## 待支持组件

- [x] Text 文本
- [x] Button 按钮
- [x] Navigator 导航
- [x] SplitLine 分割线
- [x] ListItem 列表项
- [ ] List 列表
- [ ] Icon 图标
- [x] Checkbox 多选框
- [x] Tag 标签
- [x] Image 图片
- [x] RedDot 红点
- [ ] Empty 为空图
- [x] ActionSheet 菜单
- [ ] LabelBar 标签栏
- [ ] Modal 弹层
- [ ] Radio 单选框
- [ ] SharePane 分享面板
- [ ] Toast 吐司

## Demo本地运行

* `cd example`
* `npm run hippy:dev`
* `npm run hippy:debug`