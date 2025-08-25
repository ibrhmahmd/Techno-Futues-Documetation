import tkinter as tk
import random
import time

score = 0
time_left = 20

def move_button():
    """Move the button to a random position"""
    x = random.randint(50, 250)
    y = random.randint(50, 250)
    btn.place(x=x, y=y)

def button_clicked():
    """Increase score when button is clicked"""
    global score
    score += 1
    lbl_score.config(text=f"Score: {score}")
    move_button()

def countdown():
    """Count down the time left"""
    global time_left
    if time_left > 0:
        time_left -= 1
        lbl_time.config(text=f"Time: {time_left}")
        root.after(1000, countdown)
    else:
        btn.config(state="disabled")
        lbl_time.config(text="Time's up!")

# --- Setup window ---
root = tk.Tk()
root.title("Click the Button!")
root.geometry("300x300")

lbl_score = tk.Label(root, text="Score: 0", font=("Arial", 14))
lbl_score.pack()

lbl_time = tk.Label(root, text="Time: 20", font=("Arial", 14))
lbl_time.pack()

btn = tk.Button(root, text="Click Me!", font=("Arial", 12), command=button_clicked)
btn.place(x=100, y=100)

# Start countdown
root.after(1000, countdown)

root.mainloop()
