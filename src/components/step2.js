import React,{useState} from 'react'

import {withRouter} from 'react-router-dom'

const Step2=({history})=>{

    const [c,setColor]=useState('black')
    const [length,setLength]=useState('')

    const items=[
        'Garments',
        'Curvy',
        'Fit',
        'Tall',
        'Plus'
    ]


return(
    <div >

<h4 style={{padding:10,fontFamily:'Roberto'}}>
The basic shape that your body takes that can be categorised and referred to while determining the best choice of garments.        </h4>


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
       history.push('/step3')
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

export default withRouter(Step2)