import React, { useState } from 'react';
import { MapQuestionList, MapAnswerCard, InteractiveMap } from './map';
import {Header, Footer} from './headerfooter.js';

function App(props) {
	return (
		<main>
            <Header />
            
            <div className="flex-container-overall">
                <section>
                    <div className="flex-container-leftbar">

                        <MapAnswerCard apartments={props.apartments}/>
                        <MapQuestionList questions={props.questions} />

                    </div>
                </section>
                
                <InteractiveMap />
            
            </div>
            <Footer />
        </main>
	);
}

export default App;

