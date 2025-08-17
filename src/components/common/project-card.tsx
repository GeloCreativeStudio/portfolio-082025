import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ExternalLink, Code2 } from 'lucide-react';

interface ProjectCardProps {
  name: string;
  role: string;
  avatar: string;
  codeLink: string;
  demoLink: string;
  index: number;
  imageCredit?: {
    artist: string;
    artistLink: string;
  };
}

export default function ProjectCard({
  name,
  role,
  avatar,
  codeLink,
  demoLink,
  index,
  imageCredit,
}: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden">
      {/* Image Container */}
      <div className="relative">
        <Image
          className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
          src={avatar}
          alt={`${name} project screenshot`}
          width={826}
          height={1239}
          priority={false}
        />

        {/* Image Credit Overlay - Shows on hover */}
        {imageCredit && (
          <div className="absolute bottom-2 left-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="rounded-md bg-black/70 px-2 py-1 text-xs text-white backdrop-blur-sm">
              Illustration by{' '}
              <a
                href={imageCredit.artistLink}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {imageCredit.artist}
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
        <div className="flex justify-between">
          <h3 className="text-base font-medium transition-all duration-500 group-hover:tracking-wider">
            {name}
          </h3>
          <span className="text-xs">_0{index + 1}</span>
        </div>

        <div className="mt-1 flex items-center justify-between">
          <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            {role}
          </span>
        </div>

        {/* Action Buttons - Always visible */}
        <div className="mt-4 flex gap-2">
          <Button asChild variant="outline" size="sm" className="flex-1 justify-center">
            <Link href={codeLink} target="_blank" rel="noopener noreferrer">
              <Code2 size={16} />
              Code
            </Link>
          </Button>
          <Button asChild variant="default" size="sm" className="flex-1 justify-center">
            <Link href={demoLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} />
              Demo
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
