import Link from "next/link";
import React from "react";

import {
  BreadCampContainer,
  BreadCampWrapper,
  BreadCampItems,
  BreadCampLink,
  BreadCampItem,
} from "./BreadCampElements";

export default function BreadCamp() {
  return (
    <BreadCampContainer>
      <BreadCampWrapper>
        <BreadCampItems>
          <BreadCampItem pos="left">
            <Link href="/" passHref>
              <BreadCampLink>Home</BreadCampLink>
            </Link>
          </BreadCampItem>
          <BreadCampItem>
            <Link href="/dramas/kdramas" passHref>
              <BreadCampLink>Korean</BreadCampLink>
            </Link>
          </BreadCampItem>
          <BreadCampItem>
            <Link href="/dramas/cdramas" passHref>
              <BreadCampLink>Chinese</BreadCampLink>
            </Link>
          </BreadCampItem>
          <BreadCampItem>
            <Link href="/dramas/tdramas" passHref>
              <BreadCampLink>Thailand</BreadCampLink>
            </Link>
          </BreadCampItem>
        </BreadCampItems>
      </BreadCampWrapper>
    </BreadCampContainer>
  );
}
