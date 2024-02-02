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
                        <svg width="38" height="30" viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0.585785 16.4142C-0.195263 15.6332 -0.195263 14.3668 0.585785 13.5858L13.3137 0.857864C14.0948 0.0768156 15.3611 0.0768156 16.1421 0.857864C16.9232 1.63891 16.9232 2.90524 16.1421 3.68629L4.82843 15L16.1421 26.3137C16.9232 27.0948 16.9232 28.3611 16.1421 29.1421C15.3611 29.9232 14.0948 29.9232 13.3137 29.1421L0.585785 16.4142ZM38 17H2V13H38V17Z" fill="#005186"/>
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
                        <svg width="38" height="31" viewBox="0 0 38 31" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M37.4142 16.9142C38.1953 16.1332 38.1953 14.8668 37.4142 14.0858L24.6863 1.35786C23.9052 0.576816 22.6389 0.576816 21.8579 1.35786C21.0768 2.13891 21.0768 3.40524 21.8579 4.18629L33.1716 15.5L21.8579 26.8137C21.0768 27.5948 21.0768 28.8611 21.8579 29.6421C22.6389 30.4232 23.9052 30.4232 24.6863 29.6421L37.4142 16.9142ZM0 17.5H36V13.5H0V17.5Z" fill="#005186"/>
</svg>
                    </button>
                </div>
            </div>
        </section>
    );
}

