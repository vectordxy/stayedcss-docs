import Article from "@/src/components/docs/Article";
import Section from "@/src/components/docs/Section";
import GithubCard from "@/src/components/docs/GithubCard";
import Content from "@/src/components/docs/Content";
import { applyStyle } from "@/src/utils/getModule";
import { colors } from "@/src/constants/colors";
import OpenLink from "@/src/assets/svg/OpenLink";

export default function page() {
  return (
    <Article title="Contribution">
      <Section title="Welcome">
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
          projectTitle="stayedcss-docs"
          description="StayedCSS is a static CSS library designed for Next.js projects. It
        provides full support for both server and client components, offering
        various styling features such as pseudo-elements, media queries, and
        dark mode with no flickering. Additionally, it adopts the same syntax as
        standard CSS, making it easy to integrate into your projects."
        />
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

const style = applyStyle({
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
});
