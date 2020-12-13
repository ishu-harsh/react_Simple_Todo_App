
import React, {Component} from 'react'

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import FormGroup from '@material-ui/core/FormGroup';

class TodoApi extends Component{
    constructor(){
        super()
        this.state ={
            input: "",
            item : []
        }
    }

     getItemFromInput = (event)=>{
        // console.log(event.target.value)
        this.setState({input : event.target.value})
    }

    handleClick = ()=>{
        console.log(this.state.input)
        if(this.state.input === ""){
           return alert("Plesae input something")
        }
        this.state.item.push(this.state.input)
        this.setState({item: this.state.item})


        // console.log(this.state.item)
    }

    renderItem = ()=>{
        let itemArray = this.state.item 
        console.log(this.state.item)
        
        return itemArray.map((item, index)=>{
            return(

                        // <FormGroup row key= {index}> 
                                    <FormControlLabel 
                                    control={<Checkbox  name="checkedA" />}
                                    label={item}/>
                            // </FormGroup>
                       
                    
            
                   
                    // <div class="form-check" key={index}>
                    //      <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    //     <label class="form-check-label" for="defaultCheck1">
                    //      {item}
                    //     </label>
                    //  </div>
               
            )
        }) 
    }

    render(){
        return(
            <React.Fragment>
                
                <div className="form-group mx-sm-3 mb-2 mt-5">
                    <input onChange={this.getItemFromInput} class="form-control-lg col-sm-8" type="text" placeholder="Add Items"/>
                    <button onClick={this.handleClick} type="button" class="btn btn-dark mb-2 col-sm-4 btn-lg">Add Item</button>
                </div>
                {this.renderItem()}

            </React.Fragment>
        )
    }
    

}

export default TodoApi