import { useRouter } from "next/router";

export default function Locales() {
  const { locale } = useRouter();
  return locale;
}
