# 网页修改常用代码片段 (Code Snippets)

这里收集了你网页中常用的代码，方便你直接复制使用。

## 1. 换行与分割线 (Line Breaks & Dividers)

### 强制换行
```html
<br>
```

### 装饰性分割线 (如果有 CSS 支持)
```html
<div class="divider"></div>
```

---

## 2. 探索与思考 - 书架条目 (Bookshelf Item)
*适用于 AI 页面或 Game 页面的书架区块。已适配最新的 180px 宽度。*

```html
<a class="shelf-item" href="链接地址" target="_blank"
    data-popup-desc="个人的介绍、感想与拆解内容...">
    <div class="shelf-header">
        <span class="shelf-type">📝</span> <!-- 可选图标: 📝, 📄, 🎬, 🦀, 🔍, ✏️ -->
        <span class="shelf-title">标题内容</span>
    </div>
    
    <!-- 图片展示区 (建议比例 4:3 或 16:9) -->
    <div class="shelf-image-container">
        <img src="../assets/images/图片文件名.png" class="shelf-img" alt="cover">
    </div>

    <span class="shelf-meta">说明 · 202X.X</span>
    
    <!-- 原创标记 (红色) -->
    <!-- <span class="original-badge">ORIGINAL</span> -->
    
    <!-- 状态标记 (黄色) -->
    <!-- <span class="status-badge recently-reading">最近在看</span> -->
</a>
```

---

## 3. 便签样式参考 (Badge CSS)
*目前的黑体标签样式：*

```css
.original-badge, .status-badge {
  font-size: 11px;
  padding: 3px 8px;
  font-family: "SimHei", "Microsoft YaHei", sans-serif;
}
```

---

## 4. 项目展示条目 (Project Item)
*适用于 AI 页面的项目展示部分。支持右上角外链和正文下方的图片。*

```html
<div class="project-item">
    <!-- 右上角链接入口，不需要可删除该 a 标签 -->
    <a href="https://github.com/YourRepo" class="project-link" target="_blank">
        GitHub Repo <span style="font-family: monospace;">&rarr;</span>
    </a>
    
    <h3>项目标题</h3>
    <p>这里是项目的正文介绍，由于宽度较大，可以多写几段描述具体做的工作与架构。</p>
    <p style="color: var(--muted); font-size: 14px;">使用技术栈：Stack1 · Stack2</p>
    
    <!-- 插入图片（可选） -->
    <!-- <img src="../assets/images/图片文件名.png" alt="Project Screenshot" class="project-img"> -->
</div>
```

---

## 5. 玩家档案：最近在玩 (Now Playing Item)
*适用于 Game 页面右侧栏的“最近在玩”列表，支持在游戏名下方插入横版小截图。*

```html
<div class="gamer-now-item">
    🎮 游戏名称 <span class="gamer-now-platform">· 游玩平台</span>
</div>
<!-- 插入游戏截图（推荐 16:9 横图） -->
<!-- <img src="../assets/images/截图文件名.png" alt="Playing" class="gamer-now-img"> -->
```

