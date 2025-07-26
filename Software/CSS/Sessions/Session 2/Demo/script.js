// Box Model Controls
document.addEventListener('DOMContentLoaded', function() {
    // Get all the range inputs
    const widthInput = document.getElementById('width');
    const paddingInput = document.getElementById('padding');
    const borderInput = document.getElementById('border');
    const marginInput = document.getElementById('margin');
    const boxSizingCheckbox = document.getElementById('box-sizing');
    
    // Get the box element
    const box = document.querySelector('.box-model-demo .box');
    
    // Update the box model visualization
    function updateBoxModel() {
        // Get values from inputs
        const width = widthInput.value;
        const padding = paddingInput.value;
        const border = borderInput.value;
        const margin = marginInput.value;
        const useBorderBox = boxSizingCheckbox.checked;
        
        // Update the box styles
        box.style.width = `${width}px`;
        box.style.padding = `${padding}px`;
        box.style.borderWidth = `${border}px`;
        box.style.margin = `${margin}px`;
        box.style.boxSizing = useBorderBox ? 'border-box' : 'content-box';
        
        // Update the displayed values
        document.getElementById('width-value').textContent = width;
        document.getElementById('padding-value').textContent = padding;
        document.getElementById('border-value').textContent = border;
        document.getElementById('margin-value').textContent = margin;
        
        // Update the visual indicators
        document.querySelector('.padding').style.top = `-${padding}px`;
        document.querySelector('.padding').style.left = `-${padding}px`;
        document.querySelector('.padding').style.right = `-${padding}px`;
        document.querySelector('.padding').style.bottom = `-${padding}px`;
        
        const borderOffset = parseInt(padding) + parseInt(border);
        document.querySelector('.border').style.top = `-${borderOffset}px`;
        document.querySelector('.border').style.left = `-${borderOffset}px`;
        document.querySelector('.border').style.right = `-${borderOffset}px`;
        document.querySelector('.border').style.bottom = `-${borderOffset}px`;
        
        const marginOffset = borderOffset + parseInt(margin);
        document.querySelector('.margin').style.top = `-${marginOffset}px`;
        document.querySelector('.margin').style.left = `-${marginOffset}px`;
        document.querySelector('.margin').style.right = `-${marginOffset}px`;
        document.querySelector('.margin').style.bottom = `-${marginOffset}px`;
    }
    
    // Add event listeners
    widthInput.addEventListener('input', updateBoxModel);
    paddingInput.addEventListener('input', updateBoxModel);
    borderInput.addEventListener('input', updateBoxModel);
    marginInput.addEventListener('input', updateBoxModel);
    boxSizingCheckbox.addEventListener('change', updateBoxModel);
    
    // Initialize the box model
    updateBoxModel();
});
