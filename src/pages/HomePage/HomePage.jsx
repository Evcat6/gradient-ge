import React from 'react';
import { GradientCard, GradientChanger, CodePanel } from '../../components'
import styles from './Home.module.css'; 
import { RangeChangerProvider, PickerProvider, OpenPickerProvider } from '../../context'

const HomePage = () => {
    return ( 
        <RangeChangerProvider>
            <PickerProvider>
                <OpenPickerProvider>
                <section className={styles.container} >
                    <h1 className={styles.title} >Gradient Generator</h1>
                    <div className={styles.changer} >
                        <GradientChanger/>
                        <GradientCard/>
                        <CodePanel/>
                    </div>
                </section>
                </OpenPickerProvider>
            </PickerProvider>
        </RangeChangerProvider>
    );
}
 
export default HomePage;