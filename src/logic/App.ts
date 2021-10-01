import FileManager from "./sub-logic/FileManager";
import ReadingManager from "./sub-logic/ReadingManager";
import Database from "./sub-logic/Database";
import Analyzer from "./sub-logic/Analyzer";
import {AnalysisState} from "@/logic/data-objects/EnumTypes";

class App {
    private fileManager = new FileManager()
    private readingManager = new ReadingManager()
    private analyzer = new Analyzer()
    private database = new Database()

    private state: AnalysisState = 'WAITING'


    async upload(tarGzFile: File) {
        this.state = "UPLOADING"
        const files = await this.fileManager.unPackFile(tarGzFile)

        this.state = "PARSING"
        const reader = this.readingManager.loadReader(files)

        this.state = "ANALYSING"
        const result = this.analyzer.analyze(reader)

        this.database.pushResult(result)
        this.database.setCurrent(result)
        this.state = "DONE"
    }

    get currentResult() {
        return this.database.getCurrent()
    }

    get analysingState() {
        return this.state
    }
}

export default App
