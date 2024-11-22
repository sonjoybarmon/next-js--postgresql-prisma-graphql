import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

async function getPosts() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div>
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-8">
        Latest Posts
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map(
          (post: {
            id: string;
            title: string;
            excerpt: string;
            date: string;
          }) => (
            <Card key={post.id}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Badge variant="secondary">{post.date}</Badge>
                <Link
                  href={`/posts/${post.id}`}
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4"
                >
                  Read More
                </Link>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </div>
  );
}
