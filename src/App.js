import React    from 'react'
import Container from '@material-ui/core/Container';


// import TodoApi Component
import TodoApi from './components/TodoApi'


function App (){
    return(
        <React.Fragment>
            <Container maxWidth="md">
                <TodoApi></TodoApi>                
             </Container>
        </React.Fragment>
    )
}
export default App