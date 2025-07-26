document.addEventListener('DOMContentLoaded', function() {
    // Get all the range inputs
    const widthInput = document.getElementById('width');
    const paddingInput = document.getElementById('padding');
    const borderInput = document.getElementById('border');
    const marginInput = document.getElementById('margin');
    const boxSizingCheckbox = document.getElementById('box-sizing');
    const contentTextInput = document.getElementById('content-text');
    
    // Get the box elements
    const box = document.querySelector('.box-model-demo .box');
    const content = document.querySelector('.box-model-demo .content');
    const paddingEl = document.querySelector('.box-model-demo .padding');
    const borderEl = document.querySelector('.box-model-demo .border');
    const marginEl = document.querySelector('.box-model-demo .margin');
    
    // Initialize the box model visualization
    function updateBoxModel() {
        // Get values from inputs
        const width = parseInt(widthInput.value);
        const padding = parseInt(paddingInput.value);
        const border = parseInt(borderInput.value);
        const margin = parseInt(marginInput.value);
        const useBorderBox = boxSizingCheckbox.checked;
        
        // Update the box styles
        box.style.boxSizing = useBorderBox ? 'border-box' : 'content-box';
        
        // Set dimensions based on box-sizing
        if (useBorderBox) {
            // In border-box, width/height includes padding and border
            box.style.width = `${width}px`;
            box.style.height = `${width}px`;
            box.style.padding = `${padding}px`;
            box.style.borderWidth = `${border}px`;
            marginEl.style.margin = `${margin}px`;
            
            // Content fills available space inside padding
            content.style.width = '100%';
            content.style.height = '100%';
        } else {
            // In content-box, width/height is content only
            const contentSize = Math.max(10, width - (padding * 2) - (border * 2));
            content.style.width = `${contentSize}px`;
            content.style.height = `${contentSize}px`;
            box.style.width = `${width}px`;
            box.style.height = `${width}px`;
            box.style.padding = `${padding}px`;
            box.style.borderWidth = `${border}px`;
            marginEl.style.margin = `${margin}px`;
        }
        
        // Update the displayed values
        document.getElementById('width-value').textContent = width;
        document.getElementById('padding-value').textContent = padding;
        document.getElementById('border-value').textContent = border;
        document.getElementById('margin-value').textContent = margin;
        
        // Update the visual indicators
        updateVisualLayers(width, padding, border, margin, useBorderBox);
        
        // Only update the content dimensions if there's no custom text
        if (!contentTextInput.value.trim()) {
            const contentSize = useBorderBox ? 
                `${width - (padding * 2) - (border * 2)}px` : 
                `${width}px`;
            content.innerHTML = `Content<br>${contentSize} × ${contentSize}`;
        }
    }
    
    // Update the visual layers (margin, border, padding)
    function updateVisualLayers(width, padding, border, margin, useBorderBox) {
        // Update the margin layer
        marginEl.style.margin = `${margin}px`;
        marginEl.style.width = `calc(100% + ${padding * 2 + border * 2}px)`;
        marginEl.style.height = `calc(100% + ${padding * 2 + border * 2}px)`;
        marginEl.style.marginLeft = `-${padding + border}px`;
        marginEl.style.marginTop = `-${padding + border}px`;
        
        // Update the border layer
        borderEl.style.width = `calc(100% + ${padding * 2}px)`;
        borderEl.style.height = `calc(100% + ${padding * 2}px)`;
        borderEl.style.marginLeft = `-${padding}px`;
        borderEl.style.marginTop = `-${padding}px`;
        borderEl.style.borderWidth = `${border}px`;
        
        // Update the padding layer
        paddingEl.style.width = '100%';
        paddingEl.style.height = '100%';
        paddingEl.style.padding = `${padding}px`;
        
        // Update the content layer
        content.style.width = useBorderBox ? '100%' : 'auto';
        content.style.height = useBorderBox ? '100%' : 'auto';
        
        // Update the labels
        updateLayerLabels(width, padding, border, margin, useBorderBox);
    }
    
    // Update the layer labels with dimensions
    function updateLayerLabels(width, padding, border, margin, useBorderBox) {
        const contentSize = useBorderBox ? 
            `${width - (padding * 2) - (border * 2)}px` : 
            `${width}px`;
            
        const paddingSize = useBorderBox ? 
            `${padding}px` : 
            `${padding * 2}px (${padding}px each side)`;
            
        const borderSize = `${border * 2}px (${border}px each side)`;
        const marginSize = `${margin * 2}px (${margin}px each side)`;
        
        // Update the labels
        content.setAttribute('data-dimensions', `${contentSize} × ${contentSize}`);
        paddingEl.querySelector('span').textContent = `Padding: ${paddingSize}`;
        borderEl.querySelector('span').textContent = `Border: ${borderSize}`;
        marginEl.querySelector('span').textContent = `Margin: ${marginSize}`;
        
        // Position the labels
        paddingEl.querySelector('span').style.top = `-${padding/2}px`;
        borderEl.querySelector('span').style.top = `${-padding - border/2}px`;
        marginEl.querySelector('span').style.top = `${-padding - border - margin/2}px`;
    }
    
    // Handle text input changes
    function handleTextInput() {
        const text = contentTextInput.value.trim();
        if (text) {
            content.textContent = text;
        } else {
            // If text is cleared, show the dimensions again
            updateBoxModel();
        }
    }
    
    // Add event listeners
    [widthInput, paddingInput, borderInput, marginInput, boxSizingCheckbox].forEach(input => {
        input.addEventListener('input', updateBoxModel);
    });
    
    // Add input event for the text input
    contentTextInput.addEventListener('input', handleTextInput);
    
    // Initialize the demo
    updateBoxModel();
});





let person = {
    name :"mhmd",
    phone:"1234589",
    age:20,
    
}

let resturant = {
    name:"qwerty",
    address:"qwerty",
    employess:["q","w","e"],
    hotline:12345,
    order : function(){
        
    }

}

resturant.name = "mhmd"



