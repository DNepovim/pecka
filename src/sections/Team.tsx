"use client";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import { Section } from "../components/Section";
import { Carousel } from "../components/Carousel/Carousel";

export interface TeamProps {
  members: {
    image: ReactElement;
    name: string;
    text: string;
    fullName: string;
  }[];
}

export const Team: React.FC<TeamProps> = ({ members }) => {
  return (
    <Section
      id="tym"
      title="Kdo za tím stojí?"
      titleColor="text-blue-second"
      bg="bg-beige-first"
      full
    >
      <Carousel items={members} />
    </Section>
  );
};
