import Episode from "./Episode";
import HyperParameters from "./HyperParameters";
import EnvironmentInfo from "./EnvironmentInfo";
import Track from "./track/track";
import Step from "./Step";
import ActionSpace from "./ActionSpace";

interface AnalysisResult {
    track: Track;
    steps: Step[];
    allRuns: Episode[];
    hyperParams: HyperParameters;
    actionSpaces: ActionSpace[];
    environmentInfo: EnvironmentInfo;
}

export default AnalysisResult
