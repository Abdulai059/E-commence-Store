function SectionHeader({ title, subtitle, viewAllText = "View All", viewAllLink = "#" }) {
  return (
    <div className="mb-6">
      {/* Top Row: Title, line, and View All */}
      <div className="flex items-center gap-4">
        {/* Title */}
        <h2 className="md:text-2xl text-lg font-semibold text-gray-900">{title}</h2>

        {/* Gray line between title and link */}
        <div className="flex-1 border-b border-gray-300"></div>

        {/* View All link */}
        <a
          href={viewAllLink}
          className="hidden items-center gap-2 font-medium hover:text-red-700 md:flex"
        >
          <span className="text-red-600">{viewAllText}</span>
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      {/* Optional subtitle */}
      {subtitle && <p className="mt-2  md:text-base text-sm text-slate-600">{subtitle}</p>}
    </div>
  );
}

export default SectionHeader;
