export default function WeatherMainInfo ({weather}) {
    return <div>
        <div>{weather?.location.name}</div>
        <div>{weather?.location.country}</div>
        <div>
            <div>
                <img 
                    src={`http:${weather?.current.condition.icon}`} 
                    width="128" 
                    alt={weather?.current.condition.text} 
                />
            </div>
            <div>
                <div>{weather?.current.condition.text} </div>
                <div>T:{weather?.current.temp_c}° </div>
            </div>
        </div>
        <iframe 
            title="mapa"
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d209995.98749216646!2d-58.443633727099616!3d-34.67522190232083!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1695171638698!5m2!1ses-419!2sar" 
            width="600" 
            height="400" 
            style={{border:0}} 
            loading="lazy" 
            
        ></iframe>
    </div>
}