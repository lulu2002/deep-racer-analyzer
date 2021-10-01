import {LogReader} from './reader';
import {EnvironmentInfo} from "../../data-objects/EnvironmentInfo";
import UnZippedFile from "../../data-objects/UnZippedFile";

export class LogEnvironmentReader extends LogReader<EnvironmentInfo> {

    read(files: UnZippedFile[]): EnvironmentInfo {
        const search = this.matchString(this.getAllLogsAsString(files), '\\{\\\'METRICS_S3_BUCKET\\\'.{0,}')
            .replace(/\'/gi, '\"');
        const environmentInfo: EnvironmentInfo = JSON.parse(search);
        return environmentInfo;
    }

}
