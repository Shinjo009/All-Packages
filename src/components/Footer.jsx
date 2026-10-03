import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-14 md:flex-row md:items-end md:justify-between md:px-6">
        <div>
          <Logo className="h-16 w-16" />
          <p className="font-display mt-4 text-4xl">SuperShyft</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/70">
            Bio-AI preventive health. Mumbai. Blood markers, lifestyle and family history, read before disease gets loud.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm">
          <a
            href="https://www.supershyft.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-cream px-4 py-2 text-ink"
          >
            supershyft.com
          </a>
          <a
            href="https://app.supershyft.com/login"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/20 px-4 py-2"
          >
            Open the app
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-4 text-xs text-cream/50 md:px-6">
        <div className="mx-auto flex max-w-6xl justify-between">
          <span>Prices exclude GST.</span>
          <span>Panels reported in the SuperShyft Bio-AI app.</span>
        </div>
      </div>
    </footer>
  )
}
