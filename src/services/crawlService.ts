import { axurApi } from "./axurClient"

export const postCrawlTerm = (keyword: string) => axurApi.post('/crawl', { keyword: keyword }).then(res => res.data)

export const getCrawlTerm = (keywordId: string) => axurApi.get(`/crawl/${keywordId}`).then(res => res.data)