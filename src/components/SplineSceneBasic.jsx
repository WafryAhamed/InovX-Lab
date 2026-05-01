import { SplineScene } from './ui/splite';
import { Card } from './ui/card';
import { Spotlight } from './ui/spotlight';

export function SplineSceneBasic({ onLoad }) {
  return (
    <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden border-neutral-800">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="flex flex-col md:flex-row h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 text-neutral-400 text-sm mb-4 uppercase tracking-[0.3em]">
            <span>AI Solutions Platform</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Build Smarter Businesses with AI
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg">
            We design intelligent systems that automate workflows,
            analyze data, and power next-generation digital experiences.
          </p>


        </div>

        {/* Right content */}
        <div className="flex-1 relative min-h-[300px]">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
            onLoad={onLoad}
          />
        </div>
      </div>
    </Card>
  );
}
