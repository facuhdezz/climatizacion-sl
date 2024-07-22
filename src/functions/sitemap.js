import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const links = [
    { url: '/', changefreq: 'monthly', priority: 1.0 },
    { url: '/calefactores', changefreq: 'monthly', priority: 0.8 },
    { url: '/aires', changefreq: 'monthly', priority: 0.8 },
    { url: '/todos', changefreq: 'monthly', priority: 0.8 }
  ];

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
  
const sitemapStream = new SitemapStream({ hostname: 'https://www.climatizacionsantalucia.com.uy' });
const writeStream = createWriteStream(resolve(__dirname, '../../public/sitemap.xml'));

sitemapStream.pipe(writeStream);

links.forEach(link => sitemapStream.write(link));

sitemapStream.end();

streamToPromise(sitemapStream).then(() => {
    console.log('Sitemap creado exitosamente');
  }).catch(err => {
    console.error('Error al crear el sitemap', err);
  });