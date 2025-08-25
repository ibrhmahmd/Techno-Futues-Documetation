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