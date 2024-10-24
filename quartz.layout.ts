import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [Component.LinksHeader()],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "Email me":"mailto:niccolo.zanotti@protonmail.com?&bcc=niccolo.zanotti@icloud.com",
       GitHub: "https://github.com/niccolozanotti/",
      "LinkedIn": "https://www.linkedin.com/in/niccolo-zanotti/",
      "X": "https://x.com/niccolozanotti" ,
      "Source": "https://github.com/niccolozanotti/website" ,
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    // Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    // Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
    Component.Graph({localGraph: {
      showTags: false,
      }, globalGraph: {
      showTags: false,
      }}),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    // Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.Backlinks(),
    Component.Graph({localGraph: {
    showTags: false,
  }, globalGraph: {
    showTags: false,
  }}),
  ],
}
