import { useEffect, useState } from 'react';
import styles  from './Personajes.module.css'
import { ReactComponent as Loading } from '../../assets/loading.svg'

const Personajes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRefresh, setShouldRefresh] = useState(true);
  const [character, setCharacter] = useState(null);
  useEffect(function getCharacter () {
    if (!shouldRefresh) return;
    setIsLoading(true);
    fetch(`https://theofficeapi.dev/api/character/${Math.floor(Math.random() * 9)+1}`)
    .then(response => response.json())
    .then(data => {
      setShouldRefresh(false);
      console.log(data);
      setCharacter(data);
      setIsLoading(false);
    }).catch(error => console.log('Error 400 - BAD REQUEST. Hubo un error al intentar recibir la información desde la api'))
  }, [shouldRefresh])

  function onRefresh() {  
    console.log('ejecuta el on refresh')
    setShouldRefresh(true);
  }

  if(isLoading){
    return <div className='loading-wrapper'>
      <Loading />
      <span>Loading...</span>
    </div>
  }
  return (
    <div className={styles.infoContainer}>
      <button onClick={(onRefresh)} className='refresh-button'>Refresh</button>
      <h1>
        Nombre: {character.name}
      </h1>
      <p className={styles.info}>
        Actor: {character.actor}
      </p>
      <p className={styles.info}>
        Genero: {!character.gender?'Desconocido':character.gender}
      </p>
      <p className={styles.info}>
        Trabajo: {character.job[0]}
      </p>
      <p className={styles.info}>
        Lugar de trabajo: {character.workplace[0]}
      </p>
    </div>
  );
}

export default Personajes;