import random

moves = ["rock", "paper", "scissors"]
move_emojis = {
    "rock": "🪨",
    "paper": "📄",
    "scissors": "✂️"
}

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
    print("\n🎮 Let's play Rock, Paper, Scissors! 🎮")
    player = input("Choose 🪨 rock, 📄 paper, or ✂️ scissors: ").lower()

    if player not in moves:
        print("❌ Invalid choice! Try again!")
        continue


    computer = random.choice(moves)
    
    print(f"\nYou chose: {player} {move_emojis[player]}")
    print(ascii_art[player])
    print(f"Computer chose: {computer} {move_emojis[computer]}")
    print(ascii_art[computer])

    if player == computer:
        print("🤝 It's a tie! 🤝")
    elif (player == "rock" and computer == "scissors") or \
         (player == "scissors" and computer == "paper") or \
         (player == "paper" and computer == "rock"):
        print("🎉 You win! 🏆 Congratulations! 🎊")
    else:
        print("😔 You lose! Better luck next time! 💫")

    if input("\n🔄 Play again? (y/n): ").lower() != "y":
        print("\n👋 Thanks for playing! See you next time! 🎮")
        break