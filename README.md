

# hippy Vue UI 库

## 通用组件

* HiButton 按钮
* HiText 文本


## 引入

### 全量引入

```js
import Vue from '@hippy/vue'
import hippyUi from 'hippy-vue-ui'

Vue.use(hippyUi)
```

##  `scripts` 字段说明

- `doc`: 浏览本地文档 Server
- `dev`: 调试

## 如何使用

### Button

> 按钮组件，可配置多种不同的按钮样式

```js

// template中使用
<HiButton text="关注"/>
<HiButton type="btnWhite" text="关注"/>
<HiButton type="btnWhite" text="关注" :disable="true" />
<HiButton text="关注" size="s"/>
```

## 待支持组件

- [x] Text 文本
- [x] Button 按钮
- [ ] Navigator 导航
- [ ] SplitLine 分割线
- [ ] ListItem 列表项
- [ ] List 列表
- [ ] Icon 图标
- [ ] Checkbox 多选框
- [ ] Tag 标签
- [ ] Image 图片
- [ ] RedDot 红点
- [ ] Empty 为空图
- [ ] ActionSheet 菜单
- [ ] LabelBar 标签栏
- [ ] Modal 弹层
- [ ] Radio 单选框
- [ ] SharePane 分享面板
- [ ] Toast 吐司