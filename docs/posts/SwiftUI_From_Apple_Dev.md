---
title: SwiftUI_From_Apple_Dev
date: 2026-11-24
outline: [2, 3]
lastUpdated: true
sidebar: false
---

>  https://developer.apple.com/tutorials/app-dev-training/managing-data-flow-between-views  This is a quote from the website.


这篇文章选自苹果官方的 SwiftUI 经典教程《Scrumdinger》，主题是 **“视图之间的数据流管理（Managing data flow between views）”**。

在传统的命令式 UI（如 UIKit）中，我们经常需要在界面和数据之间手动同步（例如修改了数据后调用 `label.text = ...` 或 `tableView.reloadData()`），这极易出现“UI 显示的内容与实际数据不一致”的 Bug。SwiftUI 采用了**声明式 UI** 模式（即：`View = f(State)`，界面只是状态的投影）。

以下为您对文章各核心板块进行**完整、详细、通俗易懂的中文解析与代码实例**：

---

### 一、核心理念：单一可信数据源（Source of Truth）

#### 1. 什么是单一可信数据源？
- **痛点**：如果在多个视图里各自拷贝、保存一份相同的数据，一旦其中一个视图修改了数据，其他视图没来得及同步，就会产生**数据不一致的 Bug**。
- **原则**：**一份数据在整个 App 中应该只有一个“真正拥有它的地方”**（即 Source of Truth）。
- **共享机制**：所有需要展示或修改这笔数据的视图，都应该直接读取或引用这个唯一的源头，而不是各自复制一份。

#### 2. 在 Scrumdinger 中的应用
在待办/站会管理应用 Scrumdinger 中：
- 真实的站会列表数据最终保存在顶层（如 `ScrumdingerApp` 或主视图）作为单一可信源；
- 下游的各个子视图（如列表页 `ScrumsView`、详情页 `DetailView`、编辑页 `DetailEditView`）都共享这同一份数据。

---

### 二、Swift 属性包装器（Property Wrappers）

SwiftUI 大量使用 Swift 的**属性包装器（Property Wrapper）**机制。它通过在变量前添加 `@` 符号（如 `@State`、`@Binding`），把通用的数据读写、依赖追踪、视图刷新等复杂底层逻辑封装起来。

---

### 三、`@State`：视图本地的“可信数据源”

#### 1. 作用与生命周期
- 当一个属性被标记为 `@State` 时，你就为当前视图创建了一个**私有、可变的可信源**。
- **SwiftUI 底层托管**：SwiftUI 会在外部底层内存中为这个 `@State` 分配独立的持久存储空间。哪怕当前视图的结构体（Struct）因为重新计算而被销毁重建，该状态值依然会被保留。

#### 2. 数据驱动 UI 的循环闭环
整个工作流程是一个单向闭环：
```text
  ┌──────────────────────────────────────────────┐
  │                                              │
  ▼                                              │
用户交互 ──> 修改 @State 属性 ──> 触发 View 重新求值 (body)
(点击/输入)     (数据发生改变)           (自动刷新受影响的 UI)
```
- 当 `@State` 的值发生改变时，系统会自动找出所有依赖该属性的视图组件，并在下一个渲染周期重新执行 `body` 进行重绘。
- 例如：用户修改了会议信息，列表组件会自动刷新显示最新名称。

#### 3. 为什么声明为 `private`？
- `@State` 的设计初衷是管理**瞬态状态（Transient State）**或**视图专属的本地状态**（例如按钮的高亮状态、弹窗是否展开、筛选栏文本、表单编辑中的临时副本等）。
- 它归属当前视图专属管理，外部不应直接通过成员初始化器对其随意赋值，因此苹果官方强烈推荐声明为 `private`。

---

### 四、`@Binding`：双向数据通道

#### 1. 为什么需要 `@Binding`？
如果你在子视图里也用 `@State`，就会产生“第二份数据”，破坏了单一数据源。如果只用普通传参 `let scrum: DailyScrum`，子视图又无法修改父视图的数据。

`@Binding` 正好解决了这个问题：
- **不拥有数据**：`@Binding` **本身不存储数据**，它只是一个“双向绑定的引用/指针”。
- **双向读写通道（Two-way connection）**：
  - 子视图**读取** `@Binding` 时，直接读取父视图的源数据；
  - 子视图**修改** `@Binding` 时，直接写入父视图的源数据；
  - 父视图源数据变化时，绑定了它的子视图自动同步刷新。

#### 2. 传参语法糖：`$` 符号
在父视图中把一个 `@State` 传递给子视图的 `@Binding` 时，需要在变量前加 **`$`** 符号（这会获取属性包装器的 `projectedValue`，即返回一个 `Binding<T>` 类型）。

---

### 五、只读数据（Read-Only）vs 双向绑定（Binding）的选择

在向子视图传递数据时，请根据场景选择：

| 传递类型 | 子视图声明方式 | 适用场景 | 父视图传递方式 |
| :--- | :--- | :--- | :--- |
| **只读属性** | `let scrum: DailyScrum` | 只需要展示，不需要编辑（如卡片预览 `CardView`） | `CardView(scrum: scrum)` |
| **双向绑定** | `@Binding var scrum: DailyScrum` | 既要展示，又需要直接在原数据上修改（如编辑页 `DetailEditView`） | `DetailEditView(scrum: $scrum)` |

---

### 六、Scrumdinger 业务场景实战代码演示

下面用一个简化的完整代码示例，直观演示文章提到的整套机制：

```swift
import SwiftUI

// 1. 数据模型
struct DailyScrum: Identifiable {
    let id = UUID()
    var title: String
    var attendees: [String]
    var lengthInMinutes: Int
}

// 2. 父视图（建立单一可信源）
struct ScrumsView: View {
    // 这里是整个列表的可信数据源
    @State private var scrums: [DailyScrum] = [
        DailyScrum(title: "Design", attendees: ["Cathy", "Daisy"], lengthInMinutes: 10),
        DailyScrum(title: "App Dev", attendees: ["Eden", "Karla"], lengthInMinutes: 5)
    ]
    
    var body: some View {
        NavigationStack {
            List($scrums) { $scrum in 
                // $scrum 是从 $scrums 派生出的每一个元素的 Binding
                NavigationLink(destination: DetailEditView(scrum: $scrum)) {
                    // 只读展示卡片
                    CardView(scrum: scrum)
                }
            }
            .navigationTitle("Daily Scrums")
        }
    }
}

// 3. 子视图 A：仅读取（普通传参）
struct CardView: View {
    let scrum: DailyScrum // 只读，无需 @Binding
    
    var body: some View {
        VStack(alignment: .leading) {
            Text(scrum.title).font(.headline)
            Text("\(scrum.attendees.count) members")
        }
    }
}

// 4. 子视图 B：需要修改（双向绑定）
struct DetailEditView: View {
    // 声明为 @Binding，不拥有数据，直接双向连接父视图的对应项
    @Binding var scrum: DailyScrum
    
    var body: some View {
        Form {
            Section(header: Text("Meeting Info")) {
                // TextField 接收 Binding<String>，打通双向修改
                TextField("Title", text: $scrum.title)
                
                Slider(value: Binding(
                    get: { Double(scrum.lengthInMinutes) },
                    set: { scrum.lengthInMinutes = Int($0) }
                ), in: 5...30, step: 1) {
                    Text("Length")
                }
                Text("\(scrum.lengthInMinutes) minutes")
            }
        }
    }
}
```

#### 数据流动解析：
1. 用户进入 `DetailEditView`，修改了文本框中的会议标题为 `"iOS Dev"`。
2. 因为使用了 `$scrum.title`，输入直接修改了根数据源 `ScrumsView` 里的 `@State var scrums`。
3. `ScrumsView` 监听到 `@State` 改变，自动标记受影响的列表行需要刷新。
4. 返回列表页时，`CardView` 会立即展示新标题 `"iOS Dev"`。整个过程**不需要手写任何通知（Notification）、代理（Delegate）或回调闭包**。

---

### 七、核心总结

1. **Source of Truth（单一数据源）**：数据只存一份，消灭因数据副本不同步而导致的 Bug。
2. **`@State`**：当前视图独占的可变本地数据源，一般用 `private` 修饰，用于驱动界面局部更新。
3. **`@Binding`**：子视图对已有数据源的“双向连接通道”，自身不存储数据，子视图读写均直接作用于源数据。
4. **层级无关**：这种机制在任意深度的视图树中都可以层层透传，框架自动追踪依赖并保证全局 UI 实时同步。