## What’s New 

- **استخدام الدوال**: تعريف دالة [game(score, computer_score)](cci:1://file:///e:/iCloud~md~obsidian/Cloud%20Notes/Techno/Software/Python/Junior/session%206/Demo/main.py:6:0-40:16) بدلاً من كل المنطق في الحلقة.
- **المعاملات والإرجاع المتعدد**: تمرير المتغيرات للدالة وإرجاع قيمتين (نتيجتك ونتيجة الكمبيوتر).
- **تتبع النتائج**: عرض لوحة النتائج في كل جولة.
- **تحويل الأنواع للطباعة**: استخدام `str()` عند دمج النصوص مع الأرقام.

---

## Topic 1: Functions — Parameters and Return Values


**تعريف   Game function**

**1. تعريف الدالة وتلقي النتائج:**

```python
def game(score, computer_score):
    # تطلب من المستخدم إدخال اختياره
    user_input = input("enter your choice :")
    # الكمبيوتر يختار بشكل عشوائي من القائمة
    computer_choice = random.choice(choices)

    # مقارنة الاختيارات:
    if user_input == computer_choice:
        print("🤦‍ Draw")  # تعادل

    # حالات فوز المستخدم
    elif (
        user_input == "📃" and computer_choice == "🪨" or
        user_input == "🪨" and computer_choice == "✂️" or
        user_input == "✂️" and computer_choice == "📃"
    ):
        score = score + 1
        print("you WOONN 🎆🎆")
        print("Computer Lose 😒")

    # حالات فوز الكمبيوتر
    elif (
        user_input == "✂️" and computer_choice == "🪨" or
        user_input == "📃" and computer_choice == "✂️" or
        user_input == "🪨" and computer_choice == "📃"
    ):
        computer_score = computer_score + 1
        print("you LOSE 😒")
        print("computer WOONN 🎆🎆")

    # معالجة أي إدخال غير صحيح
    else:
        print("choose only from : " + str(choices))

    # تُعيد النتائج الجديدة (نتيجة اللاعب ونتيجة الكمبيوتر)
    return score, computer_score
```

**شرح الأجزاء:**
- `input()`: تطلب من المستخدم إدخال رمزه (مثلاً "✂️" أو "🪨" أو "📃")
- `random.choice(choices)`: الكمبيوتر يختار رمزاً بشكل عشوائي من القائمة
- الشروط تحدد النتيجة (فوز/خسارة/تعادل)
- إذا كان الإدخال غير صحيح، تظهر رسالة للمستخدم
- الدالة تعيد نتيجتك ونتيجة الكمبيوتر بعد كل جولة

**أفكار أساسية**
- __المعاملات__: `score`, `computer_score` يتم تمريرها للدالة.
- __الإرجاع المتعدد__: الدالة تعيد قيمتين باستخدام tuple.
- __الاستخدام__: 
  ```python
  score, computer_score = game(score, computer_score)
  ```

---

## Topic 2: Scoreboard and String Conversion

<div class="arabic">
لوحة النتائج وتحويل الأنواع للطباعة
</div>

```python
print(" 😊 Your Score is : " + str(score) + " | " + " 💻 Computer Score is : " + str(computer_score))
```

- __لماذا `str()`؟__: عند دمج أرقام مع نصوص يجب تحويل الأرقام إلى نص.
- __بديل أفضل (اختياري)__:
  ```python
  print(f" 😊 Your Score is : {score} |  💻 Computer Score is : {computer_score}")
  ```

---

## Topic 3: Main Loop — Controlling Rounds

<div class="arabic">
التحكم بعدد الجولات باستخدام while
</div>

```python
number_of_games = 5
score = 0
computer_score = 0

while number_of_games > 0:  # الأفضل استخدام > 0 لتجنب جولة إضافية
    score, computer_score = game(score, computer_score)
    print(" 😊 Your Score is : " + str(score) + " | " + " 💻 Computer Score is : " + str(computer_score))
    number_of_games = number_of_games - 1
```

- __نصيحة__: استبدل `>= 0` بـ `> 0` لتجنب لعب جولة سادسة عندما تبدأ من 5.

---

## Topic 4: Input Validation and UX

<div class="arabic">
التحقق من صحة الإدخال وتجربة المستخدم
</div>

- استخدم قائمة بالاختيارات المسموحة.
- اطبع الاختيارات للمستخدم بشكل واضح.

```python
choices = ["✂️", "🪨", "📃"]
user_input = input(f"Choose one {', '.join(choices)}: ")
if user_input not in choices:
    print("Please choose a valid option!")
```

---

## Full Polished Example

<div class="arabic">
مثال كامل ومنسق للعبة
</div>

```python
import random

choices = ["✂️", "🪨", "📃"]

def game(score, computer_score):
    user_input = input(f"enter your choice ({', '.join(choices)}): ")
    computer_choice = random.choice(choices)

    print("The computer choice is : " + computer_choice)

    if user_input == computer_choice:
        print("🤦‍ Draw")

    elif (
        user_input == "📃" and computer_choice == "🪨" or
        user_input == "🪨" and computer_choice == "✂️" or
        user_input == "✂️" and computer_choice == "📃"
    ):
        score += 1
        print("you WOONN 🎆🎆 ")
        print("Computer Lose 😒 ")

    elif (
        user_input == "✂️" and computer_choice == "🪨" or
        user_input == "📃" and computer_choice == "✂️" or
        user_input == "🪨" and computer_choice == "📃"
    ):
        computer_score += 1
        print("you LOSE 😒")
        print("computer WOONN 🎆🎆")

    else:
        print("choose only from : " + ", ".join(choices))

    return score, computer_score


number_of_games = 5
score = 0
computer_score = 0

while number_of_games > 0:
    score, computer_score = game(score, computer_score)
    print(f" 😊 Your Score is : {score} |  💻 Computer Score is : {computer_score}")
    number_of_games -= 1
```

---

## Key Concepts Covered

<div class="arabic">
المفاهيم الرئيسية التي تم تغطيتها:
</div>

1. **Functions**: تعريف الدوال، المعاملات، والقيم المعادة.
2. **Multiple Return**: إرجاع أكثر من قيمة من الدالة.
3. **Scorekeeping**: تحديث النتائج وعرض لوحة النتائج.
4. **Loops**: التحكم بعدد الجولات باستخدام `while`.
5. **String Conversion**: استخدام `str()` أو f-strings عند الطباعة.
6. **Input Validation**: التحقق من صحة إدخال المستخدم.

---

## Advanced: Common Pitfalls and Best Practices

<div class="arabic">
أخطاء شائعة ونصائح مهمة
</div>

| Concept | Common Mistake | Best Practice | Solution |
|--------|-----------------|---------------|----------|
| Shadowing built-ins | تسمية متغير باسم `list` | استخدم اسمًا واضحًا مثل `choices` | `choices = ["✂️","🪨","📃"]` |
| Loop condition | `while number_of_games >= 0` | استخدم `> 0` | `while number_of_games > 0:` |
| Emoji matching | رمز غير صحيح في المقارنة | نسخ نفس الرموز بالضبط | تأكد من "✂️", "🪨", "📃" |
| String + int | دمج أرقام مع نصوص مباشرة | حوّل أو استخدم f-string | `str(score)` أو `f"{score}"` |
| Return handling | نسيان استقبال قيم الإرجاع | استقبل كل القيم | `score, computer_score = game(...)` |

<div class="arabic">
تجنب هذه الأخطاء لبرمجة أنظف وتجربة لعب أفضل
</div>
```