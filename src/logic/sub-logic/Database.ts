import AnalysisResult from "../data-objects/AnalysisResult";

class Database {

    private history: AnalysisResult[] = []
    private current: AnalysisResult | undefined = undefined

    pushResult(result: AnalysisResult) {
        this.history.push(result)
    }

    setCurrent(result: AnalysisResult) {
        this.current = result
    }
}

export default Database
