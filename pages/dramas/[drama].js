import React from "react";
import BreadCamp from "../../components/BreadCamp";
import DramasList from "../../components/DramasList";
import { getDramas } from "../../lib";

export default function index({ title, dramas }) {
  return (
    <>
      <BreadCamp />
      <DramasList title={title} dramas={dramas} />
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { drama: "kdramas" } },
      { params: { drama: "cdramas" } },
      { params: { drama: "tdramas" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log("PARAMS", params);
  const dramas = getDramas(params.drama);
  return {
    props: {
      title: params.drama,
      dramas,
    },
  };
}
