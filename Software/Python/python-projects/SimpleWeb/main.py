import streamlit as st
import random

# Set page config
st.set_page_config(
    page_title="My Colorful Website",
    page_icon="🌈",
    layout="centered"
)

# Add a colorful title
st.title("Welcome to My Omar Website!")



st.image()



# st.image("https://picsum.photos/400/200", caption="Random Beautiful Image")




# # Add some colored text
# st.markdown("""
#     <h2 style='color: #FF6B6B;'>This is a fun and colorful website!</h2>
#     """, unsafe_allow_html=True)




# # Add a fun image
# st.image("https://picsum.photos/400/200", caption="Random Beautiful Image")

# # Add some interactive elements
# name = st.text_input("What's your name?", "Guest")
# st.write(f"👋 Hello, {name}!")

# # Add a color picker
# color = st.color_picker("Pick your favorite color!", "#00f900")

# st.markdown(f"""
#     <div style='background-color: {color}; padding: 20px; border-radius: 10px;'>
#         You picked this beautiful color!
#     </div>
#     """, unsafe_allow_html=True)

# # Add a fun button
# if st.button("Click me for a surprise! 🎉"):
#     messages = ["You're awesome! 🌟", "Have a great day! 🌞", "Keep smiling! 😊", "You rock! 🎸"]
#     st.balloons()
#     st.write(random.choice(messages))

# # Add a slider
# happiness = st.slider("How happy are you today?", 0, 10, 5)
# if happiness >= 7:
#     st.write("That's great! Keep spreading joy! 🌈")
# else:
#     st.write("Here's a virtual hug to cheer you up! 🤗")