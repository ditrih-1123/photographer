import { Button } from "@/components/ui/button";

export function HeroContent() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center text-center space-y-6 p-4">
      <div className="flex gap-4 justify-center flex-wrap">
        <Button size="lg">View Portfolio</Button>
        <Button size="lg" variant="outline">
          Contact Me
        </Button>
      </div>
      <div className="mt-8">
        <p className="text-sm text-muted-foreground">
          Scroll to explore more
        </p>
      </div>
    </div>
  );
}

