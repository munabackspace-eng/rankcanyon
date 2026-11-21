/**
 * Layout for all public marketing pages.
 *
 * `ensureStatic = "navigation"` makes the build fail if any marketing route
 * (or a layout above it) starts depending on request-time data — guaranteeing
 * these pages stay fully prerendered and CDN-cacheable.
 */
export const ensureStatic = "navigation";

export default function MarketingLayout({ children }: LayoutProps<"/">) {
  return (
    <main id="main-content" className="flex-1">
      {children}
    </main>
  );
}
