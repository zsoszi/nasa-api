const DateInput = (props) => {
	return (
		<div>
			<form onSubmit={props.changeDate}>
				Enter a date (YYYY-MM-DD):
				<input />
				<input type="submit" />
			</form>
		</div>
	);
};

export default DateInput;


/* App.js-be megy majd 
import DateInput from './dateInput'


  const[date, setDate]= useState("")

 const changeDate = (e) =>{
    e.preventDefault();
    let dateFromInput = e.target[0].value;
    setDate({date, dateFromInput})
    //console.log(e.target);
  }

 <DateInput changeDate={changeDate} />

NIGACatit3gE0fd1XprmFfUBGho3Uzp2Hq7JQLIG
 */