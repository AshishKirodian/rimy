import React from 'react';
import OCR from '../../OCR/Container/con';

interface Props {

}

export default function Home(props: Props) {
    return (
        <div className="row">
            <div className="col-md-12 mt-4">
               <OCR/>
            </div>
        </div>
    )
}