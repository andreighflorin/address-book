import { useState, useEffect } from 'react';

export default function List({data}) {

  const [sortedData, setsortData] = useState([]);

  useEffect(() => {
    const newList = data.map((item) => {
      return [item.name, item.phone];
    })
    newList.sort();
    setsortData(newList);
  }, [data]);

  return (
    <div className="container-fluid">
      <div className="container list">
        <div className="row">
          <div className="col">
            <h2>Preview the contacts</h2>
          </div>
        </div>
          {sortedData.map((item, index) => {
            return <div className="row contacts" key={index}><div className="col">#{index + 1}</div><div className="col"><span>{item[0]}</span></div><div className="col"><span>{item[1]}</span></div></div>
          })}
      </div>
    </div>
  )
  
}