// plugin to extract h2 headings from docs and make them available globally
const fs = require('fs');
const path = require('path');

// generate heading id to match docusaurus default behavior
function generateHeadingId(text) {
  return text
    .toLowerCase()
    // remove special chars except spaces and hyphens
    .replace(/[^\w\s-]/g, '')
    // replace spaces with hyphens
    .replace(/\s+/g, '-')
    // collapse multiple hyphens
    .replace(/-+/g, '-')
    // trim hyphens from start/end
    .replace(/^-+|-+$/g, '');
}

function extractHeadingsFromMarkdown(content) {
  const headings = [];
  // match h2 headings: ## heading text
  const h2Regex = /^##\s+(.+)$/gm;
  let match;
  
  while ((match = h2Regex.exec(content)) !== null) {
    const text = match[1].trim();
    const id = generateHeadingId(text);
    
    if (id && text) {
      headings.push({ id, text });
    }
  }
  
  return headings;
}

function extractDocIdFromFrontmatter(content) {
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (frontmatterMatch) {
    const idMatch = frontmatterMatch[1].match(/^id:\s*(.+)$/m);
    if (idMatch) {
      return idMatch[1].trim();
    }
    const slugMatch = frontmatterMatch[1].match(/^slug:\s*\/(.+)$/m);
    if (slugMatch) {
      return slugMatch[1].trim();
    }
  }
  return null;
}

module.exports = function headingsExtractorPlugin(context, options) {
  return {
    name: 'headings-extractor',
    
    async loadContent() {
      const docsDir = path.join(context.siteDir, 'docs');
      const headingsMap = {};
      
      // read all markdown files in docs directory
      if (fs.existsSync(docsDir)) {
        const files = fs.readdirSync(docsDir).filter(f => f.endsWith('.md'));
        
        for (const file of files) {
          const filePath = path.join(docsDir, file);
          const content = fs.readFileSync(filePath, 'utf-8');
          const docId = extractDocIdFromFrontmatter(content) || file.replace('.md', '');
          const headings = extractHeadingsFromMarkdown(content);
          
          if (headings.length > 0) {
            headingsMap[docId] = headings;
          }
        }
      }
      
      // also process i18n docs for dutch
      const nlDocsDir = path.join(context.siteDir, 'i18n/nl/docusaurus-plugin-content-docs/current');
      if (fs.existsSync(nlDocsDir)) {
        const nlFiles = fs.readdirSync(nlDocsDir).filter(f => f.endsWith('.md'));
        for (const file of nlFiles) {
          const filePath = path.join(nlDocsDir, file);
          const content = fs.readFileSync(filePath, 'utf-8');
          const docId = extractDocIdFromFrontmatter(content) || file.replace('.md', '');
          const headings = extractHeadingsFromMarkdown(content);
          
          if (headings.length > 0) {
            // prefix with nl/ for dutch docs
            headingsMap[`nl/${docId}`] = headings;
          }
        }
      }
      
      return headingsMap;
    },
    
    async contentLoaded({ content, actions }) {
      const { setGlobalData } = actions;
      setGlobalData(content);
    },
  };
};
