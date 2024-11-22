import { NextResponse } from "next/server";

const posts = [
  {
    id: "1",
    title: "Getting Started with Next.js 15",
    excerpt:
      "Learn how to create a new Next.js 15 project and explore its features.",
    date: "2023-11-22",
    content:
      "<p>Next.js 15 introduces several new features and improvements. In this post, we'll explore how to get started with a new Next.js 15 project and take advantage of its latest capabilities.</p>",
  },
  {
    id: "2",
    title: "Understanding the App Router in Next.js",
    excerpt:
      "Dive deep into the App Router and learn how it simplifies routing in Next.js applications.",
    date: "2023-11-23",
    content:
      "<p>The App Router is a powerful feature in Next.js that provides an intuitive and flexible way to handle routing in your applications. This post will guide you through its core concepts and best practices.</p>",
  },
  {
    id: "3",
    title: "Optimizing Performance in Next.js Applications",
    excerpt:
      "Discover techniques to improve the performance of your Next.js applications.",
    date: "2023-11-24",
    content:
      "<p>Performance is crucial for providing a great user experience. In this post, we'll explore various techniques and built-in features of Next.js that can help you optimize your application's performance.</p>",
  },
];

export async function GET() {
  return NextResponse.json(posts);
}
