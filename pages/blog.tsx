import { useState } from 'react'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { getFiles, IFile } from '../lib/blogResources'
import { ago } from '../lib/dateFormat'
import { getAuthor } from '../lib/authors'

interface BlogProps {
  posts: IFile[]
}

export default function BlogPage({ posts }: BlogProps) {
  const [searchInput, setSearchInput] = useState('')

  const sorted = posts
    .filter((post) => post.metadata.title.toLowerCase().includes(searchInput.toLowerCase()))
    .sort((a, b) => Number(new Date(b.metadata.publishedAt)) - Number(new Date(a.metadata.publishedAt)))

  return (
    <>
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <div className="">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 pb-2">
              All Posts.
            </h1>
          </div>
          <div className="relative w-full mb-4">
            <input
              aria-label="Search articles"
              type="search"
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search articles"
              className="px-4 py-2 border border-gray-300 dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            />
            <svg
              className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <section className="pt-6 px-4 md:px-0">
          {!sorted.length && <p className="text-gray-600 dark:text-gray-400 mb-4">No posts found.</p>}
          {sorted.map((post, i) => (
            <ul key={i} className="pb-8">
              <Link href={`/blog/${post.metadata.slug}`} passHref>
                <article>
                  <h2 className="text-3xl font-bold pb-4">{post.metadata.title}</h2>
                  <p className="pb-1">{post.metadata.summary}</p>
                  <div>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <Link href="/about">{getAuthor(post.metadata.author).name}</Link>
                      {' • '}
                      {ago(post.metadata.publishedAt)}
                      {' • '}
                      {post.metadata.readingTime.text}
                    </dd>
                  </div>
                </article>
              </Link>
            </ul>
          ))}
        </section>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getFiles('posts')
  return { props: { posts } }
}
