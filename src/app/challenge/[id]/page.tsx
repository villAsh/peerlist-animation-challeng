"use client";
import data from "@/data/data";
import { useParams } from "next/navigation";
import { useMemo } from "react";

const page = () => {
  const params = useParams();
  const comp = useMemo(
    () => data.find((item) => item.id === params.id),
    [params.id]
  );
  return <div>{comp?.component}</div>;
};

export default page;
