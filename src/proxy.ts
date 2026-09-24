import { NextResponse, type NextRequest } from "next/server";
import { MAINTENANCE_MODE, renderMaintenancePage } from "@/lib/maintenance";

// Runs on every request except the static files the maintenance page itself
// needs (logo, favicon/icons) and Next's own internals. Nothing here deletes
// or rewrites any route, page, sitemap, robots entry, or the Resend contact
// wiring — it only intercepts the response while MAINTENANCE_MODE is on.
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|images/|favicon\\.ico|icon0\\.png|icon1\\.png|icon2\\.png|apple-icon\\.png).*)",
  ],
};

export default function proxy(_request: NextRequest) {
  if (!MAINTENANCE_MODE) {
    return NextResponse.next();
  }

  return new NextResponse(renderMaintenancePage(), {
    status: 503,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
      "retry-after": "3600",
    },
  });
}
