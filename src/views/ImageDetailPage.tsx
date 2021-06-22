import React from "react";
import ImageDetail from "../components/ImageDetail";
import { useParams } from "react-router-dom";

export function ImageDetailPage() {
  const { id } = useParams<{ id: string }>();
  return <ImageDetail id={id} />;
}
