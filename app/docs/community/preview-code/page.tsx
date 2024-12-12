import Article from "@/src/components/docs/Article";
import GithubCard from "@/src/components/docs/GithubCard";

export default function page() {
  return (
    <Article title="Preview Code">
      This docomentation page is fully built with StayedCSS. If you want to know
      how to use this library with projects, you can see code in here.
      <GithubCard
        link="https://github.com/vectordxy/stayedcss-docs"
        projectTitle="stayedcss-docs"
        description="StayedCSS is a static CSS library designed for Next.js projects. It
        provides full support for both server and client components, offering
        various styling features such as pseudo-elements, media queries, and
        dark mode with no flickering. Additionally, it adopts the same syntax as
        standard CSS, making it easy to integrate into your projects."
      />
    </Article>
  );
}
