import React, { useEffect, useState } from 'react'
import "./a.css"
import img from "../../assets/爱心.png";
import api from '../../api/index'
import LoadMore from '../LoadMore/index';
export default function Hello() {
  const [searchData, setSearchData] = useState([])
  const [rightState, setRightState] = useState([])
  const func = async () => {
    const res = await api.getSearch()
    if (res.status == 200) {
      setSearchData(res.data.result.data)
    }
    const res1 = await api.getHomeHot1()
    if (res.status == 200) {
      setRightState(res1.data.result)
    }
  }
  useEffect(() => {
    func()
  }, [])
  const loadMoreHandle = async () => {
    const res = await api.getSearch({
    })
    if (res.status == 200) {
      setSearchData([...searchData, ...res.data.result.data])
    }
    const res1 = await api.getHomeHot1({
    })
    if (res.status == 200) {
      setRightState([...rightState, ...res1.data.result])
    }
  }

  return (
    <div className='warp'>
      <ul className='macy-container'>{
        searchData.map((ele, index) => {
          return <li key={index}>
            <img src={ele.img} alt="" />
            <div className='footer'>
              <p className='text'>{ele.title}</p>
              <div className='content'>
                <p>{ele.name}</p>

                <p>
                  <img src={img} alt="" />
                  {ele.num}</p>
              </div>
            </div>

          </li>
        })
      }
      </ul>
      <ul className='macy-container macy-container1 '>{
        rightState.map((ele, index) => {
          return <li key={index}>
            <img src={ele.img} alt="" />
            <div className='footer'>
              <p className='text'>{ele.title}</p>
              <div className='content'>
                <p>{ele.name}</p>
                <p> <img src={img} alt="" />
                  {ele.num}</p>
              </div>
            </div>
          </li>
        })
      }


      </ul>
      {
        <LoadMore onLoadMore={loadMoreHandle} />
      }
    </div>

  )
}
