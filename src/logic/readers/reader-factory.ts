import {AnalyticReader} from './analytic-reader';
import {LeaderboardAnalyticReader, TrainingAnalyticReader} from './readers';
import {UnZippedFile} from "../data-objects/UnZippedFile";

export class ReaderFactory {

    public static getAnalyticReader(files: UnZippedFile[]): AnalyticReader {
        const fileNames = files.map(value => value.name);

        if (this.containsCsvFiles(fileNames)) {
            return new TrainingAnalyticReader(files);
        } else {
            return new LeaderboardAnalyticReader(files);
        }
    }

    private static containsCsvFiles(fileNames: string[]): boolean {
        return fileNames.filter(value => value.endsWith('.csv')).length >= 1;
    }

}
