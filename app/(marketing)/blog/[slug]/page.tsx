type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-6">Blog Post: {slug}</h1>
      <p className="text-muted-foreground">Blog post content will be here.</p>
    </div>
  );
}



