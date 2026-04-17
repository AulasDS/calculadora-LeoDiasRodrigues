import { useState } from 'react';
import styles from './styles.modules.scss';

export default function Contador()
{
    const [ valor, setValor ] = useState(0);
    return (
        <>
            {
                valor == 0 ? <></> :
                <button
                    className={styles.button}
                    onClick={() => setValor(0)}
                    value={-5}
                />
            }
            <p>{valor}</p>
            { 
                valor == 5 ? <></> : 
                <button 
                    className={styles.button}
                    onClick={() => setValor(5)}
                    value={+5}
                />
            }
        </>
    );
}