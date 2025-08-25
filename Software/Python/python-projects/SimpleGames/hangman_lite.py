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