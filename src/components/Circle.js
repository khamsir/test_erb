export const Circle = ({className, status}) => {
    return(
        <div className={`circle ${status ? className : 'grey'}`}>

        </div>
    )
}

export default Circle;