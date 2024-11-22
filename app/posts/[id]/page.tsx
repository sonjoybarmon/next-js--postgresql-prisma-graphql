import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

async function getPost(id: string) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    notFound();
  }
  return res.json();
}

export default async function Post({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);

  return (
    <article className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
        {post.title}
      </h1>
      <div className="flex items-center space-x-2 mb-8">
        <Badge variant="secondary">{post.date}</Badge>
        <Separator orientation="vertical" className="h-4" />
        <span className="text-sm text-muted-foreground">5 min read</span>
      </div>
      <div
        className="prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
