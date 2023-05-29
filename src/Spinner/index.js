import {BounceLoader} from "react-spinners";
import './Spinner.css'
export default function Spinner() {
    return (
        <BounceLoader className="spinner"
        color={'#1E3A8A'} 
        speedMultiplier={3}
        size={60}
        aria-label="Loading Spinner"
        data-testid="loader" />
    );
}