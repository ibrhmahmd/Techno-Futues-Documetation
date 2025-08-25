import tkinter as tk
import random

# --- Game variables ---
score = 0
speed = 5
fruit_size = 30
basket_width = 80
basket_height = 20
falling = False

def start_game():
    """Start dropping the fruit"""
    global falling, score
    if not falling:
        falling = True
        score = 0
        lbl_score.config(text=f"Score: {score}")
        drop_fruit()

def drop_fruit():
    """Move the fruit down each frame"""
    global falling
    if not falling:
        return
    canvas.move(fruit, 0, speed)
    fruit_coords = canvas.coords(fruit)
    basket_coords = canvas.coords(basket)

    # Check if caught
    if fruit_coords[3] >= basket_coords[1] and \
       basket_coords[0] <= fruit_coords[0] <= basket_coords[2]:
        increase_score()
        reset_fruit()

    # Check if missed
    elif fruit_coords[3] >= 300:
        reset_fruit()

    root.after(50, drop_fruit)

def move_left(event):
    """Move basket left"""
    canvas.move(basket, -20, 0)

def move_right(event):
    """Move basket right"""
    canvas.move(basket, 20, 0)

def reset_fruit():
    """Reset fruit to top at random x"""
    x = random.randint(20, 280)
    canvas.coords(fruit, x, 0, x + fruit_size, fruit_size)

def increase_score():
    """Add to score"""
    global score
    score += 1
    lbl_score.config(text=f"Score: {score}")

# --- Setup window ---
root = tk.Tk()
root.title("Catch the Fruit!")
root.resizable(False, False)

lbl_score = tk.Label(root, text="Score: 0", font=("Arial", 14))
lbl_score.pack()

canvas = tk.Canvas(root, width=300, height=300, bg="lightblue")
canvas.pack()

# Basket
basket = canvas.create_rectangle(110, 280, 110 + basket_width, 280 + basket_height, fill="brown")

# Fruit
fruit = canvas.create_oval(150, 0, 150 + fruit_size, fruit_size, fill="red")

# Bind keys
root.bind("<Left>", move_left)
root.bind("<Right>", move_right)

# Start button
btn_start = tk.Button(root, text="Start Game", command=start_game)
btn_start.pack()

root.mainloop()
