import {TrainingType} from "./EnumTypes";

export interface EnvironmentInfo {
    readonly METRICS_S3_BUCKET: string[];
    readonly METRICS_S3_OBJECT_KEY: string[];
    readonly RACER_NAME: string;
    readonly LEADERBOARD_TYPE: string;
    readonly JOB_TYPE: TrainingType;
    readonly VIDEO_JOB_TYPE: TrainingType;
    readonly LEADERBOARD_NAME: string;
    readonly RACE_TYPE: string;
    readonly WORLD_NAME: string;
    readonly MP4_S3_OBJECT_PREFIX: string;
    readonly MODEL_S3_PREFIX: string[];
    readonly MODEL_S3_BUCKET: string[];
    readonly MODEL_NAME: string;
    readonly CAR_COLOR: string[];
    readonly S3_KMS_CMK_ARN: string;
    readonly NUMBER_OF_TRIALS: number;
    readonly BODY_SHELL_TYPE: string[];
    readonly AWS_REGION: string;
    readonly MP4_S3_BUCKET: string;
    readonly KINESIS_VIDEO_STREAM_NAME: string;
    readonly CAR_NAME: string;
    readonly SIMTRACE_S3_BUCKET: string;
    readonly SIMTRACE_S3_PREFIX: string;
    readonly NUMBER_OF_RESETS: number;
    readonly ROBOMAKER_SIMULATION_JOB_ACCOUNT_ID: number;
    readonly IS_CONTINUOUS: boolean;
    readonly OFF_TRACK_PENALTY: number;
    readonly MODEL_METADATA_FILE_S3_KEY: string[];
}
