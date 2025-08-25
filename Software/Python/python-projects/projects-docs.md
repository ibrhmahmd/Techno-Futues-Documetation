here’s your **full Python Beginner Game Pack**.
All scripts work in the terminal, use only built-in libraries, and are written for **Python 3.7+**.

---

## **🎲 1 - dice\_roller.py**

```python
import random

# ASCII art for dice faces
DICE = {
    1: ["+-------+",
        "|       |",
        "|   o   |",
        "|       |",
        "+-------+"],
    2: ["+-------+",
        "| o     |",
        "|       |",
        "|     o |",
        "+-------+"],
    3: ["+-------+",
        "| o     |",
        "|   o   |",
        "|     o |",
        "+-------+"],
    4: ["+-------+",
        "| o   o |",
        "|       |",
        "| o   o |",
        "+-------+"],
    5: ["+-------+",
        "| o   o |",
        "|   o   |",
        "| o   o |",
        "+-------+"],
    6: ["+-------+",
        "| o   o |",
        "| o   o |",
        "| o   o |",
        "+-------+"]
}

while True:
    input("Press Enter to roll the dice...")
    roll = random.randint(1, 6)
    for line in DICE[roll]:
        print(line)
    print("You rolled:", roll)
    if input("Roll again? (y/n): ").lower() != "y":
        break
```

---

## **🔢 2 - number\_guess.py**

```python
import random
import time

secret = random.randint(1, 50)
attempts = 0

print("Guess the number between 1 and 50!")

while True:
    guess = int(input("Your guess: "))
    attempts += 1

    print("Checking...", end="")
    for _ in range(10):
        print(".", end="", flush=True)
        time.sleep(0.1)
    print()

    if guess == secret:
        print(f"🎉 Correct! The number was {secret}. Attempts: {attempts}")
        break
    elif guess < secret:
        print("Too low!")
    else:
        print("Too high!")
```

---

## **✊✋✌ 3 - rock\_paper\_scissors.py**

```python
import random

moves = ["rock", "paper", "scissors"]

ascii_art = {
    "rock": """
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
""",
    "paper": """
    _______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)
""",
    "scissors": """
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
"""
}

while True:
    player = input("Choose rock, paper, or scissors: ").lower()
    if player not in moves:
        print("Invalid choice!")
        continue

    computer = random.choice(moves)
    print("You chose:", player)
    print(ascii_art[player])
    print("Computer chose:", computer)
    print(ascii_art[computer])

    if player == computer:
        print("It's a tie!")
    elif (player == "rock" and computer == "scissors") or \
         (player == "scissors" and computer == "paper") or \
         (player == "paper" and computer == "rock"):
        print("You win! 🎉")
    else:
        print("You lose!")

    if input("Play again? (y/n): ").lower() != "y":
        break
```

---

## **⚪ 4 - moving\_ball.py**

```python
import time
import os

width = 30  # how wide the ball moves

while True:
    for pos in range(width):
        os.system("cls" if os.name == "nt" else "clear")
        print(" " * pos + "O")
        time.sleep(0.05)
    for pos in range(width, 0, -1):
        os.system("cls" if os.name == "nt" else "clear")
        print(" " * pos + "O")
        time.sleep(0.05)
```

---

## **🪢 5 - hangman\_lite.py**

```python
import random

words = ["python", "apple", "guitar", "happy", "school"]
word = random.choice(words)
guessed = []
attempts = 6

HANGMAN = [
    """
     +---+
     |   |
         |
         |
         |
         |
    =========
    """,
    """
     +---+
     |   |
     O   |
         |
         |
         |
    =========
    """,
    """
     +---+
     |   |
     O   |
     |   |
         |
         |
    =========
    """,
    """
     +---+
     |   |
     O   |
    /|   |
         |
         |
    =========
    """,
    """
     +---+
     |   |
     O   |
    /|\\  |
         |
         |
    =========
    """,
    """
     +---+
     |   |
     O   |
    /|\\  |
    /    |
         |
    =========
    """,
    """
     +---+
     |   |
     O   |
    /|\\  |
    / \\  |
         |
    =========
    """
]

print("Welcome to Hangman!")

while attempts > 0:
    display = "".join([letter if letter in guessed else "_" for letter in word])
    print(HANGMAN[6 - attempts])
    print("Word:", display)

    if "_" not in display:
        print("🎉 You guessed the word!")
        break

    guess = input("Guess a letter: ").lower()
    if guess in guessed:
        print("You already guessed that!")
        continue

    guessed.append(guess)

    if guess not in word:
        attempts -= 1
        print("Wrong! Attempts left:", attempts)

if attempts == 0:
    print(HANGMAN[6])
    print("Game over! The word was:", word)
```

---

### **📜 Summary**

* **Python Version**: 3.7+
* **Dependencies**: Only `random`, `time`, `os` (all built-in)
* **Files**:

  1. `dice_roller.py`
  2. `number_guess.py`
  3. `rock_paper_scissors.py`
  4. `moving_ball.py`
  5. `hangman_lite.py`

---