import React from "react";
import { extractLink } from "./../../utils";
import Link from "next/link";

import {
  DramasListContainer,
  DramasListWrapper,
  DramasListInfoWrapper,
  DramasListH1,
  DramasListP,
  DramasWrapper,
  DramaCard,
  DramaPicture,
  DramaTitle,
  DramaRating,
  DramaRatingText,
  DramaRatingStars,
  Star,
  DramaLinkWrapper,
  DramaLink,
} from "./DramasListElements";
import { Zoom } from "react-reveal";

export default function DramasList({ title, dramas }) {
  const dramasListContent = dramas.map((drama) => {
    let detailLink = extractLink(drama.title);
    return (
      <Zoom>
        <DramaCard>
          <DramaPicture src={drama.picture} />
          <DramaTitle>{drama.title}</DramaTitle>
          <DramaRating>
            <DramaRatingText>my rating</DramaRatingText>
            <DramaRatingStars>
              <Star size="15px" fill={1 ? "gold" : "gray"} />
              <Star size="15px" fill={1 ? "gold" : "gray"} />
              <Star size="15px" fill={1 ? "gold" : "gray"} />
              <Star size="15px" fill={1 ? "gold" : "gray"} />
              <Star size="15px" fill={1 ? "gold" : "gray"} />
            </DramaRatingStars>
          </DramaRating>
          <DramaLinkWrapper>
            <Link href={`/dramas`} passHref>
              <DramaLink>{detailLink} Details</DramaLink>
            </Link>
          </DramaLinkWrapper>
        </DramaCard>
      </Zoom>
    );
  });
  return (
    <>
      <DramasListContainer>
        <DramasListWrapper>
          <DramasListInfoWrapper>
            <DramasListH1>The {title} dramas</DramasListH1>
            <DramasListP>
              The list of {title} dramas I have watched.{" "}
            </DramasListP>
          </DramasListInfoWrapper>

          <DramasWrapper>{dramasListContent}</DramasWrapper>
        </DramasListWrapper>
      </DramasListContainer>
    </>
  );
}
