"use client";

import React, { PropsWithChildren, useEffect, useState } from 'react'

export interface Config {
    leftPercentageWidth: number;
}

export const defaultConfig: Config = {
    leftPercentageWidth: 60
}

interface ContextObject {
    config: Config,
    export: () => object,
    import: (config: object) => void,
    getOption: <T extends keyof Config>(key: T) => Config[T],
    setOption: <T extends keyof Config>(key: T, value: Config[T]) => void
}

const ConfigContext = React.createContext<ContextObject | null>(null);

export default function ConfigProvider({ children } : PropsWithChildren) {

    const [config, _setConfig] = useState<Config>(defaultConfig);

    useEffect(() => {
         if (localStorage && localStorage.getItem('config')) {
            const localStorageConfig = JSON.parse(localStorage.getItem('config')!);
            setConfig({...defaultConfig, ...localStorageConfig});
        }
    }, [])

    const setConfig = (config: Config | ((c: Config) => Config)) => {
        if (window != undefined && window.localStorage) window.localStorage.setItem('config', JSON.stringify(config));
        return _setConfig(config)
    };

    const value : ContextObject = {
        config,
        export: () => config,
        import: (config: object) => setConfig(config as Config),
        getOption: (key) => config[key],
        setOption: (key: keyof Config, value: Config[keyof Config]) => setConfig(config => ({...config, [key]: value}))
    };

    return <ConfigContext.Provider value={value}>
        {children}
    </ConfigContext.Provider>
}


export function useConfig<T extends keyof Config>(key: T) {
    const context = React.useContext(ConfigContext);
    if (context === null) throw new Error('useConfig must be used within a ConfigProvider');
    return [context.getOption(key), (value: Config[T]) => context.setOption(key, value)] as const;
}