const { promises: fs } = require('fs')
const path = require('path')
const RSS = require('rss')
const matter = require('gray-matter')

async function generate() {
  const feed = new RSS({
    title: 'Zak Hargreaves',
    site_url: 'https://hrgs.dev',
    feed_url: 'https://hrgs.dev/feed.xml',
  })

  const posts = await fs.readdir(path.join(__dirname, '..', '_content', 'posts'))

  await Promise.all(
    posts.map(async (name) => {
      const content = await fs.readFile(path.join(__dirname, '..', '_content', 'posts', name))
      const frontmatter = matter(content)

      feed.item({
        title: frontmatter.data.title,
        url: 'https://hrgs.dev/blog/' + name.replace(/\.mdx?/, ''),
        date: frontmatter.data.publishedAt,
        description: frontmatter.data.summary,
      })
    }),
  )

  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }))
}

generate()
