export default (props) => {
  return <div>slug: {props.slug}</div>;
};

export const config = {
  amp: "hybrid",
};

export const getStaticProps = async (ctx) => {
  return {
    props: {
      slug: ctx.params.slug,
    },
    unstable_revalidate: 30,
  };
};

export const getStaticPaths = async () => {
  return { paths: [{ params: { slug: "foo" } }], fallback: true };
};
