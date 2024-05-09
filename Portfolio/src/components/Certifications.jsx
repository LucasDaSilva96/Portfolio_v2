import { certifications } from "../data/skillsData";
import CertificationBox from "./CertificationBox";

function Certifications() {
  return (
    <div className="w-full overflow-y-auto h-full flex items-center justify-center gap-6 flex-wrap ">
      {certifications.map((certification, i) => (
        <CertificationBox key={i} certificationObj={certification} />
      ))}
    </div>
  );
}

export default Certifications;
