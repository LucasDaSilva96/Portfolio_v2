import { useQuery } from "react-query";
import CertificationBox from "./CertificationBox";
import { useState } from "react";
import Loader from "./Loader";

function Certifications() {
  const { isLoading, data: certifications } = useQuery(["certifications"]);

  if (!isLoading) {
    return (
      <div className="w-full overflow-y-auto h-full flex items-center justify-center gap-6 flex-wrap ">
        {certifications?.map((certification, i) => (
          <CertificationBox key={i} certificationObj={certification} />
        ))}
      </div>
    );
  } else {
    return <Loader />;
  }
}

export default Certifications;
