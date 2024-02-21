import { Suspense } from "react";
import Send from "../../components/Send";

export default function Page() {
  return (
    <Suspense>
      <Send />
    </Suspense>
  );
}
