import { useState, useCallback } from 'react';
import { Card } from './Card';
import update from 'immutability-helper';
import img_1 from './sliding/1.jpg';
import img_2 from './sliding/2.jpg';
import img_3 from './sliding/3.jpg';
import img_4 from './sliding/4.jpg';
import img_5 from './sliding/5.jpg';
import img_6 from './sliding/6.jpg';
import img_7 from './sliding/7.jpg';
import img_8 from './sliding/8.jpg';
import img_9 from './sliding/9.jpg';

const style = {
    display: 'grid',
    'grid-template-columns': 'repeat(3, 150px)',
    'grid-gap': '0px',
};

//
// Edited example from https://github.com/react-dnd/react-dnd/tree/gh-pages/examples_hooks_js/04-sortable/simple

export const Container = () => {
    {
        const [cards, setCards] = useState([
            {
                id: 1,
                img: img_1,
            },
            {
                id: 2,
                img: img_2,
            },
            {
                id: 3,
                img: img_3,
            },
            {
                id: 4,
                img: img_4,
            },
            {
                id: 5,
                img: img_5,
            },
            {
                id: 6,
                img: img_6,
            },
            {
                id: 7,
                img: img_7,
            },
            {
                id: 8,
                img: img_8,
            },
            {
                id: 9,
                img: img_9,
            },
        ]);
        const moveCard = useCallback((dragIndex, hoverIndex) => {
            const dragCard = cards[dragIndex];
            setCards(update(cards, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, dragCard],
                ],
            }));
        }, [cards]);
        const renderCard = (card, index) => {
            return (<Card key={card.id} index={index} id={card.id} img={card.img} moveCard={moveCard}/>);
        };
        return (<>
            <div className={'picture'} style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
        </>);
    }
};
