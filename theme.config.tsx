import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width="24px"
        height="24px"
      >
        <path 
        fill = "currentColor"
        d="M21,1l6.973,2c0,0-0.95,0.754-0.973,3s0,6,0,6h14l4,4l-2,1c0,0,0.338,19.454-1,23c-1.03,2.729-4.061,5.013-7,5c-4.833-0.021-6-3-6-3l2-5c0,0,0.97,1.998,3,2c1.921,0.002,2.956-1.132,3-9.5c0.045-8.723,0-11.5,0-11.5H27c0,0,0.551,16.428-16,28c-1.889-2.317-4-5-4-5s12.997-7.139,14-23c-7.061-0.095-12.043,0.15-14,1l-2-7h16V1z" />
      </svg>
      <span style={{ marginLeft: ".4em", fontWeight: 600 }}>Karasu</span>
    </>
  ),
  head: () => {
    const { asPath } = useRouter()
    const { frontMatter } = useConfig()
    return <>
      <meta property="og:url" content={`https://my-app.com${asPath}`} />
      <meta property="og:title" content={frontMatter.title || 'Karasu'} />
      <meta property="og:description" content={frontMatter.description || 'A next generation LMS'} />
    </>
  },
  project: {
    link: "https://github.com/CoursifyStudios",
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: <span>
      © {new Date().getFullYear()}  <a href="https://coursify.studio" target="_blank">Coursify Studios.</a>
    </span>,
  },
  navigation: {
    prev: true,
    next: true
  },
};

export default config;
