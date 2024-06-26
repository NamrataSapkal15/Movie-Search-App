import React from 'react'

const Result = (props) => {
    const boxes =props.movies.map(
        (item,index)=>{
            return <Box key={index} image={item.poster_path} title={item.original_title} rating={item.vote_average}/>
        }
    )
  return (
    <div className='w-full  grid md:grid-cols-4 gap-5 mt-3'>
{boxes}

    </div>
  )
}

const Box =(props)=>{
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    return(
        <div className='shadow min-h-[200px] pb-1  mt-3'>
           <img src={IMGPATH + props.image} alt="" srcset="" className='w-full' />  
           <div className='flex justify-between px-2 items-center'><span className='text-2xl '>{props.title}</span> 
           <span className='text-xl text-yellow-500 text-bold'>{props.rating}</span>
             </div>
        </div>
    )
}

export default Result