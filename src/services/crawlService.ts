import { axurApi } from "./axurClient"

export const postCrawlTerm = (keyword: string) => axurApi.post('/crawl', { keyword: keyword }).then(res => res.data)

export const getCrawlTerm = (keywordId: string) => axurApi.get<IGetCrawlTerm>(`/crawl/${keywordId}`).then(res => res.data)

interface IGetCrawlTerm {
  id?: string,
  status?: "active" | "done" | 400,
  message?: string, 
  urls?: string[]
}