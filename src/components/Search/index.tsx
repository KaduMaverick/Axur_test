import { FormEvent, useState } from 'react'
import { useCrawlContext } from '../../CrawlContext'
import { postCrawlTerm } from '../../services/crawlService'
import { SearchContainer, SearchInput} from './styles'

export const Search = ()=> {
  const [value, setValue] = useState('')
  const { terms, dispatch } = useCrawlContext()
  
  const hasAlreadyBeenSearched = ():boolean => terms.map((term: any) => term.keyword).includes(value) 

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (hasAlreadyBeenSearched()) {
      console.warn(`The term ${value} has already been crawled`)
      return 
    }

    postCrawlTerm(value).then(crawlResponse => dispatch({ type: "addTerm", term: { ...crawlResponse, keyword: value }}))
  }

  return (
    <SearchContainer>
      <form onSubmit={handleSubmit}>
      <SearchInput value={value} onChange={e => setValue(e.target.value)} />
      </form>
    </SearchContainer>
  )
}
