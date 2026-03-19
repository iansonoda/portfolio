const skillIcons = {
  Figma: (
    <svg viewBox="0 0 38 57" fill="none" className="w-8 h-8">
      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
      <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
      <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
      <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 48 48" className="w-8 h-8">
      <rect width="48" height="48" rx="4" fill="#3178C6"/>
      <path d="M11 33V27H18V33H11ZM22 33V24H11V21H36V24H26V33H22Z" fill="white"/>
      <path d="M28 33V21H36V24H31V26H35V29H31V33H28Z" fill="white" opacity=".8"/>
    </svg>
  ),
  React: (
    <svg viewBox="0 0 48 48" className="w-8 h-8">
      <circle cx="24" cy="24" r="4" fill="#61DAFB"/>
      <ellipse cx="24" cy="24" rx="20" ry="8" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
      <ellipse cx="24" cy="24" rx="20" ry="8" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 24 24)"/>
      <ellipse cx="24" cy="24" rx="20" ry="8" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 24 24)"/>
    </svg>
  ),
  NextJS: (
    <svg viewBox="0 0 48 48" className="w-8 h-8">
      <circle cx="24" cy="24" r="22" fill="white"/>
      <path d="M18 15V33L33 15" fill="black"/>
      <rect x="30" y="15" width="3" height="18" rx="1.5" fill="black"/>
    </svg>
  ),
  Tailwind: (
    <svg viewBox="0 0 48 48" className="w-8 h-8">
      <path d="M14 20C16 14 20 11 28 11C36 11 38 16 39 19C40 22 42 24 46 24C38 24 36 30 28 30C20 30 18 26 14 20Z" fill="#38BDF8"/>
      <path d="M6 32C8 26 12 23 20 23C28 23 30 28 31 31C32 34 34 36 38 36C30 36 28 42 20 42C12 42 10 38 6 32Z" fill="#38BDF8"/>
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 48 48" className="w-8 h-8">
      <path d="M44.2 22.1L25.9 3.8c-1-1-2.7-1-3.7 0l-3.8 3.8 4.8 4.8c1.1-.4 2.4-.1 3.3.8.9.9 1.2 2.1.8 3.2l4.6 4.6c1.1-.4 2.4-.1 3.3.8 1.3 1.3 1.3 3.3 0 4.6-1.3 1.3-3.3 1.3-4.6 0-1-1-1.2-2.4-.7-3.5l-4.3-4.3V30c.3.1.6.3.9.6 1.3 1.3 1.3 3.3 0 4.6-1.3 1.3-3.3 1.3-4.6 0-1.3-1.3-1.3-3.3 0-4.6.3-.3.7-.6 1.1-.7V18.4c-.4-.2-.8-.4-1.1-.7-1-1-1.2-2.4-.7-3.5L16.6 9.4l-12.8 12.7c-1 1-1 2.7 0 3.7l18.3 18.3c1 1 2.7 1 3.7 0l18.3-18.3c1-1.1 1-2.7.1-3.7z" fill="#F05033"/>
    </svg>
  ),
  Supabase: (
    <svg viewBox="0 0 48 48" className="w-8 h-8">
      <path d="M27.5 44.8c-.9 1.1-2.7.5-2.7-.9V28h17.3c1.9 0 3 2.2 1.7 3.7L27.5 44.8z" fill="#3ECF8E" fillOpacity=".5"/>
      <path d="M27.5 44.8c-.9 1.1-2.7.5-2.7-.9V28h17.3c1.9 0 3 2.2 1.7 3.7L27.5 44.8z" fill="url(#sb1)"/>
      <path d="M20.5 3.2c.9-1.1 2.7-.5 2.7.9V20H6c-1.9 0-3-2.2-1.7-3.7L20.5 3.2z" fill="#3ECF8E"/>
      <defs>
        <linearGradient id="sb1" x1="24.8" y1="30.8" x2="37.2" y2="38.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#249361"/>
          <stop offset="1" stopColor="#3ECF8E"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  NodeJS: (
    <svg viewBox="0 0 48 48" className="w-8 h-8">
      <path d="M24 4L5 15v18l19 11 19-11V15L24 4z" fill="#689F63"/>
      <path d="M24 4v40l19-11V15L24 4z" fill="#55883B"/>
      <text x="14" y="30" fill="white" fontSize="14" fontWeight="bold" fontFamily="sans-serif">JS</text>
    </svg>
  ),
  MongoDB: (
    <svg viewBox="0 0 48 48" className="w-8 h-8">
      <path d="M25.6 5.5c-.5-1.2-1-2.2-1.2-2.5h-.1c-.2.3-.6 1.3-1.1 2.5-6.5 9.6-15.2 12.5-15.2 23.7 0 7.6 5.5 14.7 15.6 14.8h1.2c10.1-.1 15.6-7.2 15.6-14.8 0-11.2-8.7-14.1-14.8-23.7z" fill="#599636"/>
      <path d="M24 43.5V5c0 0 .5.5 1.2 2 6.1 9.6 14.8 12.5 14.8 23.7 0 7.1-4.8 13.3-13.5 14.5" fill="#6CAC48"/>
      <path d="M24.6 37.2s.5-11.7.7-15.4c0 0 1.2.9 1.8 2l-1.1 13.8-1.4-.4z" fill="#C2BFBF"/>
    </svg>
  ),
  Prisma: (
    <svg viewBox="0 0 48 48" className="w-8 h-8">
      <path d="M39.3 35.5L24.6 5.3c-.6-1.2-2.3-1.3-3 0L8.1 32.6c-.5.9-.1 2 .8 2.5l14.4 8.3c.5.3 1.2.3 1.7 0l13.5-5.3c.9-.4 1.3-1.4.8-2.6z" fill="#2D3748" stroke="#5A67D8" strokeWidth=".5"/>
      <path d="M24 11l12.5 24-12.5 5.5V11z" fill="#5A67D8"/>
    </svg>
  ),
  PostgreSQL: (
    <svg viewBox="0 0 48 48" className="w-8 h-8">
      <path d="M33.7 8.3c-2-1.5-5-2.3-8-2.3-3.5 0-6.5 1-8.7 2.7-3 2.3-4.7 5.7-4.7 10 0 4 1.2 7 3.5 9.5-.4 2-.4 5.5 1.3 8.5 0 0 2.8-1 6-3.5 1 .3 2.2.4 3.3.4 3 0 5.7-1 7.5-2.7 2.5-2.3 3.7-5.7 3.7-10 0-5-1.5-9.2-3.9-12.6z" fill="#336791"/>
      <path d="M24 14c-2 0-3.5 1.5-3.5 3.5S22 21 24 21s3.5-1.5 3.5-3.5S26 14 24 14z" fill="white"/>
      <ellipse cx="23" cy="17" rx="1.2" ry="1.5" fill="#336791"/>
    </svg>
  ),
  Vue: (
    <svg viewBox="0 0 48 48" className="w-8 h-8">
      <path d="M29.5 6H38L24 30 10 6h8.5L24 15.5 29.5 6z" fill="#42B883"/>
      <path d="M10 6l14 24L38 6h-8.5L24 15.5 18.5 6H10z" fill="#42B883"/>
      <path d="M18.5 6L24 15.5 29.5 6h-5L24 8l-.5-2h-5z" fill="#35495E"/>
    </svg>
  ),
  Java: (
    <svg viewBox="0 0 48 48" className="w-8 h-8">
      <path d="M36 24c0 3.3-3.1 6-7 6s-7-2.7-7-6 3.1-6 7-6 7 2.7 7 6z" fill="#EA2D2E"/>
      <path d="M21 24c0 3.3 3.1 6 7 6s7-2.7 7-6-3.1-6-7-6-7 2.7-7 6z" fill="#5382A1"/>
      <path d="M10 32c0 2.2 6.3 4 14 4s14-1.8 14-4c0-1.1-1.6-2.1-4.1-2.8-2.6 1.7-6.1 2.8-9.9 2.8s-7.3-1.1-9.9-2.8c-2.5.7-4.1 1.7-4.1 2.8z" fill="#5382A1"/>
      <path d="M24 10c-3 0-5 2-5 5v2s0 4 5 4 5-4 5-4v-2c0-3-2-5-5-5z" fill="#EA2D2E"/>
    </svg>
  ),
  "Spring Boot": (
    <svg viewBox="0 0 48 48" className="w-8 h-8">
      <path d="M24 4C13 4 4 13 4 24s9 20 20 20 20-9 20-20S35 4 24 4zm10.7 26.3l-2.1 2.1-8.6-8.6-8.6 8.6-2.1-2.1 8.6-8.6-8.6-8.6 2.1-2.1 8.6 8.6 8.6-8.6 2.1 2.1-8.6 8.6 8.6 8.6z" fill="#6DB33F"/>
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 48 48" className="w-8 h-8">
      <path d="M24 4C13.5 4 14.2 13 14.2 13H24v1.4H10.1C10.1 14.4 4 15.1 4 25.6s6.1 11.2 6.1 11.2h3.6v-5.1c0-5.8 4.7-10.5 10.5-10.5h9.8v-1.4h-9.8c-3 0-5.4-2.4-5.4-5.4V4.1s.1-.1-.1-.1z" fill="#3776AB"/>
      <path d="M24 44c10.5 0 9.8-9 9.8-9H24v-1.4h13.9c0 0 6.1-.7 6.1-11.2s-6.1-11.2-6.1-11.2h-3.6v5.1c0 5.8-4.7 10.5-10.5 10.5h-9.8v1.4h9.8c3 0 5.4 2.4 5.4 5.4v10.3c.2 0 0 .1.2.1z" fill="#FFD43B"/>
    </svg>
  ),
  SQL: (
    <svg viewBox="0 0 48 48" className="w-8 h-8">
      <path d="M24 8c-11 0-20 4.5-20 10v12c0 5.5 9 10 20 10s20-4.5 20-10v-12c0-5.5-9-10-20-10zm0 4c8.8 0 16 3.6 16 8s-7.2 8-16 8-16-3.6-16-8 7.2-8 16-8zm0 12c-8.8 0-16-3.6-16-8v4c0 4.4 7.2 8 16 8s16-3.6 16-8v-4c0 4.4-7.2 8-16 8zm0 8c-8.8 0-16-3.6-16-8v4c0 4.4 7.2 8 16 8s16-3.6 16-8v-4c0 4.4-7.2 8-16 8z" fill="#336791"/>
    </svg>
  ),
  AWS: (
    <svg viewBox="0 0 48 48" className="w-8 h-8">
      <path d="M24 8l-15 25h30L24 8z" fill="#FF9900"/>
      <path d="M24 40c-11 0-20-4.5-20-10h40c0 5.5-9 10-20 10z" fill="#232F3E"/>
    </svg>
  ),
  Docker: (
    <svg viewBox="0 0 48 48" className="w-8 h-8">
      <path d="M46.2 19.3c-.6-.7-1.5-1.1-2.5-1.1h-4.3c-.2-4.1-3.6-7.4-7.7-7.4h-3.4v-4.3c0-1.1-.9-1.9-2-1.9h-4.3v4.3h-4.3v-4.3c-1.1 0-2 .9-2 1.9v4.3h-4.3c-1.1 0-2 .9-2 2v4.3h-4.3c-1.1 0-2 .9-2 2v4.3H2c-1.1 0-2 .9-2 2v4.3c0 6.8 5.5 12.3 12.3 12.3H38c5.4 0 10.1-3.5 11.6-8.5.3-1 .4-2 .4-3v-4.3c0-1.1-.9-2-1.8-2.6z" fill="#2496ED"/>
    </svg>
  ),
};

export default function Skills({ skills }) {
  if (!skills || skills.length === 0) return null;

  return (
    <section id="skills" className="w-full bg-[#0f0f0f] py-12 md:py-12 scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-6 mb-4">
        <h2 className="text-4xl font-bold tracking-tight text-white mb-8 border-b border-[#2a2a2a] pb-4">
          My Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex items-center gap-4 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] px-5 py-4 transition-all duration-300 hover:border-[#3a3a3a] hover:bg-[#1f1f1f] hover:shadow-lg hover:shadow-black/20"
            >
              <div className="flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
                {skillIcons[skill.name] || (
                  <div className="w-8 h-8 rounded-lg bg-[#2a2a2a] flex items-center justify-center text-xs font-bold text-white/60">
                    {skill.name.slice(0, 2)}
                  </div>
                )}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white truncate">
                  {skill.name}
                </p>
                <p className="text-xs text-[#bbb] truncate">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
