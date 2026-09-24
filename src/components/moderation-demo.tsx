"use client";

import { useEffect, useState } from "react";
import { Hash, Trash2 } from "lucide-react";
import { cn } from "cn";
import { Logo } from "@/components/logo";

// How long each frame stays up, in ms: empty, posted, flagged by Jev, deleted, DM sent.
const FRAMES = [800, 1000, 1600, 1200, 4000];
const LAST = FRAMES.length - 1;

export function ModerationDemo() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    // With reduced motion, jump to the last frame and stay there.
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = setTimeout(
      () => setFrame((f) => (still ? LAST : (f + 1) % FRAMES.length)),
      still ? 0 : FRAMES[frame],
    );
    return () => clearTimeout(timer);
  }, [frame]);

  return (
    <figure className="mx-auto w-full max-w-md text-sm">
      <figcaption className="sr-only">
        Example: a member posts hate speech, Soter deletes it, and the member
        gets a DM explaining why.
      </figcaption>
      <div aria-hidden className="space-y-3">
        <div className="rounded-xl border bg-card">
          <div className="flex items-center gap-1.5 border-b px-4 py-2.5 font-medium">
            <Hash className="size-4 text-muted-foreground" />
            general
          </div>
          <div className="space-y-4 p-4">
            <Message avatar="M" name="maya">
              gg everyone, same time tomorrow?
            </Message>
            <div className="grid">
              <div
                className={cn(
                  "col-start-1 row-start-1 -m-2 rounded-lg p-2 transition-all duration-500",
                  frame === 0 && "translate-y-2 opacity-0",
                  frame === 2 && "bg-destructive/10",
                  frame >= 3 && "scale-95 opacity-0 blur-sm",
                )}
              >
                <Message
                  avatar="A"
                  name="anon_7713"
                  tag={
                    <span
                      className={cn(
                        "rounded bg-destructive/15 px-1.5 font-mono text-xs text-destructive transition-opacity",
                        frame !== 2 && "opacity-0",
                      )}
                    >
                      Jev · hate speech 0.97
                    </span>
                  }
                >
                  {/* blurred placeholder so the page never shows actual hate speech */}
                  <span className="blur-[4px]">message hidden for this demo</span>
                </Message>
              </div>
              <div
                className={cn(
                  "col-start-1 row-start-1 flex items-center gap-2 self-center text-muted-foreground italic transition-opacity duration-500",
                  frame < 3 && "opacity-0",
                )}
              >
                <Trash2 className="size-4" />
                Deleted by Soter · hate speech
              </div>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "rounded-xl border bg-card p-4 transition-all duration-500",
            frame < LAST && "translate-y-2 opacity-0",
          )}
        >
          <Message
            avatar={<Logo className="size-8" />}
            name="Soter"
            tag={
              <>
                <span className="rounded bg-[#5865f2] px-1 text-[10px] font-semibold text-white">
                  APP
                </span>
                <span className="ml-auto text-xs text-muted-foreground">
                  DM to anon_7713
                </span>
              </>
            }
          >
            Your message was removed because it was flagged as hate speech.
          </Message>
        </div>
      </div>
    </figure>
  );
}

function Message({
  avatar,
  name,
  tag,
  children,
}: {
  avatar: React.ReactNode;
  name: string;
  tag?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <div className="grid size-8 shrink-0 place-items-center rounded-full bg-muted text-xs font-medium">
        {avatar}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-medium">{name}</span>
          {tag}
        </div>
        <p className="mt-0.5 text-muted-foreground">{children}</p>
      </div>
    </div>
  );
}
