import { Button } from "react-bootstrap";
import { timer } from './index';

export const BasketComponent = () =>
{   console.log("timer.secondsPassed");
console.log(timer.secondsPassed);

const handleHomeMobx = () => {
    timer.reset();
}
return (<>
    <Button className='my-btn' onClick={() => handleHomeMobx()}> Clean Basket </Button>
    <div>Home</div>
</>)}