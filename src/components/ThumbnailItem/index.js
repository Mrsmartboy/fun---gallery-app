import {GalleryListItem,ThumbnailButton,ThumbnailImage} from './styled'



const ThumbnailItem=(props)=>{
    const {eachThumbnail,onSelectThumbnail,isActive}=props 
    const {thumbnailUrl,thumbnailAltText,id}=eachThumbnail

    const onClickThumbnail=()=>{
        onSelectThumbnail(id)
    }
    
    return(
        <GalleryListItem>
            <ThumbnailButton onClick={onClickThumbnail}>
                <ThumbnailImage src={thumbnailUrl} alt={thumbnailAltText} isActive={isActive}/>
            </ThumbnailButton>
        </GalleryListItem>
    )

}

export default ThumbnailItem