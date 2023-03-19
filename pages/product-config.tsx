import React from "react";
import Image from "next/image";
import ContainerBlock from "../components/ContainerBlock";
export default function test() {
  return (
    <>
      <ContainerBlock
        title="Matthew Wynne.dev"
        description="Matthew wynne personal portfolio site."
      >
        <div className="h-screen bg-[#FBFAF9] py-24 px-4">
          <h1 className="text-2xl">This is some title</h1>
        </div>
      </ContainerBlock>
    </>
  );
}
