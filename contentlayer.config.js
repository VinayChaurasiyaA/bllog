import { defineDocumentType, makeSource } from "@contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import GithubSlugger from "github-slugger";
import { visit } from "unist-util-visit";

export const Post = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `**/**/*.mdx`,
  contentType: "mdx",
  // this is the most significant part
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "date", required: true },
    updatedAt: { type: "date", required: true },
    description: { type: "string", required: true },
    image: { type: "string" },
    author: { type: "string", required: true },
    isPublished: { type: "boolean", default: true },
    // tags:{type:"list" , of:"string"},
    tags: { type: "list", of: { type: "string" } },
    // slug: { type: "string", required: true },
    // publishedDate: { type: "date", required: true },
    // updatedDate: { type: "date", required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/blogs/${post._raw.flattenedPath}`,
    },
    toc: {
      type: "json",
      resolve: async (doc) => {
        const regulrExp = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
        const slugger = new GithubSlugger();
        const headings = Array.from(doc.body.raw.matchAll(regulrExp)).map(
          ({ groups }) => {
            const flag = groups?.flag;
            const content = groups?.content;

            return {
              level:
                flag?.length == 1 ? "one" : flag?.length == 2 ? "two" : "three",
              text: content,
              slug: content ? slugger.slug(content) : undefined,
            };
          }
        );

        return headings;
      },
    },
  },
}));

// import { transformerNotationDiff } from "shikiji-transformers";

const codeOptions = {
  dark: "github-dark-dimmed",
  light: "github-light",
};

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "pre") {
            const [codeEl] = node.children;

            if (codeEl.tagName !== "code") return;
            // whichever element has a code tag will be given a raw property
            node.raw = codeEl.children?.[0].value;
          }
        });
      },
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "append" }],
      [rehypePrettyCode, codeOptions],
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "div") {
            if (!("data-rehype-pretty-code-fragment" in node.properties)) {
              return;
            }

            for (const child of node.children) {
              if (child.tagName === "pre") {
                child.properties["raw"] = node.raw;
              }
            }
          }
        });
      },
    ],
  },
});
// my mdx are nto working
// because contentlayer should have a content tye of mdx
