import React, { RefObject } from "react";
import { InfoCard as InfoCardText } from "../../text-content";
import { InfoCardMedia } from "../../media-content";
import InfoCard from "./InfoCard";
import LinkInfoCard from "./LinkInfoCard";
import ButtonInfoCard from "./ButtonInfoCard";

type CardSelectorProps = {
    text: InfoCardText;
    media: InfoCardMedia;
    onClick?: () => void;
};

const CardSelector = (props: CardSelectorProps) => {
    const { text, media } = props;

    if (text.type === "text") {
        return (
            <InfoCard
                onClick={props.onClick}
                header={text.header}
                message={text.message}
                imageUrl={media.url}
            />
        );
    } else if (text.type === "link") {
        return (
            <LinkInfoCard
                onClick={props.onClick}
                header={text.header}
                message={text.message}
                imageUrl={media.url}
                links={text.links}
            />
        );
    } else if (text.type === "button") {
        return (
            <ButtonInfoCard
                onClick={props.onClick}
                header={text.header}
                message={text.message}
                buttonText={text.buttonText}
                imageUrl={media.url}
            />
        );
    }
    throw new Error(`Unexpected type for a card selector prop`);
};

export default CardSelector;
