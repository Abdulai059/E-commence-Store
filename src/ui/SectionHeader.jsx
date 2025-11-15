function SectionHeader({ title, subtitle, viewAllText = "View All", viewAllLink = "#" }) {
  return (
    <div className="mb-6">
      {/* Top Row: Title, line, and View All */}
      <div className="flex items-center gap-4">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>

        {/* Gray line between title and link */}
        <div className="flex-1 border-b border-gray-300"></div>

        {/* View All link */}
        <a
          href={viewAllLink}
          className="flex items-center gap-2 font-medium text-red-600 hover:text-red-700"
        >
          <span>{viewAllText}</span>
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      {/* Optional subtitle */}
      {subtitle && <p className="mt-2 text-base text-slate-600">{subtitle}</p>}
    </div>
  );
}

export default SectionHeader;
