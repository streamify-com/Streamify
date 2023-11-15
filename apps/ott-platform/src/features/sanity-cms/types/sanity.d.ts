type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Post extends Base {
  title: string;
  slug: Slug;
  video: Video;
  author: Author;
  mainImage: Image;
  publishedAt: Date;
  categories: Category[];
  label: Category[];
  shortStory: Block[];
  fullStory: Block[];
  people: Category[];
}

interface Author extends Base {
  bio: Block[];
  image: Image;
  name: string;
  slug: Slug;
}

interface Image {
  _type: "image";
  asset: Reference;
}

interface Video {
  _type: "mux.video";
  asset: Reference;
}

interface Reference {
  _ref: string;
  _type: "reference";
}

interface Date {
  _ref: string;
  _type: "datetime";
}

interface Slug {
  _type: "slug";
  current: string;
}

interface Block {
  _key: string;
  _type: "block";
  children: Span[];
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Span {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
}

interface Category extends Base {
  description: string;
  title: string;
}

interface mainImage {
  _type: "image";
  asset: Reference;
}

interface Title {
  _type: "string";
  current: string;
}
