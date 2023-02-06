interface Props {
    generatedAt: string;
}

export default function SSR({ generatedAt }: Props) {
  return generatedAt;
}

export async function getServerSideProps() {
  const generatedAt = new Date().toISOString();
  // Pass data to the page via props
  return { props: { generatedAt } };
}
