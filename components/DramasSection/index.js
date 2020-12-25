import Link from "next/link";
import React from "react";
import { Fade } from "react-reveal";
import {
  DramasContainer,
  DramasWrapper,
  DramasTitle,
  DramaItems,
  DramaCard,
  DramaIcon,
  DramaTitle,
  DramaSubtitle,
  DramaLink,
} from "./DramasSectionElements";
export default function Dramas() {
  return (
    <DramasContainer id="dramas">
      <DramasWrapper>
        <DramasTitle>My watch list</DramasTitle>
        <DramaItems>
          <Fade bottom delay={500}>
            <DramaCard>
              <DramaIcon src="/images/cloy-1.jpeg" />
              <DramaTitle>Korean Dramas</DramaTitle>
              <DramaSubtitle>
                The stories and the plots are really awesome.
              </DramaSubtitle>
              <Link href="/dramas/kdramas" passHref>
                <DramaLink>View Korean dramas</DramaLink>
              </Link>
            </DramaCard>
          </Fade>

          <Fade bottom delay={1000}>
            <DramaCard>
              <DramaIcon src="/images/lar.jpeg" />
              <DramaTitle>Chinese Dramas</DramaTitle>
              <DramaSubtitle>
                The romance between the casts is far beyond anything.
              </DramaSubtitle>
              <Link href="/dramas/cdramas" passHref>
                <DramaLink>View Chinese dramas</DramaLink>
              </Link>
            </DramaCard>
          </Fade>

          <Fade bottom delay={1500}>
            <DramaCard>
              <DramaIcon src="/images/mhil.jpeg" />
              <DramaTitle>Thailand Dramas</DramaTitle>
              <DramaSubtitle>
                The stories and the plots are really awesome.
              </DramaSubtitle>
              <Link href="/dramas/tdramas" passHref>
                <DramaLink>View Thai dramas</DramaLink>
              </Link>
            </DramaCard>
          </Fade>
        </DramaItems>
      </DramasWrapper>
    </DramasContainer>
  );
}
