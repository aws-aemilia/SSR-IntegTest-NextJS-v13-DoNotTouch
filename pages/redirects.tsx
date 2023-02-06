import { useRouter } from "next/router";

export default function Redirects() {
  const { pathname, query, locale } = useRouter();
  return (
    <>
      <div>Path={pathname}</div>
      <div>Query={query.q}</div>
      <div>Locale={locale}</div>
    </>
  );
}
