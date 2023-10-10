import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { any } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}

interface ParagraphData {
  text: string;
}

interface HeaderData {
  text: string;
  level: number;
}

interface ListData {
  items: string[];
  style: string;
}

interface ImageData {
  file: {
    url: string;
  };
  caption: string;
}

interface Block {
  type: string;
  data: ParagraphData | HeaderData | ListData | ImageData;
}

interface EditorData {
  blocks: Block[];
}

interface Mappings {
  [key: string]: (block: Block) => string;
}

export function convertToHtml(editorJson: EditorData): string {
  const mappings = {
    paragraph: (block: { data: ParagraphData }) => `<p>${block.data.text}</p>`,
    header: (block: { data: HeaderData }) =>
      `<h${block.data.level}>${block.data.text}</h${block.data.level}>`,
    list: (block: { data: ListData }) => {
      const listItems = block.data.items
        .map((item) => `<li>${item}</li>`)
        .join("");
      return block.data.style === "ordered"
        ? `<ol>${listItems}</ol>`
        : `<ul>${listItems}</ul>`;
    },
    image: (block: { data: ImageData }) =>
      `<img src="${block.data.file.url}" alt="${block.data.caption}" title="${block.data.caption}" />`,
    // Add more block type handlers as needed
  };

  return editorJson.blocks
    .map((block) => {
      const mapper = mappings[block.type];
      if (!mapper) {
        console.warn(`No mapper defined for type: ${block.type}`);
        return "";
      }
      return mapper(block);
    })
    .join("");
}
