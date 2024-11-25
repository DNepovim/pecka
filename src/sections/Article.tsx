import React from "react";
import { H3 } from "../components/Typography";

export interface ArticleProps {
  title: string;
  text: string;
  author: string;
  link: string;
}

export const Article: React.FC<ArticleProps> = ({
  title,
  text,
  author,
  link,
}) => (
  <article>
    <H3 color="text-brand-first">
      <a href={link} target="_blank">
        {title}
      </a>
    </H3>
    <p className="italic">{author}</p>
    <p>{text}</p>
    <div className="text-right justify-self-end">
      <a
        href={link}
        target="_blank"
        className="text-brand-first hover:underline font-bold"
      >
        Celý článek na webu mládeže{" >"}
      </a>
    </div>
  </article>
);
