import Layout from '../components/Layout'
import Link from 'next/link'
import ListPaySlip from './ListPaySlip'

export default class extends React.Component {
  
  constructor(props) {
    super(props)
  }

  componentDidMount(){
        
        
  }


  render() {
    return (
      <Layout>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <ul class="nav">
          <li class="nav-item">
            <a href="/CreatePaySlip" class="nav-link">Add employee details</a>
          </li>
          
        </ul>
        
        </nav>
        
         <ListPaySlip/>  
      </Layout>
    )
  }
}