import Link from "next/link";

export default function Home() {
  return (
    <article className="my-auto pt-2 flex-grow mx-auto lg:fixed lg:top-2/4 lg:left-2/4 lg:transform lg:-translate-y-1/2 lg:-translate-x-1/2">
      <p className="text-2xl font-bold text-bl dark:text-bd">Hey there! I'm</p>
      <Link href="/about">
        <h1 className="relative inline-flex flex-col-reverse sm:flex-row mb-3">
          <div className="relative inline-block text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight">
            <span className="">Zak Hargreaves</span>
          </div>
        </h1>
      </Link>
      <h3 className="text-bl dark:text-bd font-bold text-4xl pb-1">
        Senior DevOps Engineer
      </h3>
      <p className="block text-md w-[80%] md:w-[85%] sm:text-xl font-medium sm:leading-relaxed text-gray-500 dark:text-gray-400">
        <span className="duration-300 hover:text-gray-600 dark:hover:text-gray-200">
          Employed by Flutter International, Pokerstars | Sky Betting & Gaming
        </span>
        {" - "}
        <span className="duration-300 hover:text-gray-600 dark:hover:text-gray-200">
          Based in Leeds, UK
        </span>{" "}
        <br className="hidden md:inline" />
        <span className="duration-300 hover:text-gray-600 dark:hover:text-gray-200">
          Mental Health First Aider {" - "} I like to contribute to{" "}
          <Link href="/projects">open-source</Link> and&nbsp;
          <Link href="/blog">write</Link> about tech.
        </span>
      </p>
    </article>
  );
}
