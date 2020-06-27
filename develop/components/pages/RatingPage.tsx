import React from "react";
import { Rating } from "../../../src/Rating";
import Highlight from "react-highlight";
import docMD from "../../../src/Rating/readme.md";

const RatingPage: React.FC = () => {
    const [rating, setRating] = React.useState<number>(3.5);

    return (
        <div className="route-template container">
            <div className="info-holder">
                <div className="info">
                    <div className="md-file">
                        <Highlight innerHTML={true}>{docMD}</Highlight>
                    </div>
                </div>

                <div className="info">
                    <h2>Output</h2>
                    <p>Here are sample outputs, selected value: {rating}</p>
                    <div className="result">
                        <Rating initialValue={rating} onChange={(value: number) => setRating(value)} tooltipList={["Very Poor", "Poor", "Average", "Very Good", "Excellent"]} />
                    </div>

                    <p>Disabled</p>
                    <div className="result">
                        <Rating initialValue={rating} onChange={(value: number) => setRating(value)} disabled={true} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RatingPage;
