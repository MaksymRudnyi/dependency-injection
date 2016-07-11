export interface AppConfig {
    apiEndpoint: string;
    title: string;
}

export const HERO_DI_CONFIG: AppConfig = {
    apiEndpoint: 'api.heroes.com',
    title: 'Dependency Injection'
};