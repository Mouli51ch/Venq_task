"use client"

export default function VenqLogo() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-white">
      <div className="w-full max-w-md">
        <svg viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg" className="w-full">
          {/* V */}
          <path d="M20,20 L50,100 L80,20" stroke="black" strokeWidth="10" fill="none" />

          {/* E (three horizontal lines) */}
          <line x1="100" y1="30" x2="160" y2="30" stroke="black" strokeWidth="10" />
          <line x1="100" y1="60" x2="160" y2="60" stroke="black" strokeWidth="10" />
          <line x1="100" y1="90" x2="160" y2="90" stroke="black" strokeWidth="10" />

          {/* N */}
          <path d="M180,20 L180,100 M180,20 L240,100 M240,20 L240,100" stroke="black" strokeWidth="10" fill="none" />

          {/* Q */}
          <circle cx="300" cy="60" r="40" stroke="black" strokeWidth="10" fill="none" />
          <line x1="320" y1="90" x2="320" y2="110" stroke="black" strokeWidth="10" />
        </svg>
      </div>
    </div>
  )
}
