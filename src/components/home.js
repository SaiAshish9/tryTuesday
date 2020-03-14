import React,{useState} from 'react'

import {withRouter} from 'react-router-dom'

const Home=({history})=>{

const [color,setColor]=useState('black')

return(
    <div style={{marginTop:'20vh'}}>
        <h4 style={{padding:10,fontFamily:'Roberto'}}>
        Hello there! Help us to help you dress better by answering the following questions. This will let us know you better and what you want and come up with the perfect look for you!
        </h4>

<button className='btn btn-dark'
 style={{marginTop:30,
backgroundColor:`${
    color==='white'?'white':'black'
}`,
color:`${
    color==='white'?'black':'white'
}`,
boxShadow:'none'
}}
onMouseOver={()=>{
    setColor('white')
}}
onMouseLeave={()=>{
    setColor('black')
}}
onClick={(e)=>{
e.preventDefault()
history.push('/step1')
}
}

>
    Get Started
</button>


    </div>
)

}

export default withRouter(Home)