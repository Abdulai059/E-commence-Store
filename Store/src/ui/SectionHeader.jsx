function SectionHeader({
  title,
  subtitle,
  showViewAll = true,
  viewAllText = "View All",
  viewAllLink = "#",
}) {
  return (
    <div className="mb-6">
      {/* Top Row: Title, line, and View All */}
      <div className="flex items-center gap-4">
        {/* Title */}
        <span>
          <h2 className="text-lg font-semibold text-gray-900 md:text-2xl">{title}</h2>
          <div className=" h-[3px] w-32 bg-gradient-to-l from-transparent to-red-600"></div>
        </span>

        {/* Gray line between title and link */}
        <div className="flex-1 border-b border-gray-300"></div>

        {/* View All link */}
        {showViewAll && (
          <a
            href={viewAllLink}
            className="hidden items-center gap-2 font-medium hover:text-red-700 md:flex"
          >
            <span className="text-red-600">{viewAllText}</span>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        )}
      </div>

      {/* Optional subtitle */}
      {subtitle && <p className="mt-2 text-sm text-slate-600 md:text-base">{subtitle}</p>}
    </div>
  );
}

export default SectionHeader;
