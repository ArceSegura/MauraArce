import React, {useState, useEffect, useRef} from 'react';
import '../styles/Contador.css'

const Contador = () => {

    const [AñostimerDays, setAñosTimerDays] = useState('00');
	const [AñostimerHours, setAñosTimerHours] = useState('00');
	const [AñostimerMinutes, setAñosTimerMinutes] = useState('00');
	const [AñostimerSeconds, setAñosTimerSeconds] = useState('00');

	let interval = useRef();

	const startTimer = () =>{
		const initialDate = new Date('Dec 03, 2018 10:00:00').getTime();

		interval = setInterval(()=>{
			const now = new Date().getTime();
			const distance = now - initialDate;

			const days = Math.floor(distance / (1000 * 60 * 60 *24));
			const hours = Math.floor((distance % (1000 * 60 * 60 *24) / (1000 * 60 * 60)));
			const minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60));
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);

			if(distance < 0){
				clearInterval(interval.current);
			}else{
				setAñosTimerDays(days);
				setAñosTimerHours(hours);
				setAñosTimerMinutes(minutes);
				setAñosTimerSeconds(seconds);
			}

		},1000);

	};

	useEffect(()=>{
		startTimer();
		return () => {
			clearInterval(interval.current);
		};
	});

    return (  
        <div className="Contenedor">
            <h1 className="clockText">Tiempo juntos</h1>
            <div className="clock_container">
                <div className="time_container">
                    <h1>{AñostimerDays}</h1>
                    <strong>Días</strong>
                </div>
                <div className="time_container">
                    <h1>{AñostimerHours}</h1>
                    <strong>Horas</strong>
                </div>
                <div className="time_container">
                    <h1>{AñostimerMinutes}</h1>
                    <strong>Minutos</strong>
                </div>
                <div className="time_container">
                    <h1>{AñostimerSeconds}</h1>
                    <strong>Segundos</strong>
                </div>
            </div>
        </div>
    );
}
 
export default Contador;