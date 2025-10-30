export default function handler(req, res) {
  const { title, description, image, url } = req.query;

  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:type" content="website" />
    <link rel="canonical" href="https://khulo.gov.ge" />
    <title>${title}</title>
  </head>
  <body>
    <script>
      window.location.href = "${url}";
    </script>
  </body>
  </html>
  `;

  res.setHeader("Content-Type", "text/html");
  res.send(html);
}