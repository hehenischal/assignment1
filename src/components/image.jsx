const Image = ({url}) => {
    return (
    <div className="product-image">
        <img src={url} alt="Product Image"
            height={400}
            width={400}

        />
    </div>
    );    
};
export default Image;