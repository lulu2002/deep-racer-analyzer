import FileManager from "./sub-logic/FileManager";
import ReadingManager from "./sub-logic/ReadingManager";
import Database from "./sub-logic/Database";
import Analyzer from "./sub-logic/Analyzer";

class App {
    private fileManager = new FileManager()
    private readingManager = new ReadingManager()
    private analyzer = new Analyzer()
    private database = new Database()


    async upload(tarGzFile: File) {
        const files = await this.fileManager.unPackFile(tarGzFile)
        const reader = this.readingManager.loadReader(files)
        const result = this.analyzer.analyze(reader)

        this.database.pushResult(result)
        this.database.setCurrent(result)
    }
}

export default App
