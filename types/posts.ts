export type Post = {
  notFound?: boolean;
  frontmatter: {
    title: string;
    sub_title?: string;
    description?: string;
    image?: string;
    date?: string;
  };
  slug?: string;
  content?: string;
};
