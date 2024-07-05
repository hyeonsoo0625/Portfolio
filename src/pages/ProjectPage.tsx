
import { useLanguageState } from "../shared/hooks/useLanguageState";
import ProjectKo from "../components/ProjectKo";
import ProjectEn from "../components/ProjectEn";

const ProjectPage = () => {
  const languageType = useLanguageState(
    (state) => state.languageType
);
  return (
    <div>
      {languageType === "ko" ? <ProjectKo /> : <ProjectEn />}
    </div>
  )
}

export default ProjectPage;