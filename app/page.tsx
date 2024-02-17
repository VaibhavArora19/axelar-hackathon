import { getFrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from "next";

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin",
    },
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmYZ2Jzsxhu9LaTnYohK6ktzJPJbFYykawRg31V96soTp1`,
  postUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: "Cosmic Cowboys",
  description: "A frame telling the story of cosmic cowboys",
  openGraph: {
    title: "Cosmic Cowboys",
    description: "A frame telling the story of cosmic cowboys",
    images: [
      `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmYZ2Jzsxhu9LaTnYohK6ktzJPJbFYykawRg31V96soTp1`,
    ],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Cosmic Cowboys</h1>
    </>
  );
}
