// Soter's mark: a Greek hoplite shield (aspis) bearing Σ, for Σωτήρ ("saviour").
// Colors are fixed rather than themed so the exported favicon and bot avatar match the site.
export function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" {...props}>
      <circle cx="32" cy="32" r="32" fill="#0a0a0a" />
      <circle cx="32" cy="32" r="27" fill="none" stroke="#fafafa" strokeWidth="4" />
      <path
        d="M20 17h24v9l-3.5-3H29l8 9-8 9h11.5l3.5-3v9H20v-4.9L29 32l-9-10.1z"
        fill="#fafafa"
      />
    </svg>
  );
}
