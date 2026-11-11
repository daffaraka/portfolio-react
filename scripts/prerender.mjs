import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

async function prerender() {
  console.log('🚀 Starting Static Site Generation / Prerendering...');

  const templatePath = path.resolve(rootDir, 'build/index.html');
  if (!fs.existsSync(templatePath)) {
    throw new Error('build/index.html not found! Run "vite build" first.');
  }

  const ssrBundlePath = path.resolve(rootDir, 'build-ssr/entry-server.mjs');
  if (!fs.existsSync(ssrBundlePath)) {
    throw new Error('build-ssr/entry-server.mjs not found! Run SSR build first.');
  }

  // Import SSR bundle
  const { render, portfolios, createSlug } = await import(pathToFileURL(ssrBundlePath).href);
  const baseTemplate = fs.readFileSync(templatePath, 'utf8');

  // 1. Prerender Homepage ('/')
  console.log('📄 Prerendering "/" (Homepage)...');
  const homeHtml = render('/');
  const homeFinal = baseTemplate.replace(
    /<div id="root">[\s\S]*?<\/div>/,
    `<div id="root">${homeHtml}</div>`
  );
  fs.writeFileSync(templatePath, homeFinal, 'utf8');
  console.log('✅ Homepage pre-rendered into build/index.html');

  // 2. Prerender each portfolio detail page
  let count = 0;
  for (const project of portfolios) {
    const slug = createSlug(project.title);
    const pageUrl = `/portfolio/${slug}`;
    console.log(`📄 Prerendering "${pageUrl}"...`);

    const appHtml = render(pageUrl);

    const title = `${project.title} — Portfolio Daffa Raka Mahendra`;
    const rawDesc = `${project.title} — ${project.desc} Dibangun dengan ${project.tech.join(', ')} oleh Daffa Raka Mahendra.`;
    const desc = rawDesc.length > 155 ? `${rawDesc.slice(0, 152)}...` : rawDesc;
    const canonical = `https://daffa-raka.vercel.app/portfolio/${slug}`;
    const ogImage = project.images && project.images[0]
      ? `https://daffa-raka.vercel.app${encodeURI(project.images[0])}`
      : 'https://daffa-raka.vercel.app/og-image.png';

    let pageHtml = baseTemplate
      // Title
      .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
      .replace(/<meta name="title" content="[^"]*"/, `<meta name="title" content="${title}"`)
      // Description
      .replace(/<meta name="description" content="[^"]*"/, `<meta name="description" content="${desc}"`)
      // Canonical
      .replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${canonical}"`)
      // Open Graph
      .replace(/<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${title}"`)
      .replace(/<meta property="og:description" content="[^"]*"/, `<meta property="og:description" content="${desc}"`)
      .replace(/<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="${canonical}"`)
      .replace(/<meta property="og:image" content="[^"]*"/, `<meta property="og:image" content="${ogImage}"`)
      .replace(/<meta property="og:image:secure_url" content="[^"]*"/, `<meta property="og:image:secure_url" content="${ogImage}"`)
      // Twitter
      .replace(/<meta name="twitter:title" content="[^"]*"/, `<meta name="twitter:title" content="${title}"`)
      .replace(/<meta name="twitter:description" content="[^"]*"/, `<meta name="twitter:description" content="${desc}"`)
      .replace(/<meta name="twitter:url" content="[^"]*"/, `<meta name="twitter:url" content="${canonical}"`)
      .replace(/<meta name="twitter:image" content="[^"]*"/, `<meta name="twitter:image" content="${ogImage}"`)
      // App root container
      .replace(/<div id="root">[\s\S]*?<\/div>/, `<div id="root">${appHtml}</div>`);

    const outDir = path.resolve(rootDir, 'build/portfolio', slug);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.resolve(outDir, 'index.html'), pageHtml, 'utf8');
    count++;
  }

  console.log(`✅ Pre-rendered ${count} portfolio detail pages.`);

  // 3. Clean up temporary build-ssr folder
  const ssrDir = path.resolve(rootDir, 'build-ssr');
  if (fs.existsSync(ssrDir)) {
    fs.rmSync(ssrDir, { recursive: true, force: true });
    console.log('🧹 Cleaned up temporary build-ssr directory.');
  }

  console.log('✨ Prerendering completed successfully! All routes now contain full static HTML.');
}

prerender().catch((err) => {
  console.error('❌ Prerendering failed:', err);
  process.exit(1);
});
