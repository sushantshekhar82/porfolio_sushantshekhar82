import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
function projects() {
    const [data2,setData2]=useState([])
    const getData2=async ()=>{
        let res=await axios.get("https://api.github.com/search/repositories?q=user:sushantshekhar82+fork:true&sort=updated&per_page=10&type=Repositories")
            let  d=await res.data.items
            setData2(d)
          
    }
    useEffect(()=>{
        
        getData2()
    },[])
  return (
    <div>
      <h1 align="center">Projects</h1>
            <div style={{display:"grid",gridTemplateColumns:"40% 40%",gap:"10px" }}>
            {
                data2.map((e)=>(
               <Link style={{textDecoration:"none"}}  href={e.html_url} target="_blank"><div key={e.id} style={{width:"350px",height:"auto",border:"1px solid gray"}}>
                <h2 style={{color:"black"}}>{e.name}</h2>
                <h6 style={{color:"gray"}}>{e.full_name}</h6>
                <p>Fork count :{e.forks_count}</p>
                <p>Star count :{e.score}</p>
                <h3>{e.language}</h3>
                </div></Link> 
                ))
            }
            </div>
    </div>
  )
}

export default projects
