import ContentContainer from "../../components/shared/ContentContainer";
import Input from "../../components/shared/Input/Input";
import Button from "../../components/shared/Button/Button";
import { useState } from "react";
import {fetchQuery} from "./Search.services";
import {IMovie} from "../../app/models/IMovie";
import MovieCard from "../../components/MovieCard/MovieCard";

const Search = () => {
  const [ query, setQuery ] = useState<string>('');
  const [ searchResult, setSearchResult ] = useState<IMovie[] | []>([]);

  const searchHandler = () => fetchQuery(query).then(data => setSearchResult(data.results));

  return (
     <ContentContainer>
       <Input style={{ marginLeft: 80 }} placeholder='Search' onChange={(event) => setQuery((event.target as HTMLInputElement).value)} />
       <Button onClick={searchHandler} style={{ padding: '11px 10px', borderRadius: '7px', fontSize: 16, marginLeft: 10 }}>Search</Button>
       <div style={{ display: 'flex', flexWrap: 'wrap' }}>
         {
           searchResult?.map(movie => {
             return (
                <MovieCard key={movie.id} movie={movie} />
             );
           })
         }
       </div>
     </ContentContainer>
  );
};

export default Search;