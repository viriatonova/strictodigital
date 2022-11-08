const ColunasCard = ({ title, image, description }) => {
    return (
        <article className="colunas-card">
            <div className="colunas-description">
                <h3>{title}</h3>
            </div>
            <img className="colunas-image" src={image} alt={title} />
        </article>
    );
};

export default ColunasCard;
