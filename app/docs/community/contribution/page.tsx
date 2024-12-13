import Article from "@/src/components/docs/Article";
import Section from "@/src/components/docs/Section";
import GithubCard from "@/src/components/docs/GithubCard";
import Content from "@/src/components/docs/Content";
import { st } from "stayedcss";
import { colors } from "@/src/constants/colors";
import OpenLink from "@/src/assets/svg/OpenLink";
import { boldFont } from "@/src/constants/fonts";

export default function page() {
  return (
    <Article title="Contribution">
      <Section title="Welcome!">
        Thank you for your interest in contributing to this project! As the sole
        developer of this library, I truly appreciate your support and ideas to
        make it even better. Whether it's fixing a bug, suggesting a feature, or
        improving the documentation, every contribution matters.
      </Section>

      <Section title="How You Can Contribute">
        <Content title="1. Report Issues">
          If you find a bug or have a suggestion, please open an issue on
          GitHub.
        </Content>
        <Content title="2. Submit Pull Requests">
          Feel free to fork this repository, make changes, and submit a Pull
          Request.
        </Content>
        <GithubCard
          link="https://github.com/vectordxy/stayedcss/issues"
          projectTitle="stayedcss"
        >
          <div className={style.githubCardContent}>
            StayedCSS is a static CSS library designed for*Next.js App Router
            offering full support for both server and client components. With a
            simple syntax similar to basic CSS, it enables efficient styling and
            aims to be the next-generation CSS library for the Next.js App
            Router. Currently in its beta version, StayedCSS is rapidly
            improving in optimization and stability. It will continue to evolve
            to deliver a better styling experience for your projects.
          </div>
        </GithubCard>
        <div className={style.linkContainer}>
          Please make sure to follow the PR and commit message guidelines when
          contributing.
          <a
            className={style.linktag}
            target="_blank"
            href="https://github.com/vectordxy/stayedcss/issues"
          >
            <span className={style.text}>Guidelines </span> <OpenLink />
          </a>
        </div>
      </Section>

      <Section title="Have Questions or Feedback?">
        If you have any questions or suggestions, please ㄴopen an issue or
        reach out via GitHub. I'm always happy to hear from contributors like
        you!
      </Section>
    </Article>
  );
}

const style = st({
  componentId: "app/docs/contribution",
  linkContainer: {
    display: "flex",
  },
  linktag: {
    color: colors[5],
    display: "flex",
    alignItems: "center",
    marginLeft: 6,
  },
  text: {
    marginRight: 4,
    fontSize: 14,
  },
  githubCardContent: {
    padding: "0 12px",
  },
});
