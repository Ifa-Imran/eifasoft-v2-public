const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '..', 'content', 'blog');

function fixMarkdownFormatting(content) {
  // Split into frontmatter and body
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!frontmatterMatch) return content;
  
  const frontmatter = frontmatterMatch[1];
  let body = frontmatterMatch[2];
  
  // Fix pattern: text\n\n**bold**\n\nmore text -> text **bold** more text
  body = body.replace(/([a-zA-Z,;:'"!?)])\n\n\*\*([^*]+)\*\*\n\n([a-z])/g, '$1 **$2** $3');
  
  // Fix pattern: text\n\n**bold**\n\n, text -> text **bold**, text
  body = body.replace(/([a-zA-Z,;:'"!?)])\n\n\*\*([^*]+)\*\*\n\n,/g, '$1 **$2**,');
  
  // Fix pattern: text\n\n**bold**\n\n. text -> text **bold**. text  
  body = body.replace(/([a-zA-Z,;:'"!?)])\n\n\*\*([^*]+)\*\*\n\n\./g, '$1 **$2**.');
  
  // Fix pattern at end of paragraph: **bold**\n\n. -> **bold**.
  body = body.replace(/\*\*([^*]+)\*\*\n\n\./g, '**$1**.');
  
  // Fix pattern: [link](url)\n\n. -> [link](url).
  body = body.replace(/\[([^\]]+)\]\(([^)]+)\)\n\n\./g, '[$1]($2).');
  
  // Fix pattern: text\n\n[link](url)\n\n. -> text [link](url).
  body = body.replace(/([a-zA-Z,;:'"!?)])\n\n\[([^\]]+)\]\(([^)]+)\)\n\n\./g, '$1 [$2]($3).');
  
  // Fix pattern: text\n\n[link](url)\n\ntext -> text [link](url) text
  body = body.replace(/([a-zA-Z,;:'"!?)])\n\n\[([^\]]+)\]\(([^)]+)\)\n\n([a-z])/g, '$1 [$2]($3) $4');
  
  // Fix broken list items: - **Item:**\n\n  Description -> - **Item:** Description
  body = body.replace(/- \*\*([^*]+):\*\*\n\n  +/g, '- **$1:** ');
  
  // Clean up any triple+ newlines to double newlines
  body = body.replace(/\n{3,}/g, '\n\n');
  
  return `---\n${frontmatter}\n---\n${body}`;
}

// Get all MDX files
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.mdx'));

console.log(`Found ${files.length} blog files to process...`);

let fixedCount = 0;
files.forEach((file, index) => {
  const filePath = path.join(blogDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const fixed = fixMarkdownFormatting(content);
  
  if (fixed !== content) {
    fs.writeFileSync(filePath, fixed, 'utf8');
    fixedCount++;
  }
  
  if ((index + 1) % 50 === 0) {
    console.log(`Processed ${index + 1}/${files.length} files...`);
  }
});

console.log(`\nDone! Fixed formatting in ${fixedCount} files.`);
