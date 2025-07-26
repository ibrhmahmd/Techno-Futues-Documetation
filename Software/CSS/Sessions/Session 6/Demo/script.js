/**
 * Responsive Design Demo - Interactive Examples
 * Core functionality for the responsive design demo
 */

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const viewportTester = document.getElementById('viewport-tester');
    const copyButtons = document.querySelectorAll('.copy-button');
    const layoutButtons = document.querySelectorAll('.layout-btn');
    const layoutDemo = document.querySelector('.layout-demo');
    
    // Initialize
    initDemo();
    
    // Event Listeners
    window.addEventListener('resize', handleResize);
    if (menuToggle) menuToggle.addEventListener('click', toggleMenu);
    
    // Copy code buttons
    copyButtons.forEach(btn => btn.addEventListener('click', handleCopyClick));
    
    // Layout buttons
    layoutButtons.forEach(btn => {
        btn.addEventListener('click', () => applyLayout(btn.dataset.layout));
    });
    
    // Initial layout
    applyLayout('fluid');
    
    /** Toggle mobile menu */
    function toggleMenu() {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    }
    
    /** Handle viewport resize */
    function handleResize() {
        updateViewportInfo();
    }
    
    /** Update viewport information display */
    function updateViewportInfo() {
        if (viewportTester) {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const deviceType = getDeviceType(width);
            
            viewportTester.innerHTML = `
                <span>Viewport: ${width} × ${height}px</span>
                <span>Device: ${deviceType}</span>
            `;
        }
    }
    
    /** Get device type based on width */
    function getDeviceType(width = window.innerWidth) {
        if (width < 640) return 'Mobile';
        if (width < 1024) return 'Tablet';
        if (width < 1280) return 'Laptop';
        return 'Desktop';
    }
    
    /** Handle copy to clipboard */
    async function handleCopyClick(event) {
        const button = event.currentTarget;
        const codeBlock = button.closest('.code-container')?.querySelector('code');
        if (!codeBlock) return;
        
        try {
            await navigator.clipboard.writeText(codeBlock.textContent);
            button.classList.add('copied');
            button.innerHTML = '<i class="fas fa-check"></i> Copied!';
            setTimeout(() => {
                button.innerHTML = '<i class="far fa-copy"></i> Copy';
                button.classList.remove('copied');
            }, 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
            button.textContent = 'Failed to copy';
        }
    }
    
    /** Apply selected layout */
    function applyLayout(layout) {
        if (!layoutDemo) return;
        
        // Reset layout
        layoutDemo.className = 'layout-demo';
        layoutDemo.innerHTML = '';
        
        // Update active button
        layoutButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.layout === layout);
        });
        
        // Create layout content
        let content = '';
        switch (layout) {
            case 'fluid':
                content = `
                    <div class="fluid-container">
                        <div class="header">Fluid Layout</div>
                        <div class="content">Content adjusts with viewport</div>
                        <div class="sidebar">Sidebar</div>
                        <div class="footer">Footer</div>
                    </div>
                `;
                break;
                
            case 'column-drop':
                content = `
                    <div class="column-container">
                        <div class="column">Column 1</div>
                        <div class="column">Column 2</div>
                        <div class="column">Column 3</div>
                    </div>
                `;
                break;
                
            case 'layout-shifter':
                content = `
                    <div class="shifter-container">
                        <header>Header</header>
                        <div class="shifter-content">
                            <nav>Nav</nav>
                            <main>Content</main>
                            <aside>Sidebar</aside>
                        </div>
                    </div>
                `;
                break;
                
            case 'off-canvas':
                content = `
                    <div class="offcanvas-container">
                        <button class="menu-toggle">☰ Menu</button>
                        <nav class="offcanvas-nav">
                            <a href="#">Home</a>
                            <a href="#">About</a>
                            <a href="#">Contact</a>
                        </nav>
                        <main class="offcanvas-content">
                            <h3>Off-Canvas Navigation</h3>
                            <p>Click the menu button on mobile</p>
                        </main>
                    </div>
                `;
                break;
        }
        
        layoutDemo.innerHTML = content;
        layoutDemo.classList.add(`layout-${layout}`);
        
        // Add event listeners for off-canvas menu if needed
        if (layout === 'off-canvas') {
            const menuBtn = layoutDemo.querySelector('.menu-toggle');
            const nav = layoutDemo.querySelector('.offcanvas-nav');
            if (menuBtn && nav) {
                menuBtn.addEventListener('click', () => {
                    nav.classList.toggle('active');
                });
            }
        }
    }
    
    /** Initialize demo */
    function initDemo() {
        // Add any initialization code here
        updateViewportInfo();
    }
});
