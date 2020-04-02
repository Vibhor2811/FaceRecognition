import React,{Component} from 'react';
import Particles from 'react-particles-js';
import Navigation from './Components/Navigation/Navigation';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
import Logo from './Components/Logo/Logo';
import ImageLink from './Components/ImageLink/ImageLink';
import Rank from './Components/Rank/Rank';
import FaceRecog from './Components/FaceRecog/FaceRecog';
import Clarifai from 'clarifai';
import './App.css';

const particleOptions={
  particles:{
    number:{
      value:200,
      density:{
        enable:true,
        value_area:1000
      }
    }
  }
}

const app = new Clarifai.App({
  apiKey: 'ed72bc3cbd66484792e88dd56af63d80'
 });
  
class App extends Component{
  constructor(){
    super();
    this.state={
      input: '',
      imageUrl: '',
      box: {},
      route:'signin',
      isSignedin: false 
    }
  }

  onInputChange= (event) =>{
    this.setState({input: event.target.value })
  }

  onrouteChange=(Route)=>{
    if(Route==='signin'){
      this.setState({isSignedin: false})
    }else if(Route==='home'){
      this.setState({isSignedin: true})
    }
      this.setState({route: Route})
  }

  boxMeasures=(Data)=>{
    const Face = Data.outputs[0].data.regions[0].region_info.bounding_box;
    const image=document.getElementById('inputImage');
    const width=Number(image.width);
    const height=Number(image.height);
    return{
    topRow: Face.top_row * height,
    leftCol: Face.left_col * width,
    bottomRow: height-(Face.bottom_row * height),
    rightCol: width-(Face.right_col * width)
    }
  }

  drawBox=(Box)=>{
    console.log(Box);
    this.setState({ box: Box })
  }

  onSubmit=()=>{
    this.setState({imageUrl: this.state.input })
    app.models.predict(Clarifai.FACE_DETECT_MODEL,this.state.input)
    .then(response => this.drawBox(this.boxMeasures(response)))
    .catch(err=> console.log(Error))
  }
  render(){
  return (
    <div className="App">
      <Particles className='particles'
         params={particleOptions} />
      <Navigation isSignedin={this.state.isSignedin} onrouteChange={this.onrouteChange}/>
      { this.state.route==='home' ? 
      <div>
      <Logo />
      <Rank />
      <ImageLink onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
      <FaceRecog Box={this.state.box} ImageUrl={this.state.imageUrl} /> 
      </div> :
      this.state.route==='signin' ? 
      <Signin onrouteChange={this.onrouteChange}/>
      : <Register onrouteChange={this.onrouteChange}/>
      }

    </div>
  );
  }
}

export default App;
