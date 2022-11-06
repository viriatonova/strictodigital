const PostCard = ({ title, image, description }) => {
    return (
        <article className="main-card">
            <img className="main-image" src={image} alt={title} />
            <div className="main-description">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </article>
    );
};

export default PostCard;
