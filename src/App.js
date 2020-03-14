import React,{useState} from 'react';
import './App.css';

import {Link,Route,Switch,withRouter} from 'react-router-dom'

import Home from './components/home'
import Step1 from './components/step1'
import Step2 from './components/step2'
import Step3 from './components/step3'
import Step4 from './components/step4'
import Step5 from './components/step5'
import Step6 from './components/step6'
import Feedback from './components/feedback'


function App({history}) {


const [count,setCount]=useState(1)

const steps=[
 'Age',
 'Body Type',
 'Preferred Style',
 'Preferred Fit',
 'Occasion',
 'Preferred Budget'
]


  return (

    <div className="container-fluid">


  <div style={{textAlign: 'center',width:'100%',height:'8vh',borderBottom:'1px solid black'}}>

<a style={{cursor:'pointer',position:'absolute',left:50,top:20}}

onClick={(e)=>{
e.preventDefault()
history.push('/')
}}
>
<i className='fa fa-home fa-2x' area-hidden='true'>

</i>
</a>


<h4 style={{marginTop:'2vh',fontFamily: "'Roboto', sans-serif"}}>
  Questionnaire
</h4>

</div>



{
 history.location.pathname!='/'&&history.location.pathname!='/feedback'?
 (

<div className="row" style={{width: '100%', height: '20vh',textAlign: 'center',display: 'inline'}}>


{count>1?(
<a style={{cursor:'pointer'}}

onClick={()=>{
  count>1?setCount(count-1):setCount(count)
  history.push('/step'+parseInt(count-1))
}}
>
<i className="fa fa-angle-left " style={{position:'absolute',left:'25%',fontSize:'6vh',fontWeight:'lighter'}} aria-hidden="true"></i>
</a>):null}




<h5 style={{display:'inline',margin:40,position:'relative',top:14,fontWeight:'lighter'}}>
STEP {count} OF 6:    

<span style={{marginLeft:40}}>
{steps[count-1].toUpperCase()}
</span>
</h5>


{count<6?(
<a style={{cursor:'pointer'}}

onClick={()=>{
  count<6?setCount(count+1):setCount(count)
  history.push('/step'+parseInt(count+1))
}}

>
<i className="fa fa-angle-right " style={{position:'absolute',right:'30%',fontSize:'6vh',fontWeight:'lighter'}} aria-hidden="true"></i>
</a>):null
}


</div>


):null

}


<div className="container" style={{alignItems:'center',textAlign:'center',height:'80vh',width:'100%'}}>


<Switch>

<Route exact path="/" component={Home}/>
<Route path='/step1' component={Step1}/>
<Route path='/step2' component={Step2}/>
<Route path='/step3' component={Step3}/>
<Route path='/step4' component={Step4}/>
<Route path='/step5' component={Step5}/>
<Route path='/step6' component={Step6}/>
<Route path='/feedback' component={Feedback}/>
</Switch>

</div>



    </div>

  );
}

export default withRouter(App);
