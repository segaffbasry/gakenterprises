import { PageHead } from "@/components/Page";
import { Button } from "@/components/ui";

export default function NotFound() {
  return <PageHead title="Page not found" crumbs={[{ name: "404" }]}>
    <div className="page-lede" data-rise><Button href="/" tone="white" arrow>Home</Button></div>
  </PageHead>;
}
