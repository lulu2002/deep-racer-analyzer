import AnalysisResult from "../data-objects/AnalysisResult";
import Defaults from "@/logic/data-objects/Defaults";

class Database {

    private history: AnalysisResult[] = []
    private current: AnalysisResult = Defaults.DEFAULT_RESULT

    pushResult(result: AnalysisResult) {
        this.history.push(result)
    }

    setCurrent(result: AnalysisResult) {
        this.current = result
    }

    getCurrent() {
        return this.current
    }
}

export default Database
