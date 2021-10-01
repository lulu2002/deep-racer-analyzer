import FileManager from "./manager/FileManager";

class App {
    private fileManager = new FileManager()

    async upload(tarGzFile: File) {
        const files = await this.fileManager.unPackFile(tarGzFile)

    }
}

export default App
