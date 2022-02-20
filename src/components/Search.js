import { useState, useEffect } from 'react';

export default function Search({data}) {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const results = data.filter(item => 
        item.name.includes(searchTerm) || item.phone.includes(searchTerm)
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleChange = e => {
    e.preventDefault();
    const keyword = e.target.value.trim();
    setSearchTerm(keyword);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="container-fluid">
      <div className="container">
        <h2>Search</h2>
        <form id="search" onSubmit={e => {handleSubmit(e)}}>
          <div className="row">
            <div className="col">
              <input type="text" className="form-control" placeholder="Search" name="search" value={searchTerm} onChange={e => {handleChange(e)}}/>
            </div>
          </div>
        </form>
        {searchResults.map((item, index) => {
            return <div className="row searchResult" key={index}><div className="col"><span>{item.name}</span></div><div className="col"><span>{item.phone}</span></div></div>
        })}
      </div>
    </div>
  )
  
}