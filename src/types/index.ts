import type { AxiosRequestConfig } from 'axios'
import type { BaseQueryFn } from '@reduxjs/toolkit/query'

export interface MainState {
    offset: number
    limit: number
}

export interface ResourceItem {
    name: string
    url: string
}

export interface ResourceRequestParams {
    resourceType?: ResourceType
    limit: number
    offset: number
}

export interface ResourceResponse {
    count: number
    next: string
    previous: string
    results: ResourceItem[]
}

export interface PageProps<T = Record<string, string>, P = Record<string, string>> {
    params: T
    searchParams: P
}

export type AxiosBaseQueryType = BaseQueryFn<
    {
        url: string
        method?: AxiosRequestConfig['method']
        data?: AxiosRequestConfig['data']
        params?: AxiosRequestConfig['params']
        headers?: AxiosRequestConfig['headers']
    },
    unknown,
    unknown
>

export type ResourceType = "pokemon"

export * from "./Pokemon"