import Image from "next/image";
import { blogPosts } from "../data/blogPost";

export default function K72BlogPage() {

  return (
    <div className="w-full h-screen bg-white text-black font-sans px-4 md:px-12 pt-[50vh]">
      {/* Header */}
      <div className="flex justify-between items-center py-6 border-b border-black">
        <h1 className="text-4xl md:text-5xl font-black">Blog</h1>
        <nav className="flex gap-6 text-lg">
          <span className="cursor-pointer hover:underline">Categories: All</span>
          <span className="cursor-pointer hover:underline">Design</span>
          <span className="cursor-pointer hover:underline">Tech & AI</span>
          <span className="cursor-pointer hover:underline">Account</span>
        </nav>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        {blogPosts.map((post) => (
          <a
            key={post.id}
            href={post.link}
            className="block group cursor-pointer"
          >
            {/* Image */}
            <div className="relative w-full h-[350px] md:h-[420px] rounded-3xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Meta */}
            <div className="flex items-center gap-2 mt-4 text-sm">
              <span className="text-black">●</span>
              <p>{post.date}</p>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-black leading-tight mt-2 group-hover:underline">
              {post.title}
            </h2>

            {/* Author */}
            <p className="mt-2 text-lg font-medium">{post.author}</p>
          </a>
        ))}
      </div>
    </div>
  );
}