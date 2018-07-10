import Layout from '../components/Layout'
import Link from 'next/link'
import Router from 'next/router'

export default class CreatePaySlip extends React.Component {
    
    constructor(props) {
        super(props)
    }

    onSubmit = (event) =>{

        event.preventDefault();

        const data={
            first_name:event.target.first_name.value,
            last_name:event.target.last_name.value,
            a_salary:event.target.a_salary.value,
            s_rate:event.target.s_rate.value
        }
        var list=localStorage.getItem("list");
        if(list==undefined || list=="")
            list=[];
        else
            list=JSON.parse(list);
        list.push(data);
        localStorage.setItem("list",JSON.stringify(list));
        Router.push(`/`)
    };

    

   render() {
       
        return (
            
            <Layout>
                <div class="container">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div class="card">
                            <div class="card-header">Employment History</div>
                            <div class="card-body">
                                <form onSubmit={this.onSubmit}>
                                    <div class="form-group">
                                            <label for="first_name">First Name:</label>
                                            <input type="text" class="form-control" id="first_name" name="first_name" required />
                                        </div>
                                        <div class="form-group">
                                            <label for="last_name">Last Name:</label>
                                            <input type="text" class="form-control" id="last_name" name="last_name" required />
                                        </div>
                                        <div class="form-group">
                                            <label for="a_salary">Annual Salary:</label>
                                            <input type="number" class="form-control" id="a_salary" name="a_salary"  required/>
                                        </div>
                                        <div class="form-group">
                                            <label for="s_rate">Super Rate(%):</label>
                                            <input type="number" class="form-control" max="100" id="s_rate" name="s_rate"  required/>
                                        </div>
                                    
                                    
                                    <button type="submit" class="btn btn-primary">Save</button>
                                    <a href="/" class="btn btn-default">Back</a>
                                </form>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </Layout>

        )
    }
}

