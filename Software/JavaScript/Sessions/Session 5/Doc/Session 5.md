---
title: "Arrays & Array Methods - Session 5"
author: "---"
date: "2025"
---

## Topic 1: Array Creation and Manipulation

<div class="arabic">
إنشاء المصفوفات والتعامل معها
</div>

### Subtopic 1

**[إنشاء مصفوفة وإضافة عناصر]**

```javascript
let fruits = ["apple", "banana", "orange"];
fruits.push("grape");
console.log(fruits);
```

<div class="arabic">
يمكنك إنشاء مصفوفة باستخدام الأقواس المربعة وإضافة عناصر باستخدام push.
</div>

---

### Subtopic 2

**[الوصول للعناصر وتعديلها]**

```javascript
console.log(fruits[1]); // banana
fruits[0] = "mango";
console.log(fruits);
```

<div class="arabic">
يمكنك الوصول لأي عنصر باستخدام الفهرس وتعديله مباشرة.
</div>

## Topic 2: Iteration Methods

<div class="arabic">
طرق التكرار على عناصر المصفوفة
</div>

```javascript
fruits.forEach(function(fruit) {
  console.log(fruit);
});
```

<div class="arabic">
forEach تستخدم لتنفيذ كود على كل عنصر في المصفوفة.
</div>

## Topic 3: Array Transformation

<div class="arabic">
تحويل عناصر المصفوفة
</div>

```javascript
let lengths = fruits.map(function(fruit) {
  return fruit.length;
});
console.log(lengths);
```

<div class="arabic">
map تعيد مصفوفة جديدة بعد تطبيق دالة على كل عنصر.
</div>

## Topic 4: Search and Filter Methods

<div class="arabic">
البحث والتصفية في المصفوفات
</div>

```javascript
let hasBanana = fruits.includes("banana");
let filtered = fruits.filter(fruit => fruit.startsWith("a"));
console.log(hasBanana, filtered);
```

<div class="arabic">
includes يتحقق من وجود عنصر، filter يعيد العناصر المطابقة لشرط معين.
</div>

## Practical Exercise

<div class="arabic">
تمرين عملي: أنشئ مصفوفة أرقام واطبع مجموعها.
</div>

```javascript
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
numbers.forEach(num => sum += num);
console.log(sum);
```

## Key Concepts Covered

<div class="arabic">
المفاهيم الرئيسية التي تم تغطيتها في هذه الجلسة:
</div>

1. **Array Creation**: [] and push
2. **Element Access**: Indexing and assignment
3. **Iteration**: forEach, map
4. **Search/Filter**: includes, filter

## Advanced: Array Methods

### Common Methods

<div class="arabic">
طرق متقدمة للمصفوفات
</div>

| Method | Description | Example |
|--------|-------------|---------|
| slice  | جزء من المصفوفة | arr.slice(1,3) |
| concat | دمج مصفوفتين | arr1.concat(arr2) |
| join   | تحويل المصفوفة لنص | arr.join(", ") |

<div class="arabic">
هذه الطرق تسهل التعامل مع المصفوفات بمرونة أكبر.
</div>