import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
// import { useCrawlContext } from '../../CrawlContext'
import { getCrawlTerm } from '../../services/crawlService'

interface ITermInfo {
  term: any
}

export const TermInfo:React.FC<ITermInfo> = ({term}) => {
  const [urls, setUrls] = useState(term.urls)
  const [pollingInterval, setPollingInterval] = useState(3000)
  const { data } = useSWR(term.id, getCrawlTerm, {revalidateOnFocus:false, refreshInterval: pollingInterval})
  
  useEffect(() => {
    if (data?.urls) {
      setUrls(data.urls)
    }

    if (data?.status === "done") {
      setPollingInterval(0)
    }
  }, [data])

  return (
    <div>
      <h2>Termo: {term.keyword} | status: {data?.status}</h2>
      <div>
        links:
      {urls && urls.map((item: any) => {
          return <div key={item}>{item}</div>
        })}
        </div>
    </div>
  )
}
