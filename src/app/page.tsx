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
  "https://discord.com/oauth2/authorize?client_id=1551459097826693130&permissions=201403398&integration_type=0&scope=bot";

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

const commands = [
  { name: "/ping", description: "Check that Soter is online." },
  { name: "/help", description: "Show a usage guide." },
  {
    name: "/settings exempt-add|remove|list",
    description: "Manage channels exempt from moderation.",
  },
  { name: "/settings hate-speech", description: "Toggle the hate speech filter." },
  {
    name: "/settings mod-log-channel",
    description: "Set where moderation actions get logged.",
  },
  {
    name: "/settings timeout-config",
    description: "Configure violation thresholds and timeout duration.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
          <span className="font-heading text-2xl">Soter</span>
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
            <a href="#features" className="hover:text-foreground">
              Features
            </a>
            <a href="#commands" className="hover:text-foreground">
              Commands
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
        <Reveal className="flex min-h-dvh items-center">
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
          <section id="features" className="mx-auto w-full max-w-5xl px-6 py-24">
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
          <section id="commands" className="mx-auto w-full max-w-5xl px-6 py-24">
            <h2 className="font-heading text-3xl sm:text-4xl">Commands</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Everything is configured through slash commands.
            </p>
            <div className="mt-12 divide-y rounded-lg border">
              {commands.map((command) => (
                <div
                  key={command.name}
                  className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                >
                  <code className="font-mono text-sm">{command.name}</code>
                  <span className="text-sm text-muted-foreground">
                    {command.description}
                  </span>
                </div>
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
              Soter is open source, written in TypeScript on Bun, with Jev
              (via OpenRouter) doing the message analysis. MIT licensed.
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
      </main>

      <Reveal>
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
      </Reveal>
    </div>
  );
}
