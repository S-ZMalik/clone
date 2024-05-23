import AOS from 'aos';
import 'aos/dist/aos.css';

const Fun = ({funData}) => {
  return (
    <div className="bg-fun">
    <div className="container grid grid-four-cols fun-section">
        {funData.map((fun, index) => (
            <div className="fun-cols" key={index}>
            <h3 className="fun-number">
             <i className="fun-icon">
                {fun.funIcon}
             </i>
             <span>
             {fun.funNumber}
             </span>
            </h3>
            <h6 className="fun-item white-space">
                {fun.funItem}
            </h6>
        </div>
        ))}
    </div>
    </div>
  )
}

export default Fun