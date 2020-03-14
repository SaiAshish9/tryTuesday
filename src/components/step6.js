import React,{useState} from 'react'

import {withRouter} from 'react-router-dom'

const Step6=({history})=>{

    const [c,setColor]=useState('black')
    const [length,setLength]=useState('')

    const items=[
        '1000 - 2000',
        '2000 - 3000',
        '3000 - 5000',
        '5000 above'

    ]


return(
    <div >

<h4 style={{padding:10,fontFamily:'Roberto'}}>
How much you are willing to spend on your look
</h4>
{
    items.map((x,i)=>(

        <button className='btn btn-outline-dark '
        style={{margin:20,
            marginTop:50,
            fontSize:20,
            width:200,
            fontWeight:'bold',
            backgroundColor:`${
                length==x?'#343a40':''
            }`,
            color:`${
                length==x?'white':''
            }`,
       boxShadow:'none'
       }}
       onClick={()=>{
       setColor('black')
       setLength(x)
       history.push('/feedback')
       }
       }
       >
     {x}
       </button>

    ))


}

    </div>
)

}

export default withRouter(Step6)