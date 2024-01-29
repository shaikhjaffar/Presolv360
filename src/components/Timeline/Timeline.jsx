import './Style.css'
import React from 'react';




export default function Timeline({fields}) {
    const [yearSelected, setYearSelected] = React.useState(1);
    const [keySelected, setKeySelected] = React.useState(0);
    const { title, years_timeline } = fields;

    const handleOnTimelineClick = (e, year, key) => {
        setYearSelected(year);
        setKeySelected(key);
    };

    React.useEffect(() => {
        setYearSelected(years_timeline[keySelected].steps);
    }, [keySelected]);

    return (
        <section className="wrapper">
            <div className="timeline">
                <ul>
                    {years_timeline.map((item, key) => (
                        <li
                            key={key}
                            className={
                                item.steps === yearSelected ? "active" : ""
                            }
                        >
                            <a
                                onClick={(e) =>
                                    handleOnTimelineClick(e, item.steps, key)
                                }
                                id={item.steps}
                                
                            >
                                <span className='steps_indicator'>{item.steps}</span>
                                
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="Timeline_panel">
                <div className="arrows">
                    <button
                        onClick={() => {
                            setKeySelected(
                                keySelected > 0
                                    ? keySelected - 1
                                    : years_timeline.length - 1
                            );
                        }}
                        aria-label="Left button"
                    >
                        <svg width="36" height="30" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0.585785 16.4142C-0.195263 15.6332 -0.195263 14.3668 0.585785 13.5858L13.3137 0.857862C14.0948 0.0768137 15.3611 0.0768138 16.1421 0.857863C16.9232 1.63891 16.9232 2.90524 16.1421 3.68629L4.82843 15L16.1421 26.3137C16.9232 27.0948 16.9232 28.3611 16.1421 29.1421C15.3611 29.9232 14.0948 29.9232 13.3137 29.1421L0.585785 16.4142ZM36 17L2 17L2 13L36 13L36 17Z" fill="black"/>
</svg>
                    </button>
                </div>
                <div className="content">
                    {years_timeline.map((item, key) => (
                        <div
                            key={key}
                            className={`tab ${
                                yearSelected === item.steps && "selected"
                            }`}
                        >
                            <div className='timeline_main_wrap'>
                                  <div className='timeline_content'>
                                  <h2>{item.tittle}</h2>

<p>{item.description}</p>
                                </div>

                            
                            <img src= {item.image} alt='images'/>
                           </div>
                        </div>
                    ))}
                </div>
                <div className="arrows">
                    <button
                        onClick={() => {
                            setKeySelected(
                                keySelected < years_timeline.length - 1
                                    ? keySelected + 1
                                    : 0
                            );
                        }}
                        aria-label="Right button"
                    >
                        <svg width="36" height="30" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35.4142 16.4142C36.1953 15.6332 36.1953 14.3668 35.4142 13.5858L22.6863 0.857862C21.9052 0.0768139 20.6389 0.076814 19.8579 0.857863C19.0768 1.63891 19.0768 2.90524 19.8579 3.68629L31.1716 15L19.8579 26.3137C19.0768 27.0948 19.0768 28.3611 19.8579 29.1421C20.6389 29.9232 21.9052 29.9232 22.6863 29.1421L35.4142 16.4142ZM1.74846e-07 17L34 17L34 13L-1.74846e-07 13L1.74846e-07 17Z" fill="black"/>
</svg> 
                    </button>
                </div>
            </div>
        </section>
    );
}

