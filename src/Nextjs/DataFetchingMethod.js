// Data Fetching Methods:

// 1: getServerSideProps (SSR):

// Runs on each request on the server.
// Fetches data on the server side and sends it along with the page to the client.
// Best used when data needs to be updated frequently or when handling sensitive data.

export async function getServerSideProps(context) {
  const response = await fetch("");
  const data = await response.json();

  return { props: { data } };
}

// 2: getStaticProps (SSG):

// Runs at build time.
// Generates static pages with pre-fetched data that is served via a CDN(Content delivery network).
// Ideal for content that doesn’t change frequently, like blog posts or product pages.

export async function getStaticProps() {
  const respose = await fetch("");
  const data = respose.json();
  return { props: { data } };
}

// 3: getStaticPaths:

// Used with getStaticProps to generate paths for dynamic pages at build time.
// Helps in generating static pages for dynamic routes.

export async function getStaticPaths() {
  const paths = [{ paths: { id: 1 } }, { paths: { id: 2 } }];
  return { paths, fallback: false };
}
