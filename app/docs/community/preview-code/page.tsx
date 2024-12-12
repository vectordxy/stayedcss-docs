import Article from "@/src/components/docs/Article";
import GithubCard from "@/src/components/docs/GithubCard";

export default function page() {
  return (
    <Article title="Preview Code">
      This docomentation page is fully built with StayedCSS. If you want to know
      how to use this library with projects, you can see code in here.
      <GithubCard />
    </Article>
  );
}
