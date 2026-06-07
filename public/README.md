# Wenthura Website — Deployment Package
## File Structure

wenthura-site/
├── index.html          ← Main website (133 KB — all CSS & JS inline)
├── .htaccess           ← Apache configuration (security, caching, compression)
└── img/
    ├── logo.png        ← Wenthura logo (19 KB)
    ├── doodlenest.png  ← DoodleNest imagery (275 KB)
    ├── nena-ai.png     ← Nena AI imagery (213 KB)
    ├── autoflow.png    ← AutoFlow imagery (292 KB)
    ├── talent-acquisition.png   ← TAaaS imagery (221 KB)
    ├── dedicated-team.png       ← Dedicated Team imagery (231 KB)
    ├── product-rnd.png          ← Product R&D imagery (246 KB)
    ├── managed-services.png     ← Managed Services imagery (178 KB)
    └── partner-solutions.png    ← Partner Solutions imagery (254 KB)

## How to Deploy

### Option 1 — cPanel File Manager (easiest)
1. Log in to your hosting cPanel
2. Open File Manager → navigate to public_html
3. Backup your existing index.html (rename it to index_old.html)
4. Upload ALL files maintaining the folder structure:
   - index.html → public_html/index.html
   - .htaccess  → public_html/.htaccess
   - img/ folder → public_html/img/ (with all images inside)
5. Visit your domain — done!

### Option 2 — FTP (FileZilla / Cyberduck)
1. Connect via FTP to your server
2. Navigate to public_html (or www)
3. Upload index.html, .htaccess, and the img/ folder
4. Ensure folder structure is preserved

### Option 3 — SSH / SCP
scp -r wenthura-site/* user@yourserver.com:public_html/

## Important Notes
- .htaccess works on Apache servers (most shared hosts: cPanel, GoDaddy, Namecheap, SiteGround etc.)
- If your host uses Nginx, ask them to add the equivalent headers (or request the nginx.conf version)
- To enable HTTPS redirect, uncomment the HTTPS lines in .htaccess after SSL is active
- Images are cached for 1 year — if you update an image, rename the file to bust the cache

## Performance After Deployment
- HTML: 133 KB (down from 8 MB — 98% smaller)
- Images: cached for 1 year after first load
- Gzip compression: enabled via .htaccess
- Repeat visits: near-instant (everything cached)

## Social Media
- LinkedIn: https://www.linkedin.com/company/wenthurasolutions/
- X:        https://x.com/wenthuras
- Facebook: https://www.facebook.com/wenthurasolutions/
