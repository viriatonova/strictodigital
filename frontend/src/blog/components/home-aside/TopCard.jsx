const TopCard = ({ title, image, description }) => {
    return (
        <article className="top-card">
            <div className="top-description">
                <h3>{title}</h3>
            </div>
        </article>
    );
};

export default TopCard;
