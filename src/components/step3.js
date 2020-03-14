import React,{useState} from 'react'

import {withRouter} from 'react-router-dom'


const Step3=({history})=>{

    const [c,setColor]=useState('black')
    const [length,setLength]=useState('')

    const items=[
        'Chic',
        'Boho',
        'Classic',
        'Streetwear',
        'Sexy',
        'Minimal'
    ]


return(
    <div >

<h4 style={{padding:10,fontFamily:'Roberto'}}>
The category of clothes that you usually wear, are comfortable with or matches your personality
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
       history.push('/step4')
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

export default withRouter(Step3)