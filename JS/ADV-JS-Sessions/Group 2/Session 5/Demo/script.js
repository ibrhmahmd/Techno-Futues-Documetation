// Attribute manipulation
// - CSS classes and styles






function createImage() {
    // Create a new <img> element
    const img = document.createElement("img");

    // Set image attributes
    img.setAttribute("src", "");
    img.setAttribute("alt", "Placeholder Image");
    img.setAttribute("width", "150");

    // Append image to the container
    document.getElementById("imageContainer").appendChild(img);
  }

