import FileManager from "./sub-logic/FileManager";
import ReadingManager from "./sub-logic/ReadingManager";
import Database from "./sub-logic/Database";
import Analyzer from "./sub-logic/Analyzer";
import {AnalysisState} from "@/logic/data-objects/EnumTypes";
import AnalysisResult from "@/logic/data-objects/AnalysisResult";
import TrackLoader from "@/logic/sub-logic/TrackLoader";

class App {
    private fileManager = new FileManager()
    private readingManager = new ReadingManager()
    private trackLoader = new TrackLoader()
    private analyzer = new Analyzer()
    private database = new Database()
    private state: AnalysisState = 'WAITING'


    async upload(tarGzFile: File) {
        const result = await this.analysisChain(tarGzFile)

        await this.uploadToDatabase(result)
        await this.handleTrack(result)

        this.state = "DONE"
    }

    async analysisChain(tarGzFile: File) {
        this.state = "UPLOADING"
        const files = await this.fileManager.unPackFile(tarGzFile)

        this.state = "PARSING"
        const reader = this.readingManager.loadReader(files)

        this.state = "ANALYSING"
        const result = this.analyzer.analyze(reader)

        return result
    }

    async uploadToDatabase(result: AnalysisResult) {
        this.database.pushResult(result)
        this.database.setCurrent(result)
    }

    async handleTrack(result: AnalysisResult) {
        this.state = "LOADING_TRACK"
        const track = await this.trackLoader.loadTrackByName(result.environmentInfo.WORLD_NAME)
        this.database.uploadTrack(track)
    }

    get currentResult() {
        return this.database.getCurrent()
    }

    get analysingState() {
        return this.state
    }

    get db() {
        return this.database
    }
}

export default App
