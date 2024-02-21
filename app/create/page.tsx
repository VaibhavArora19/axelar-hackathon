import { Suspense } from "react";
import Create from "../../components/Create";

export default function Page() {
  return (
    <Suspense>
      <Create />
    </Suspense>
  );
}
