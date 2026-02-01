export const CheckIcon = () => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#4F46E5', stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: '#9333EA', stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>

      <rect width="200" height="200" rx="45" fill="url(#gradient)" />

      <circle
        cx="100"
        cy="100"
        r="45"
        stroke="white"
        strokeWidth="6"
        fill="none"
      />

      <path
        d="M 75 100 L 92 117 L 125 84"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}
