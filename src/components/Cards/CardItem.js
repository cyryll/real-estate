import { CardItemImg, CardItemInfo, CardItemLink, CardItemPicWrap, CardItems, CardItemText, CardsItem } from "./CardsElements"

const CardItem = (props) => {
    return (
        <>
            <CardsItem>
                <CardItemLink>
                    <CardItemPicWrap data-category={props.label}>
                        <CardItemImg
                            className='cards__item__img'
                            alt='Travel'
                            src={props.src}
                        />
                    </CardItemPicWrap>
                    <CardItemInfo>
                        <CardItemText>{props.text}</CardItemText>
                    </CardItemInfo>
                </CardItemLink>
            </CardsItem>
        </>
    )
}

export default CardItem
