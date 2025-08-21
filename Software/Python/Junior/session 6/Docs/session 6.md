---
title: "Python Programming - Session 6: Random, Game Logic, and Modulo (%)"
author: "Instructor Name"
date: "2025"
---

## Topic 1: Random Choices and Game Setup

<div class="arabic">
استخدام مكتبة random لجعل ألعابنا أكثر إثارة
</div>

**ما هي مكتبة random؟**

مكتبة random تسمح لنا باختيار قيم عشوائية، مما يجعل ألعابنا أكثر تحدياً.

```python
import random
choices = ["✂️", "🪨", "📃"]
computer_choice = random.choice(choices)
```

**خصائص مكتبة random:**
- `random.choice(list)`: يختار عنصراً عشوائياً من القائمة
- تجعل اللعبة أكثر إثارة لأن اختيار الكمبيوتر سيكون عشوائياً
- لا حاجة لكتابة قيم ثابتة

```python
print("اختيار الكمبيوتر هو: " + computer_choice)
```

## Topic 2: While Loop Practice

<div class="arabic">
كيفية استخدام الحلقات للعب عدة جولات
</div>

**التحكم في عدد الجولات**

نستخدم الحلقة while للسماح باللعب عدة مرات:

```python
number_of_games = 5

while number_of_games > 0:
    user_input = input("ادخل اختيارك: ")
    # اللعبة هنا
    number_of_games = number_of_games - 1
```

**نصائح مهمة:**
- استخدم `> 0` بدلاً من `>= 0` لتجنب جولة إضافية
- قلل العداد في نهاية كل جولة
- اطلب الإدخال في بداية كل جولة

## Topic 3: Game Logic with Conditionals

<div class="arabic">
كيفية تحديد الفائز باستخدام الشروط
</div>

**الشروط الأساسية للعبة**

نستخدم الشروط لتحديد نتيجة كل جولة:

```python
if user_input == computer_choice:
    print("🤦‍ تعادل")
    print("Draw!")
elif (
    user_input == "📃" and computer_choice == "🪨" or
    user_input == "🪨" and computer_choice == "✂️" or
    user_input == "✂️" and computer_choice == "📃"
):
    print("you WOONN 🎆🎆")
    print("You Win!")
else:
    print("you LOSE 😒")
    print("You Lose!")
```

**ملاحظات مهمة:**
- تأكد من مطابقة الرموز تماماً
- استخدم الأقواس عند دمج الشروط
- else تتعامل مع جميع الحالات المتبقية

## Topic 4: Modulo Operator (%) — Even vs Odd

<div class="arabic">
فهم باقي القسمة وتطبيقه في تحديد الأرقام الزوجية والفردية
</div>

**ما هو باقي القسمة (%)؟**

باقي القسمة يعطي الباقي بعد القسمة:

```python
print(7 % 3)  # الناتج: 1
print(10 % 2) # الناتج: 0
```

**كيف نحدد الأرقام الزوجية والفردية؟**

```python
number = int(input("أدخل رقم: "))

if number % 2 == 0:
    print("الرقم زوجي ✌️")
else:
    print("الرقم فردي 👍")
```

**خصائص باقي القسمة:**
- الأرقام الزوجية تعطي باقي 0 عند القسمة على 2
- الأرقام الفردية تعطي باقي 1 عند القسمة على 2
- يجب تحويل الإدخال إلى رقم باستخدام `int()`

## Full Examples

<div class="arabic">
أمثلة كاملة لتطبيق المفاهيم
</div>

**مثال كامل للعبة الحجر الورقة المقص:**

```python
import random

choices = ["✂️", "🪨", "📃"]
number_of_games = 5

while number_of_games > 0:
    user_input = input("ادخل اختيارك: ")
    computer_choice = random.choice(choices)
    
    print("اختيار الكمبيوتر هو: " + computer_choice)
    
    if user_input == computer_choice:
        print("🤦‍ تعادل")
        print("Draw!")
    elif (
        user_input == "📃" and computer_choice == "🪨" or
        user_input == "🪨" and computer_choice == "✂️" or
        user_input == "✂️" and computer_choice == "📃"
    ):
        print("you WOONN 🎆🎆")
        print("You Win!")
    else:
        print("you LOSE 😒")
        print("You Lose!")
    
    number_of_games = number_of_games - 1
```

**مثال على تحديد الأرقام الزوجية والفردية:**

```python
number_of_games = 5

while number_of_games > 0:
    number = int(input("أدخل رقم: "))
    
    if number % 2 == 0:
        print("الرقم زوجي ✌️")
    else:
        print("الرقم فردي 👍")
    
    number_of_games = number_of_games - 1
```

## Key Concepts Covered

<div class="arabic">
المفاهيم الرئيسية التي تم تغطيتها في هذه الجلسة:
</div>

1. **libraries**: استخدام `import random` للاختيار العشوائي
2. **functions**: `random.choice()` للاختيار من قائمة
3. **loops**: استخدام `while` للتحكم في عدد الجولات
4. **conditions**: استخدام `if/elif/else` لتحديد النتائج
5. **remainer**:  `%` لتحديد الأرقام الزوجية والفردية
6. **Type conversion**: استخدام `int()` لتحويل النص إلى رقم
