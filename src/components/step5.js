import React,{useState} from 'react'


const Step5=()=>{

    const [c,setColor]=useState('black')
    const [length,setLength]=useState('')

    const items=[
        'day to day',
        'corporate wear',
        'business casuals',
        'weekend',
        'special occasion'
    ]


return(
    <div >

<h4 style={{padding:10,fontFamily:'Roberto'}}>
Which situation you want to be styled for
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

export default Step5