
export default class ListPaySlip extends React.Component {

   

    constructor(props) {
        super(props)
        this.state = {
            dataList: [],
            outputList: [],
        }
        
    }
    
    // componentDidUpdate(){
    //     const dataList=localStorage.getItem("myData");
    //     if(dataList) {
    //         this.setState(prevState => {
    //             return dataList;
    //         })
    //     }
    // }

    setData(list){

        this.state.dataList=list;
        var outputArr=[];
        for(var i=0;i<list.length;i++){
            var input=list[i];
            var output={};
            output.name=input.first_name+" "+input.last_name;
            var gincome=0;
            if(input.a_salary>0){
                gincome=parseInt(input.a_salary/12);
            }
            var tax=0;
            var taxableIncome=0;
            if(input.a_salary>18200 && input.a_salary<=37000){
                taxableIncome=input.a_salary-18200;
                tax=(taxableIncome*19)/100;
            }else if(input.a_salary>37000 && input.a_salary<=87000){
                taxableIncome=input.a_salary-37000;
                tax=(taxableIncome*32.5)/100;
                tax+=3572;
            }else if(input.a_salary>87001 && input.a_salary<=180000){
                taxableIncome=input.a_salary-87000;
                tax=(taxableIncome*37)/100;
                tax+=19822;
            }else if(input.a_salary>180001 ){
                taxableIncome=input.a_salary-180000;
                tax=(taxableIncome*45)/100;
                tax+=54232;
            }
            output.gincome=gincome;
            output.tax=(tax/12).toFixed(0);
            output.netincome=gincome-output.tax;
            var srate=parseInt(input.s_rate);
            output.samount=parseFloat((gincome*srate)/100).toFixed(0);
            outputArr.push(output);
        }
        this.setState({dataList:list,outputList:outputArr});
    }

    componentDidMount(){
        
        var list=localStorage.getItem("list");
        if(list) {
            list=JSON.parse(list);
            this.setData(list);
        }
    }

    


    render() {
        return (
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div class="table-responsive">
                                <table class="table ">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Annual - Salary</th>
                                            <th>Super Rate (%)</th>
                                        </tr>
                                    </thead>
                                    <tbody>

      
                                        {this.state.dataList.map(function(data, index){
                        return  <tr>
                                    <td>{data.first_name}</td>
                                    <td>{data.last_name}</td>
                                    <td>{data.a_salary}</td>
                                    <td>{data.s_rate}</td>
                                </tr>
                                ;
                      })}

                      
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div class="table-responsive">
                                <table class="table ">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th>Name</th>
                                            <th>Gross Income</th>
                                            <th>Income Tax</th>
                                            <th>Net Income</th>
                                            <th>Super Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>

      
                                        {this.state.outputList.map(function(data, index){
                        return  <tr>
                                    <td>{data.name}</td>
                                    <td>{data.gincome}</td>
                                    <td>{data.tax}</td>
                                    <td>{data.netincome}</td>
                                    <td>{data.samount}</td>
                                </tr>
                                ;
                      })}

                      
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            
        )
    }
}