import { getFrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from "next";

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Get started",
    },
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmexMVjr5xGzz2NBumwdUKPwNPt46LFauLv4rMnKstciob`,
  postUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/home`,
});

export const metadata: Metadata = {
  title: "Axelar Interchain Token Service",
  description: "Send tokens cross chain easily",
  openGraph: {
    title: "Axelar Interchain Token Service",
    description: "Send tokens cross chain easily",
    images: [
      `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmexMVjr5xGzz2NBumwdUKPwNPt46LFauLv4rMnKstciob`,
    ],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Axelar Interchain Token Service Frames</h1>
    </>
  );
}
