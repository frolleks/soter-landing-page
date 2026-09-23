import Link from "next/link";
import {
  ShieldCheck,
  MessageSquareWarning,
  TimerOff,
  SlidersHorizontal,
  ScrollText,
  BellOff,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Reveal } from "@/components/reveal";
import { DiscordIcon, GitHubIcon } from "@/components/icons";

const REPO_URL = "https://github.com/frolleks/soter";
const DISCORD_URL = "https://discord.gg/xURTvZUANp";
const INVITE_URL =
  "https://discord.com/oauth2/authorize?client_id=1551459097826693130&permissions=1099713031190&integration_type=0&scope=bot";

const features = [
  {
    icon: MessageSquareWarning,
    title: "Hate speech detection",
    description:
      "Every message is scanned automatically and flagged the moment it crosses the line.",
  },
  {
    icon: ShieldCheck,
    title: "Spam filtering",
    description:
      "Repeated and low-effort spam gets caught before it floods your channels.",
  },
  {
    icon: TimerOff,
    title: "Automatic timeouts",
    description:
      "Repeat violators are timed out on their own — no mod has to be watching.",
  },
  {
    icon: BellOff,
    title: "Channel exemptions",
    description:
      "Exempt specific channels from moderation with a simple settings command.",
  },
  {
    icon: SlidersHorizontal,
    title: "Configurable thresholds",
    description:
      "Tune violation thresholds and timeout duration to fit how strict you want to be.",
  },
  {
    icon: ScrollText,
    title: "Mod action logging",
    description:
      "Every automated action is logged to a channel you choose, so nothing happens silently.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
          <span className="font-heading text-2xl">Soter</span>
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
            <a href="#features" className="hover:text-foreground">
              Features
            </a>
            <Link href={DISCORD_URL} className="hover:text-foreground">
              Community
            </Link>
          </nav>
          <Button asChild size="sm">
            <Link href={REPO_URL}>
              <GitHubIcon />
              GitHub
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* -mt-16 pulls the hero under the h-16 sticky header so it centers in the viewport */}
        <Reveal className="relative isolate -mt-16 flex min-h-dvh items-center overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center [mask-image:radial-gradient(closest-side,black,transparent)]"
          >
            <div className="absolute size-96 rounded-full bg-foreground/5 blur-3xl" />
            {[20, 32, 44, 56].map((size) => (
              <div
                key={size}
                className="absolute rounded-full border border-foreground/10"
                style={{ width: `${size}rem`, height: `${size}rem` }}
              />
            ))}
            <div className="absolute size-[38rem] animate-[spin_90s_linear_infinite] rounded-full border border-dashed border-foreground/15 motion-reduce:animate-none" />
            <ShieldCheck
              strokeWidth={0.5}
              className="size-80 text-foreground/10"
            />
          </div>
          <section className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-24 text-center">
            <Badge variant="secondary">Early development — not yet 24/7</Badge>
            <h1 className="font-heading mt-6 max-w-3xl text-5xl leading-tight sm:text-6xl">
              Moderation that watches so you don&apos;t have to
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Soter moderates mostly on its own: every message is scanned for
              hate speech and spam, and repeat violators are timed out
              automatically.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href={INVITE_URL}>
                  <DiscordIcon />
                  Add to Discord
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={REPO_URL}>
                  <GitHubIcon />
                  View on GitHub
                </Link>
              </Button>
            </div>
          </section>
        </Reveal>

        <Separator className="mx-auto max-w-5xl" />

        <Reveal>
          <section
            id="features"
            className="mx-auto w-full max-w-5xl px-6 py-24"
          >
            <h2 className="font-heading text-3xl sm:text-4xl">
              Hands-off moderation
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Set it up once, then let Soter handle the day-to-day.
            </p>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map(({ icon: Icon, title, description }) => (
                <Card key={title}>
                  <CardHeader>
                    <Icon className="size-5 text-muted-foreground" />
                    <CardTitle className="mt-3">{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>
        </Reveal>

        <Separator className="mx-auto max-w-5xl" />

        <Reveal>
          <section className="mx-auto w-full max-w-5xl px-6 py-24 text-center">
            <h2 className="font-heading text-3xl sm:text-4xl">
              Built in the open
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Soter is open source, written in TypeScript on Bun, with Jev (via
              OpenRouter) doing the message analysis. MIT licensed.
            </p>
            <div className="mt-8 flex justify-center">
              <Button asChild size="lg">
                <Link href={REPO_URL}>
                  <GitHubIcon />
                  Star it on GitHub
                </Link>
              </Button>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="mx-auto w-full max-w-5xl px-6 pb-24">
            <div className="flex flex-col items-center rounded-2xl border bg-card px-6 py-16 text-center">
              <ShieldCheck className="size-10 text-muted-foreground" />
              <h2 className="font-heading mt-6 text-3xl sm:text-4xl">
                Put Soter on watch
              </h2>
              <p className="mt-3 max-w-md text-muted-foreground">
                Add the bot to your server in a couple of clicks and let it
                handle the day-to-day moderation.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href={INVITE_URL}>
                    <DiscordIcon />
                    Add to Discord
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href={DISCORD_URL}>Join the community</Link>
                </Button>
              </div>
            </div>
          </section>
        </Reveal>
      </main>

      <footer className="border-t">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
          <span className="font-heading text-lg text-foreground">Soter</span>
          <div className="flex items-center gap-6">
            <Link href={REPO_URL} className="hover:text-foreground">
              GitHub
            </Link>
            <Link href={DISCORD_URL} className="hover:text-foreground">
              Discord
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
