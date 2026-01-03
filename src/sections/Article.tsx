import React from "react";
import { H3 } from "../components/Typography";

export interface ArticleProps {
  title: string;
  text: string;
  author: string;
  link: string;
  label?: string
}

export const Article: React.FC<ArticleProps> = ({
  title,
  text,
  author,
  link,
  label
}) => (
  <article>
    <H3 className="text-brand-first">
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
        {label ?? "Celý článek na webu mládeže"}{" >"}
      </a>
    </div>
  </article>
);
