# JavaScript Session Document Templates

This folder contains templates for creating beautifully formatted JavaScript session documents with proper Arabic/English support.

## Files Included

1. **Session-Template.md** - The main Markdown template for your session content
2. **style-template.css** - CSS styling for PDF generation
3. **settings-template.json** - VS Code settings for the Markdown PDF extension

## How to Use

### Setting Up a New Session

1. Create a new folder for your session (e.g., `Session 2`)
2. Inside this folder, create a `Docs` subfolder
3. Copy the template files to the `Docs` folder
4. Rename them as needed:
   - `Session-Template.md` → `Advanced JS-Session 2 (Revision).md` (or appropriate name)
   - `style-template.css` → `style.css`

### Editing the Content

1. Open the Markdown file
2. Replace the session number in the title and headers
3. Fill in each section with your content
4. Make sure to keep the Arabic text within `<div class="arabic">` tags for proper RTL support
5. Use English comments in code blocks to avoid display issues
6. Add Arabic explanations after code blocks

### VS Code Settings

1. Create a `.vscode` folder in your workspace (if it doesn't exist)
2. Copy the `settings-template.json` to this folder as `settings.json`
3. Adjust the paths to point to your CSS file location
4. Update the header and footer with correct session information

### Generating the PDF

1. Install the "Markdown PDF" extension in VS Code/Cursor
2. Open your Markdown file
3. Right-click in the editor and select "Export (pdf)"
4. The PDF will be generated with the proper styling and page breaks

## Page Break Guidelines

The CSS template includes smart page break controls:

- First page: The first two main topics
- Second page: The next two topics
- Last page: Advanced content and tables

Adjust the CSS selectors in `style.css` as needed for your document structure.

## Troubleshooting

- If Arabic text doesn't display correctly in code blocks, place it outside the code block
- If page breaks aren't working as expected, adjust the selectors in the CSS file
- For large code blocks, you may need to add manual page breaks using `<div class="page-break"></div>` 