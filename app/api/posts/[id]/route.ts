import { NextResponse } from "next/server";

const posts = [
  {
    id: "1",
    title: "Getting Started with Next.js 15",
    excerpt:
      "Learn how to create a new Next.js 15 project and explore its features.",
    date: "2023-11-22",
    content:
      "<p>Next.js 15 introduces several new features and improvements. In this post, we'll explore how to get started with a new Next.js 15 project and take advantage of its latest capabilities.</p><p>Some key features include:</p><ul><li>Improved performance</li><li>Enhanced developer experience</li><li>Better TypeScript support</li></ul><p>Stay tuned as we dive deeper into each of these aspects!</p>",
  },
  {
    id: "2",
    title: "Understanding the App Router in Next.js",
    excerpt:
      "Dive deep into the App Router and learn how it simplifies routing in Next.js applications.",
    date: "2023-11-23",
    content:
      "<p>The App Router is a powerful feature in Next.js that provides an intuitive and flexible way to handle routing in your applications. This post will guide you through its core concepts and best practices.</p><p>Key topics we'll cover:</p><ul><li>File-based routing</li><li>Nested routes</li><li>Dynamic routes</li><li>Route groups</li></ul><p>By the end of this post, you'll have a solid understanding of how to structure your Next.js application using the App Router.</p>",
  },
  {
    id: "3",
    title: "Optimizing Performance in Next.js Applications",
    excerpt:
      "Discover techniques to improve the performance of your Next.js applications.",
    date: "2023-11-24",
    content:
      "<p>Performance is crucial for providing a great user experience. In this post, we'll explore various techniques and built-in features of Next.js that can help you optimize your application's performance.</p><p>We'll cover:</p><ul><li>Image optimization</li><li>Code splitting</li><li>Server-side rendering vs. static site generation</li><li>Caching strategies</li></ul><p>Implement these techniques to create lightning-fast Next.js applications!</p>",
  },
];

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const post = posts.find((p) => p.id === params.id);

  if (post) {
    return NextResponse.json(post);
  } else {
    return new NextResponse("Post not found", { status: 404 });
  }
}
