interface Props {
    generatedAt: string;
}

export default function ISR({ generatedAt }: Props) {
  return generatedAt;
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const generatedAt = new Date().toISOString();
  return {
    props: {
      generatedAt,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 5 seconds
    revalidate: 5, // In seconds
  };
}
