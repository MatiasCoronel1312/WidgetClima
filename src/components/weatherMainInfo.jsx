import styles from "./weatherMainInfo.module.css";

export default function WeatherMainInfo ({weather}) {
    return <div className={styles.mainInfo}>
        <div className={styles.city}>{weather?.location.name}</div>
        <div className={styles.country}>{weather?.location.country}</div>
        <div className={styles.row}>
            <div>
                <img 
                    src={`http:${weather?.current.condition.icon}`} 
                    width="100%" 
                    alt={weather?.current.condition.text} 
                />
            </div>
            <div >
                <div className={styles.condition}>{weather?.current.condition.text} </div>
                <div className={styles.current}>T:{weather?.current.temp_c}° </div>
            </div>
        </div>
        <iframe 
            title="mapa"
            src={`https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d209995.98749216646!2d${weather?.location.lon}6!3d${weather?.location.lat}3!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1695171638698!5m2!1ses-419!2sar`}
            width="100%" 
            height="400" 
            style={{border:0}} 
            loading="lazy" 
            
        ></iframe>
    </div>
}