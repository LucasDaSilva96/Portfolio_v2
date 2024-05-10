import { useQuery } from "react-query";
import CertificationBox from "./CertificationBox";
import Loader from "./Loader";

function Certifications() {
  // Fetch certifications data using react-query
  const { isLoading, data: certifications } = useQuery(["certifications"]);

  // Render loader while data is loading, otherwise render certification boxes
  if (!isLoading) {
    return (
      <div className="w-full overflow-y-auto h-full flex items-center justify-center gap-6 flex-wrap ">
        {certifications?.map((certification, i) => (
          <CertificationBox key={i} certificationObj={certification} />
        ))}
      </div>
    );
  } else {
    return <Loader />; // Render loader component while data is loading
  }
}

export default Certifications;
