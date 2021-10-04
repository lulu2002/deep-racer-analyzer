import AnalysisResult from "../data-objects/AnalysisResult";
import Defaults from "@/logic/data-objects/Defaults";
import Episode from "@/logic/data-objects/Episode";
import Track from "@/logic/data-objects/Track";

class Database {

    private history: AnalysisResult[] = []
    private current: AnalysisResult = Defaults.DEFAULT_RESULT
    private trackCache: Track[] = []

    currentEpisode: Episode = Defaults.DEFAULT_EPISODE

    pushResult(result: AnalysisResult) {
        this.history.push(result)
    }

    setCurrent(result: AnalysisResult) {
        this.current = result
        this.currentEpisode = result.episodes[0]
    }

    uploadTrack(track: Track) {
        this.trackCache.push(track)
    }

    getTrack(name: string) {
        return this.trackCache.find(value => value.name === name)
    }

    getCurrent() {
        return this.current
    }
}

export default Database
