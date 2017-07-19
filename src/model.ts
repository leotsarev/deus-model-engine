import { Event } from 'deus-engine-manager-api';
import { ModelApiInterface, PreprocessApiInterface, ViewModelApiInterface } from './model_api';

export type Callback = (api: ModelApiInterface, data: any) => void

export type ViewModelCallback = (api: ViewModelApiInterface, model: any) => any;

export type PreprocessCallback = (api: PreprocessApiInterface, events: Event[]) => any

export type Model = {
    callbacks: { [key: string]: Callback },
    preprocessCallbacks: PreprocessCallback[]
    viewModelCallbacks: { [base: string]: ViewModelCallback }
}
