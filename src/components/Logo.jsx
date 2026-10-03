export default function Logo({ className = 'h-10 w-10', invert = false }) {
  return (
    <img
      src="/logo.svg"
      alt="SuperShyft"
      className={className}
      style={invert ? { filter: 'brightness(0)' } : undefined}
    />
  )
}
