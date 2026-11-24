---
title: SwiftUI_Closures
date: 2026-11-19
tags: ["SWIFTUI"]
outline: [2, 3]
lastUpdated: true
sidebar: false
---

# SwiftUI_Closures


在 Swift 和 SwiftUI 开发中，**闭包（Closures）**是最核心的基础语法之一。我们在写 SwiftUI（例如 `VStack { ... }`、`Button(action: { ... })`、`attendees.map { ... }`）时，几乎每一行都在和闭包打交道。

以下为您系统梳理 Swift 官方文档中闭包的核心要点、语法糖演进过程以及在 SwiftUI / Scrumdinger 中的具体应用：

---

### 一、什么是闭包？

闭包是**可以捕获并存储其所在上下文中常量或变量引用的独立代码块**。在其他语言中它也被称为匿名函数、Lambda 或 Block。

在 Swift 中，函数其实是闭包的一种特例：
1. **全局函数（Global Functions）**：有名字、但不捕获任何值的闭包。
2. **嵌套函数（Nested Functions）**：有名字、能捕获外层函数变量的闭包。
3. **闭包表达式（Closure Expressions）**：轻量级匿名语法，能捕获上下文变量。

---

### 二、闭包表达式的 5 步语法糖演变（以数组排序为例）

假设我们有一个名字数组需要按字母降序排列：
```swift
let names = ["Chris", "Alex", "Ewa", "Barry", "Daniella"]
```

#### 第 0 步：传统具名函数方式
```swift
func backward(_ s1: String, _ s2: String) -> Bool {
    return s1 > s2
}
var reversedNames = names.sorted(by: backward)
```

#### 第 1 步：标准闭包表达式语法 (`in` 关键字分隔参数与函数体)
```swift
// 语法形式：{ (参数列表) -> 返回类型 in 代码语句 }
reversedNames = names.sorted(by: { (s1: String, s2: String) -> Bool in
    return s1 > s2
})
```

#### 第 2 步：由上下文推断类型（省略参数类型与返回值类型）
因为 `names` 是 `[String]`，Swift 编译器能自动推导出 `s1` 和 `s2` 是 `String`，返回值是 `Bool`：
```swift
reversedNames = names.sorted(by: { s1, s2 in return s1 > s2 })
```

#### 第 3 步：单表达式隐式返回（省略 `return`）
如果闭包体内只有单行表达式，该表达式的计算结果会自动作为返回值：
```swift
reversedNames = names.sorted(by: { s1, s2 in s1 > s2 })
```

#### 第 4 步：简写参数名（Shorthand `$0`, `$1`, ...）
Swift 自动为内联闭包提供 `$0`（第1个参数）、`$1`（第2个参数）等占位名，省略参数定义和 `in`：
```swift
reversedNames = names.sorted(by: { $0 > $1 })
```

#### 第 5 步：运算符方法（Operator Methods）
Swift 中 `>` 本身就是一个函数 `(String, String) -> Bool`，因此可以直接传入运算符：
```swift
reversedNames = names.sorted(by: >)
```

---

### 三、尾随闭包（Trailing Closures）—— 为什么 SwiftUI 里到处都是 `{}`

如果闭包是函数的**最后一个参数**，可以将其写在圆括号外部；如果函数**只有这一个闭包参数**，圆括号甚至可以完全省略：

```swift
// 普通写法
names.sorted(by: { $0 > $1 })

// 尾随闭包写法（省略圆括号）
names.sorted { $0 > $1 }
```

#### 为什么这对 SwiftUI 至关重要？
在 Scrumdinger 中，几乎所有容器和视图构建器（ViewBuilder）都是尾随闭包：
```swift
// 1. Button: 最后一个参数是 label 闭包
Button(action: {
    print("Next speaker")
}) {
    Image(systemName: "forward.fill")
}

// 2. 多尾随闭包（Multiple Trailing Closures）
// 如果有多个尾随闭包，第一个闭包省略标签，后续闭包附带标签
Button {
    // action 闭包
} label: {
    // label 闭包
    Text("Next")
}
```

---

### 四、值捕获（Capturing Values）与引用类型

闭包是**引用类型（Reference Types）**。闭包可以在其定义的上下文中**捕获（Capture）**常量和变量，即使定义这些变量的作用域已经销毁，闭包依然能读写它们：

```swift
func makeIncrementer(forIncrement amount: Int) -> () -> Int {
    var runningTotal = 0
    func incrementer() -> Int {
        runningTotal += amount // 捕获了外层的 runningTotal 和 amount
        return runningTotal
    }
    return incrementer
}

let incrementByTen = makeIncrementer(forIncrement: 10)
incrementByTen() // 返回 10
incrementByTen() // 返回 20
```

> **注意内存循环引用**：
> 如果闭包被某个类实例强持有，且闭包内部又强引用了 `self`，会导致强引用循环（内存泄漏）。此时需要使用捕获列表：
> ```swift
> { [weak self] in
>     self?.doSomething()
> }
> ```

---

### 五、逃逸闭包（`@escaping`）与自动闭包（`@autoclosure`）

| 类型 | 关键字 | 说明 | 常见场景 |
| :--- | :--- | :--- | :--- |
| **非逃逸闭包 (默认)** | 无需修饰 | 闭包在函数返回**之前**同步执行完毕，不会被存留到函数外。 | `map`、`filter`、`forEach` |
| **逃逸闭包** | `@escaping` | 闭包在函数返回**之后**才被调用（例如被存入外部变量、异步回调中）。 | 网络请求回调、异步计时器 `Timer` |
| **自动闭包** | `@autoclosure` | 自动将传入的普通表达式包裹成一个无参闭包，实现**延迟计算**。 | `assert(...)` 条件判断、`??` 空合运算符 |

#### `@escaping` 示例（如网络加载或定时器）：
```swift
var completionHandlers: [() -> Void] = []

func performTask(handler: @escaping () -> Void) {
    // 闭包没有立即执行，而是存到了全局数组中，函数退出后才可能被调用
    completionHandlers.append(handler)
}
```

#### `@autoclosure` 示例（延迟求值）：
```swift
func logIfDebug(_ message: @autoclosure () -> String) {
    #if DEBUG
    print(message()) // 只有在 DEBUG 模式下才会真正计算传入的表达式，避免无谓计算
    #endif
}

logIfDebug("Complex calculations: \(heavyComputation())")
```

---

### 六、联系 Scrumdinger：闭包在项目中的实际应用

回顾我们在 Scrumdinger 中编写的代码：

1. **`map` 中的简写闭包**：
   ```swift
   // 将 [String] 转换成 [Attendee]
   self.attendees = attendees.map { Attendee(name: $0) }
   ```
2. **视图动作回调闭包**：
   ```swift
   // MeetingFooterView 接收一个函数类型的 skipAction 属性
   struct MeetingFooterView: View {
       let skipAction: () -> Void  // 闭包类型
       
       var body: some View {
           Button(action: skipAction) {
               Image(systemName: "forward.fill")
           }
       }
   }
   ```
3. **SwiftUI 的 `@ViewBuilder` 内容闭包**：
   `VStack { ... }`、`ZStack { ... }` 内部都是通过闭包构建子视图层次。

理解了闭包的语法演进和特性后，阅读与编写 SwiftUI 代码就会变得非常直观。如果对 `@escaping`、循环引用捕获列表 `[weak self]` 或在 Scrumdinger 里的具体用法有疑问，随时告诉我！

