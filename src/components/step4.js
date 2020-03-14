import React,{useState} from 'react'


const Step4=()=>{

    const [c,setColor]=useState('black')
    const [length,setLength]=useState('')

    const items=[
        'Slim',
        'Regular',
        'Relaxed',
        'Boxy'
    ]


return(
    <div >

<h4 style={{padding:10,fontFamily:'Roberto'}}>
The fit you usually wear in dresses or bottoms
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

export default Step4